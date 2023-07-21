const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co", "images-ak.spotifycdn.com", "cdn.sid.fyi", "i.gr-assets.com"],
  },
});
