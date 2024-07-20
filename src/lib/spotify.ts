import { redis } from "./redis";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const authorization = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const TOKEN_URL = `https://accounts.spotify.com/api/token`;
const BASE_URL = "https://api.spotify.com/v1/me";

const CURRENTLY_PLAYING_URL = `${BASE_URL}/player/currently-playing`;

interface SpotifyItem {
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
  name: string;
  image?: string;
  url: string;
}

interface Profile extends Item {
  followers: number;
  type: "profile";
}

interface Song extends Item {
  artist: string;
  type: "song";
}

const getAccessToken = async (): Promise<string> => {
  const storedToken = await redis.get<string>("access_token");
  if (storedToken) return storedToken;

  interface TokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }

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

  // eslint-disable-next-line no-console -- Debugging
  console.log("ACCESS TOKEN", accessToken, expiresIn);

  await redis.set("access_token", accessToken, { ex: expiresIn });
  return accessToken;
};

const getHeaders = async (): Promise<HeadersInit> => ({ Authorization: `Bearer ${await getAccessToken()}` });

const fetcher = async <T>(url: string): Promise<T> =>
  fetch(url, {
    headers: await getHeaders(),
    next: { revalidate: 60 * 60 },
  }).then((r) => r.json()) as T;

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

const getNowPlaying = async (): Promise<Song | undefined> => {
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
};

const getProfile = async (): Promise<Profile> => fetcher<SpotifyProfile>(BASE_URL).then(mapProfile);

const TOP_URL = `${BASE_URL}/top`;
const TOP_PARAMS = new URLSearchParams({ limit: "10", time_range: "short_term" });

const getTopData = async <Response, Data>(type: string, map: (item: Response) => Data): Promise<Data[]> =>
  fetcher<{ items: Response[] }>(`${TOP_URL}/${type}?${TOP_PARAMS.toString()}`).then((r) => {
    // eslint-disable-next-line no-console -- Debugging
    console.log("TOP DATA RESPONSE", r);

    return r.items.map(map);
  });

const getTopArtists = (): Promise<Profile[]> => getTopData("artists", mapArtist);

const getTopSongs = (): Promise<Song[]> => getTopData("tracks", mapSong);

export type { Profile, Song };
export { getNowPlaying, getProfile, getTopArtists, getTopSongs };
