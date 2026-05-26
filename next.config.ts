import type { NextConfig } from "next";

const config = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "*.(scdn.co|spotifycdn.com)" },
      { hostname: "cdn.sid.fyi" },
      { hostname: "i.gr-assets.com" },
    ],
    unoptimized: true,
  },
} satisfies NextConfig;

export default config;
