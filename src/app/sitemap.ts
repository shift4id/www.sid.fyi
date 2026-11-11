import type { MetadataRoute } from "next";
import { clientEnv } from "@/constants/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clientEnv.WEBSITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${clientEnv.WEBSITE_URL}/chat`,
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${clientEnv.WEBSITE_URL}/gallery`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${clientEnv.WEBSITE_URL}/jukebox`,
      changeFrequency: "hourly",
      priority: 0.8,
    },
    {
      url: `${clientEnv.WEBSITE_URL}/library`,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
