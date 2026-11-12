import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import { Section } from "@/components/section";
import { getTopArtists, getTopSongs } from "@/lib/spotify";
import { pageMetadata, pages } from "@/utils/metadata";
import { Item } from "./components/item";
import { NowPlaying } from "./components/now-playing";
import { Vinyl } from "./components/vinyl";

const fallbackList = Array.from({ length: 10 }).map((_, i) => ({
  id: `item-${i + 1}`,
}));

async function TopArtistsGrid(): Promise<React.JSX.Element> {
  const artists = await getTopArtists().catch(() => fallbackList);

  return <Grid Of={Item} items={artists} />;
}

async function TopSongsGrid(): Promise<React.JSX.Element> {
  const songs = await getTopSongs().catch(() => fallbackList);

  return <Grid className="grid-cols-2 gap-8 sm:grid-cols-5 sm:gap-4" Of={Vinyl} items={songs} />;
}

const containerProps = pages.jukebox;

export const metadata: Metadata = pageMetadata({ ...containerProps, path: "/jukebox" });
export const revalidate = 3600; // 1 Hour

export default function Jukebox(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Section title="Now Playing">
        <NowPlaying />
      </Section>
      <Section title="My Top Tracks">
        <Suspense
          fallback={
            <Grid className="grid-cols-2 gap-4 sm:grid-cols-5" Of={Vinyl} items={fallbackList} />
          }
        >
          <TopSongsGrid />
        </Suspense>
      </Section>
      <Section title="My Top Artists">
        <Suspense fallback={<Grid Of={Item} items={fallbackList} />}>
          <TopArtistsGrid />
        </Suspense>
      </Section>
    </Container>
  );
}
