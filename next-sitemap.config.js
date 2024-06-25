/**
 * @type {import("next-sitemap").IConfig}
 */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL,
  generateRobotsTxt: true,
};

module.exports = config;
