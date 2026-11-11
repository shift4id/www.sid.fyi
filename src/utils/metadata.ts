import type { Metadata } from "next";

export const siteName = "Sid A";
export const fullName = "Siddharth Adusumelli";
export const tagline =
  "is a software engineer who enjoys crafting beautiful and accessible user experiences.";
export const siteDescription = `${fullName} ${tagline}`;

const twitterHandle = "@shift4id";

export const pages = {
  jukebox: { title: "Jukebox", description: "Listen to my favorite songs and artists." },
  gallery: { title: "Gallery", description: "Experience the world through my lens." },
  library: {
    title: "Library",
    description: "Explore various books that have influenced my thinking.",
  },
  chat: { title: "Chat", description: "Let's have a conversation." },
} as const;

interface PageMetadataOptions {
  title: string;
  description: string;
  path: `/${string}`;
}

export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const shareTitle = path === "/" ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, siteName, title: shareTitle, description },
    twitter: {
      card: "summary_large_image",
      site: twitterHandle,
      creator: twitterHandle,
      title: shareTitle,
      description,
    },
  };
}
