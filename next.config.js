const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: "*.(scdn.co|spotifycdn.com)" }],
    domains: ["cdn.sid.fyi", "i.gr-assets.com"],
  },
});
