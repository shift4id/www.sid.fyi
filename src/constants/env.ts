import process from "node:process";

export const clientEnv = {
  WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  CDN_URL: process.env.NEXT_PUBLIC_CDN_URL,
};

export const serverEnv = {
  NOTION_API_KEY: process.env.NOTION_API_KEY,
  BOOK_DATA_SOURCE_ID: process.env.BOOK_DATA_SOURCE_ID,

  SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
};
