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
  // the old Chat page now lives in the Contact section at the end of the homepage
  redirects: async () => [{ source: "/chat", destination: "/#contact", permanent: true }],
} satisfies NextConfig;

export default config;
