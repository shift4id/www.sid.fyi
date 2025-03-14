import type { MetadataRoute } from "next";
import { clientEnv } from "@/constants/env";

const { WEBSITE_URL } = clientEnv;

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
    host: WEBSITE_URL,
  };
}

export default robots;
