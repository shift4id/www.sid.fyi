const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });

const socials = {
  email: "mailto:hi@sid.fyi",
  facebook: "https://facebook.com/sid.adusumelli",
  github: "https://github.com/shift4id",
  instagram: "https://instagram.com/shift4id",
  linkedin: "https://linkedin.com/in/sid-a",
  spotify: "https://open.spotify.com/user/sidfrostbear",
  twitter: "https://twitter.com/shift4id",
};

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "*.(scdn.co|spotifycdn.com)" },
      { hostname: "cdn.sid.fyi" },
      { hostname: "i.gr-assets.com" },
    ],
  },
  redirects: () =>
    Object.entries(socials).map(([key, destination]) => ({
      source: `/socials/${key}`,
      destination,
      permanent: false,
    })),
});
