declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_WEBSITE_URL: string;
    NEXT_PUBLIC_CDN_URL: string;

    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REFRESH_TOKEN: string;

    GITHUB_ACCESS_TOKEN: string;
    GITHUB_USER_NAME: string;

    NOTION_API_KEY: string;
    BOOK_DATA_SOURCE_ID: string;
  }
}
