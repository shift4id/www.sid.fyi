import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

export default robots;
