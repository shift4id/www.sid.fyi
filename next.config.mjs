// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "*.(scdn.co|spotifycdn.com)" },
      { hostname: "cdn.sid.fyi" },
      { hostname: "i.gr-assets.com" },
    ],
  },
};

export default config;
