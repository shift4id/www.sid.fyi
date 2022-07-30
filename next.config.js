const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co", "cdn.sid.fyi"],
  },
  webpack(config, options) {
    options.config.pwa = {
      dest: "public",
      disable: process.env.NODE_ENV !== 'production',
      runtimeCaching  
    }

    return config;
  }
});
