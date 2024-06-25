// @ts-check
import withBundleAnalyzer from "@next/bundle-analyzer";

/**
 * @type {Record<string, string>}
 */
const socials = {
  email: "mailto:hi@sid.fyi",
  facebook: "https://facebook.com/sid.adusumelli",
  github: "https://github.com/shift4id",
  instagram: "https://instagram.com/shift4id",
  linkedin: "https://linkedin.com/in/sid-a",
  spotify: "https://open.spotify.com/user/sidfrostbear",
  twitter: "https://twitter.com/shift4id",
};

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
  redirects: async () =>
    Object.entries(socials).map(([key, destination]) => ({
      source: `/socials/${key}`,
      destination,
      permanent: false,
    })),
};

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(config);
