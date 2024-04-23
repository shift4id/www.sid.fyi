import { defaultSong } from "@/constants/spotify";
import redis from "./redis";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const authorization = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const TOKEN_URL = `https://accounts.spotify.com/api/token`;
const BASE_URL = "https://api.spotify.com/v1/me";

const CURRENTLY_PLAYING_URL = `${BASE_URL}/player/currently-playing`;

type SpotifyItem = {
  images: { url: string }[];
  external_urls: { spotify: string };
};

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

type Item = { name: string; image?: string; url: string };

interface Profile extends Item {
  followers: number;
  type: "profile";
}

interface Song extends Item {
  isPlaying?: boolean;
  artist: string;
  type: "song";
}

const getAccessToken = async (): Promise<string> => {
  const storedToken = await redis.get<string>("access_token");
  if (storedToken) return storedToken;
  type TokenResponse = { access_token: string; refresh_token: string; expires_in: number };

  const params = new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken });
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
};

const getHeaders = async () => ({ Authorization: `Bearer ${await getAccessToken()}` });

const fetcher = async <T>(url: string): Promise<T> =>
  fetch(url, { headers: await getHeaders() }).then((r) => r.json()) as T;

const mapArtist = (item: SpotifyArtist): Profile => ({
  name: item.name,
  image: item.images[0].url,
  followers: item.followers.total,
  url: item.external_urls.spotify,
  type: "profile",
});

const mapProfile = (item: SpotifyProfile): Profile => ({
  name: item.display_name,
  image: item.images[0].url,
  followers: item.followers.total,
  url: item.external_urls.spotify,
  type: "profile",
});

const mapSong = (item: SpotifySong): Song => ({
  name: item.name,
  image: item.album.images[0].url,
  artist: item.artists.map(({ name }) => name).join(", "),
  url: item.external_urls.spotify,
  type: "song",
});

const getNowPlaying = async (): Promise<Song> => {
  const storedSong = await redis.get<Song>("song");
  if (storedSong) return storedSong;

  type CurrentlyPlayingResponse = { is_playing: boolean; item?: SpotifySong };

  const song: Song = await fetcher<CurrentlyPlayingResponse>(CURRENTLY_PLAYING_URL)
    .then(({ is_playing, item }) => ({ isPlaying: is_playing, ...(item ? mapSong(item) : defaultSong) }))
    .catch(() => ({ is_playing: false, ...defaultSong }));

  await redis.set("song", song, { ex: 60 });
  return song;
};

const getProfile = async (): Promise<Profile> => {
  const storedProfile = await redis.get<Profile>("profile");
  if (storedProfile) return storedProfile;

  const profile = await fetcher<SpotifyProfile>(BASE_URL).then((r) => {
    return mapProfile(r);
  });

  await redis.set("profile", profile, { ex: 24 * 60 * 60 });
  return profile;
};

const getTopData = async <Response, Data>(key: string, map: (item: Response) => Data): Promise<Data[]> => {
  const storedData = await redis.get<Data[]>(key);
  if (storedData) return storedData;

  const url = `${BASE_URL}/top/${key}`;
  const params = new URLSearchParams({ limit: "10", time_range: "short_term" });
  const data = await fetcher<{ items: Response[] }>(`${url}?${params.toString()}`).then((r) =>
    r.items.map(map),
  );

  await redis.set(key, data, { ex: 24 * 60 * 60 });
  return data;
};

const getTopArtists = () => getTopData<SpotifyArtist, Profile>("artists", mapArtist);

const getTopSongs = () => getTopData<SpotifySong, Song>("tracks", mapSong);

export type { Profile, Song };
export { getNowPlaying, getProfile, getTopArtists, getTopSongs };
