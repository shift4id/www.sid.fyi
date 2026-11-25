import type { Metadata } from "next";
import { ChapterOpener } from "@/components/chapter-opener";
import { Page } from "@/components/page";
import { photos } from "@/constants/photos";
import { pageMetadata, pages } from "@/utils/metadata";
import { FilmStrip } from "./components/film-strip";

export const metadata: Metadata = pageMetadata({ ...pages.gallery, path: "/gallery" });

export default function Gallery(): React.ReactNode {
  return (
    <Page>
      <ChapterOpener href="/gallery" />
      <FilmStrip photos={photos} />
    </Page>
  );
}
