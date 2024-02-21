import redis from "./redis";

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
  name: string;
  album: { images: { url: string }[] };
  artists: { name: string }[];
  external_urls: { spotify: string };
};

type SpotifyPlaylist = {
  name: string;
  href: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  public: boolean;
  owner: { id: string };
  tracks: { total: number };
};

type Song = {
  image?: string;
  title: string;
  url: string;
  artist: string;
  isPlaying?: boolean;
  type: "song";
};

type Playlist = {
  image?: string;
  title: string;
  url: string;
  count: number;
  public: boolean;
  type: "playlist";
};

type CurrentSong = { isPlaying: false } | Song;

const getAccessToken = async (): Promise<string> => {
  const storedToken = await redis.get<string>("access_token");
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
    },
  ).then((r) => r.json())) as TokenResponse;

  await redis.set("access_token", accessToken, { ex: expiresIn });
  return accessToken;
};

const getSongData = (item: SpotifySong): Song => {
  return {
    artist: item.artists.map(({ name }) => name).join(", "),
    image: item.album.images[0].url,
    title: item.name,
    url: item.external_urls.spotify,
    type: "song",
  };
};

const getPlaylistData = (item: SpotifyPlaylist): Playlist => {
  return {
    image: item.images[0].url,
    title: item.name,
    url: item.external_urls.spotify,
    count: item.tracks.total,
    public: item.public,
    type: "playlist",
  };
};

const getHeaders = async () => {
  const accessToken = await getAccessToken();
  return { Authorization: `Bearer ${accessToken}` };
};

const getNowPlaying = async (): Promise<CurrentSong> => {
  const storedSong = await redis.get<CurrentSong>("song");
  if (storedSong) return storedSong;

  type CurrentlyPlayingResponse = {
    is_playing: boolean;
    item: SpotifySong;
  };

  const headers = await getHeaders();
  const response = await fetch(CURRENTLY_PLAYING_URL, { headers });

  if (response.status === 204 || response.status > 400) {
    const song = { isPlaying: false };
    await redis.set("song", song, { ex: 60 });
    return { isPlaying: false };
  }

  const { item, is_playing: isPlaying } = (await response.json()) as CurrentlyPlayingResponse;

  const song: Song = { isPlaying, ...getSongData(item) };
  await redis.set("song", song, { ex: 60 });
  return song;
};

const getPlaylists = async (showPrivate = false): Promise<Playlist[]> => {
  const redisKey = showPrivate ? "playlists-all" : "playlists";
  await redis.del(redisKey);

  const storedPlaylists = await redis.get<Playlist[]>(redisKey);
  if (storedPlaylists) return storedPlaylists;

  type PlaylistsResponse = { items: SpotifyPlaylist[] };

  const headers = await getHeaders();
  const { items } = (await fetch(`${PLAYLISTS_URL}?${new URLSearchParams({ limit: "50" }).toString()}`, {
    headers,
  }).then((r) => r.json())) as PlaylistsResponse;

  const playlists: Playlist[] = items
    .filter((p) => p.owner.id === "sidfrostbear")
    .map(getPlaylistData)
    .filter((p) => showPrivate || p.public);
  await redis.set(redisKey, playlists, { ex: 24 * 60 * 60 });
  return playlists;
};

const getTopSongs = async (): Promise<Song[]> => {
  const storedTopSongs = await redis.get<Song[]>("top_songs");
  if (storedTopSongs) return storedTopSongs;

  type TopTracksResponse = { items: SpotifySong[] };

  const headers = await getHeaders();
  const { items } = (await fetch(
    `${TOP_TRACKS_URL}?${new URLSearchParams({
      time_range: "short_term",
      limit: "10",
    }).toString()}`,
    { headers },
  ).then((r) => r.json())) as TopTracksResponse;

  const topSongs: Song[] = items.map(getSongData);
  await redis.set("top_songs", topSongs, { ex: 24 * 60 * 60 });
  return topSongs;
};

export type { Playlist, Song };
export { getNowPlaying, getPlaylists, getTopSongs };
