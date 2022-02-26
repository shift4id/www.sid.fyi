import fetch from "isomorphic-unfetch";
import redis from "@/lib/redis";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const authorization = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const TOKEN_URL = `https://accounts.spotify.com/api/token`;
const BASE_URL = "https://api.spotify.com/v1/me";
const CURRENTLY_PLAYING_URL = `${BASE_URL}/player/currently-playing`;
const TOP_TRACKS_URL = `${BASE_URL}/top/tracks`;
const PLAYLISTS_URL = `${BASE_URL}/playlists`;

type SpotifySong = {
  album: { images: { url: string }[] };
  artists: { name: string }[];
  name: string;
  external_urls: { spotify: string };
};

type SpotifyPlaylist = {
  name: string;
  href: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  public: boolean;
  tracks: { total: number };
};

type Song = {
  isPlaying?: boolean;
  artist: string;
  image: string;
  title: string;
  url: string;
  type: "song";
};

type Playlist = {
  image: string;
  title: string;
  url: string;
  count: number;
  public: boolean;
  type: "playlist";
};

type CurrentSong = { isPlaying: boolean } | Song;

const getAccessToken = async function (): Promise<string> {
  const storedToken = await redis.get("access_token");
  if (storedToken) return storedToken;

  type TokenResponse = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
  };

  const { access_token: accessToken, expires_in: expiresIn }: TokenResponse = (await fetch(
    `${TOKEN_URL}?${new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString()}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then((r) => r.json())) as TokenResponse;

  await redis.set("access_token", accessToken, "EX", expiresIn);
  return accessToken;
};

const getSongData = function (item: SpotifySong): Song {
  return {
    artist: item.artists.map(({ name }) => name).join(", "),
    image: item.album.images[0].url,
    title: item.name,
    url: item.external_urls.spotify,
    type: "song",
  };
};

const getPlaylistData = function (item: SpotifyPlaylist): Playlist {
  return {
    image: item.images[0].url,
    title: item.name,
    url: item.external_urls.spotify,
    count: item.tracks.total,
    public: item.public,
    type: "playlist",
  };
};

const getCurrentlyPlaying = async function (): Promise<Song | CurrentSong> {
  const storedSong = JSON.parse(await redis.get("song")) as Song;
  if (storedSong) return storedSong;

  const accessToken = await getAccessToken();

  type CurrentlyPlayingResponse = {
    is_playing: boolean;
    item: SpotifySong;
  };

  const response = await fetch(CURRENTLY_PLAYING_URL, { headers: { Authorization: `Bearer ${accessToken}` } });

  if (response.status === 204 || response.status > 400) {
    const song = { isPlaying: false };
    await redis.set("song", JSON.stringify(song), "EX", 60);
    return { isPlaying: false };
  }

  const { item, is_playing: isPlaying } = (await response.json()) as CurrentlyPlayingResponse;

  const song: Song = { isPlaying, ...getSongData(item) };
  await redis.set("song", JSON.stringify(song), "EX", 60);
  return song;
};

const getPlaylists = async function (): Promise<Playlist[]> {
  const storedPlaylists = JSON.parse(await redis.get("playlists")) as Playlist[];
  if (storedPlaylists) return storedPlaylists;

  const accessToken = await getAccessToken();

  type PlaylistsResponse = { items: SpotifyPlaylist[] };

  const { items } = (await fetch(`${PLAYLISTS_URL}?${new URLSearchParams({ limit: "10" }).toString()}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  }).then((r) => r.json())) as PlaylistsResponse;

  const playlists: Playlist[] = items.map(getPlaylistData).filter((playlist) => playlist.public);
  await redis.set("playlists", JSON.stringify(playlists), "EX", 24 * 60 * 60);
  return playlists;
};

const getTopSongs = async function (): Promise<Song[]> {
  const storedTopSongs = JSON.parse(await redis.get("top_songs")) as Song[];
  if (storedTopSongs) return storedTopSongs;

  const accessToken = await getAccessToken();

  type TopTracksResponse = { items: SpotifySong[] };

  const { items } = (await fetch(
    `${TOP_TRACKS_URL}?${new URLSearchParams({
      time_range: "short_term",
      limit: "10",
    }).toString()}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  ).then((r) => r.json())) as TopTracksResponse;

  const topSongs: Song[] = items.map(getSongData);
  await redis.set("top_songs", JSON.stringify(topSongs), "EX", 24 * 60 * 60);
  return topSongs;
};

export type { Playlist, Song };
export { getCurrentlyPlaying, getPlaylists, getTopSongs };
