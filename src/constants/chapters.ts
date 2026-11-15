import { pages } from "@/utils/metadata";

export interface Chapter {
  numeral: string;
  href: `/${string}`;
  title: string;
  description: string;
}

/** Order matters: it decides the numbering everywhere. */
export const chapters = [
  { numeral: "I", href: "/", ...pages.introduction },
  { numeral: "II", href: "/jukebox", ...pages.jukebox },
  { numeral: "III", href: "/gallery", ...pages.gallery },
  { numeral: "IV", href: "/library", ...pages.library },
] as const satisfies readonly Chapter[];

export type ChapterHref = (typeof chapters)[number]["href"];

export function getChapter(href: ChapterHref): Chapter {
  return chapters.find((chapter) => chapter.href === href) as Chapter;
}
