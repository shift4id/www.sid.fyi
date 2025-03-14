import type { MetadataRoute } from "next";
import { client } from "@/constants/env";

function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: client.WEBSITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${client.WEBSITE_URL}/chat`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${client.WEBSITE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${client.WEBSITE_URL}/jukebox`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.8,
    },
    {
      url: `${client.WEBSITE_URL}/library`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}

export default sitemap;
