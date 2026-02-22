import { Buffer } from "node:buffer";
import { serverEnv } from "@/constants/env";
import { redis } from "./redis";

const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refreshToken,
} = serverEnv;

const authorization = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const TOKEN_URL = `https://accounts.spotify.com/api/token`;
const BASE_URL = "https://api.spotify.com/v1/me";

const CURRENTLY_PLAYING_URL = `${BASE_URL}/player/currently-playing`;

const TOP_URL = `${BASE_URL}/top`;
const TOP_PARAMS = new URLSearchParams({
  limit: "10",
  time_range: "short_term",
});

interface SpotifyItem {
  id: string;
  images: { url: string }[];
  external_urls: { spotify: string };
}

interface SpotifyArtist extends SpotifyItem {
  name: string;
  followers: { total: number };
}

interface SpotifyProfile extends SpotifyItem {
  display_name: string;
  followers: { total: number };
}

interface SpotifySong extends SpotifyItem {
  name: string;
  album: { images: { url: string }[] };
  artists: { name: string }[];
}

interface Item {
  id: string;
  name: string;
  image?: string;
  url: string;
}

export interface Profile extends Item {
  followers: number;
  type: "profile";
}

export interface Song extends Item {
  artist: string;
  type: "song";
}

async function getAccessToken(): Promise<string> {
  const storedToken = await redis.get<string>("access_token");
  if (storedToken) return storedToken;

  interface TokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
  const { access_token: accessToken, expires_in: expiresIn }: TokenResponse = (await fetch(
    `${TOKEN_URL}?${params.toString()}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  ).then((r) => r.json())) as TokenResponse;

  await redis.set("access_token", accessToken, { ex: expiresIn });
  return accessToken;
}

function mapArtist(item: SpotifyArtist): Profile {
  return {
    id: item.id,
    name: item.name,
    image: item.images[0].url,
    followers: item.followers.total,
    url: item.external_urls.spotify,
    type: "profile",
  };
}

function mapProfile(item: SpotifyProfile): Profile {
  return {
    id: item.id,
    name: item.display_name,
    image: item.images[0].url,
    followers: item.followers.total,
    url: item.external_urls.spotify,
    type: "profile",
  };
}

function mapSong(item: SpotifySong): Song {
  return {
    id: item.id,
    name: item.name,
    image: item.album.images[0].url,
    artist: item.artists.map(({ name }) => name).join(", "),
    url: item.external_urls.spotify,
    type: "song",
  };
}

async function fetcher<T>(url: string): Promise<T> {
  return fetch(url, {
    headers: { Authorization: `Bearer ${await getAccessToken()}` },
  }).then((r) => r.json()) as T;
}

export async function getNowPlaying(): Promise<Song | undefined> {
  const storedSong = await redis.get<Song>("song");
  if (storedSong) return storedSong;

  interface CurrentlyPlayingResponse {
    is_playing: boolean;
    item?: SpotifySong;
  }

  const song: Song | undefined = await fetcher<CurrentlyPlayingResponse>(CURRENTLY_PLAYING_URL)
    .then(({ is_playing: isPlaying, item }) => (isPlaying && item ? mapSong(item) : undefined))
    .catch(() => undefined);

  if (song) await redis.set("song", song, { ex: 60 });
  return song;
}

export const getProfile = async (): Promise<Profile> =>
  fetcher<SpotifyProfile>(BASE_URL).then(mapProfile);

async function getTopData<Response, Data>(
  type: string,
  map: (item: Response) => Data,
): Promise<Data[]> {
  return fetcher<{ items: Response[] }>(`${TOP_URL}/${type}?${TOP_PARAMS.toString()}`).then((r) =>
    r.items.map(map),
  );
}

export const getTopArtists = (): Promise<Profile[]> => getTopData("artists", mapArtist);

export const getTopSongs = (): Promise<Song[]> => getTopData("tracks", mapSong);
