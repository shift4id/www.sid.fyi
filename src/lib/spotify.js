import fetch from "isomorphic-unfetch";

import redis from "@/lib/redis";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const authorization = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const TOKEN_URL = `https://accounts.spotify.com/api/token`;
const CURRENTLY_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_URL = `https://api.spotify.com/v1/me/top/tracks`;

const getAccessToken = async function () {
  // const storedToken = await redis.get("access_token");

  // if (storedToken) return storedToken;

  const { access_token: accessToken, expires_in: expiresIn } = await fetch(
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
  ).then((r) => r.json());

  await redis.set("access_token", accessToken, "EX", expiresIn);

  return accessToken;
};

export const getCurrentlyPlaying = async function () {
  const accessToken = await getAccessToken();

  return fetch(CURRENTLY_PLAYING_URL, { headers: { Authorization: `Bearer ${accessToken}` } });
};

export const getTopSongs = async function () {
  const accessToken = await getAccessToken();

  return fetch(
    `${TOP_TRACKS_URL}?${new URLSearchParams({
      time_range: "short_term",
      limit: 10,
    }).toString()}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
};
