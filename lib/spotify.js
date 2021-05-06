import fetch from "isomorphic-unfetch";
import querystring from "querystring";

import redis from "@/lib/redis";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const authorization = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const token = `https://accounts.spotify.com/api/token`;
const currentlyPlaying = `https://api.spotify.com/v1/me/player/currently-playing`;
const topTracks = `https://api.spotify.com/v1/me/top/tracks`;

const getAccessToken = async () => {
  const storedToken = await redis.get("access_token");

  if (storedToken) return storedToken;

  const response = await fetch(token, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authorization}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const { access_token: accessToken, expires_in: expiresIn } = await response.json();

  await redis.set("access_token", accessToken, "EX", expiresIn);

  return accessToken;
};

export const getCurrentlyPlaying = async () => {
  const accessToken = await getAccessToken();

  return fetch(currentlyPlaying, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getTopSongs = async () => {
  const accessToken = await getAccessToken();

  return fetch(
    `${topTracks}?${querystring.stringify({
      time_range: "short_term",
      limit: 10,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
