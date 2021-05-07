/* eslint-disable global-require */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' ajax.cloudflare.com static.cloudflareinsights.com www.googletagmanager.com www.google-analytics.com;
  child-src 'self';
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' fonts.gstatic.com fonts.googleapis.com;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  reactStrictMode: true,
  experimental: {
    turboMode: true,
  },
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  images: {
    domains: ["i.scdn.co"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
      require("./scripts/generate-rss");
    }

    return config;
  },
});
