import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import { Section } from "@/components/section";
import { getNowPlaying, getTopArtists, getTopSongs, type Song } from "@/lib/spotify";
import { Item } from "./components/item";
import { Turntable } from "./components/turntable";
import { Vinyl } from "./components/vinyl";

const fallbackList = Array.from({ length: 10 }).map((_, i) => ({
  id: `item-${i + 1}`,
}));

const idleSong: Song = {
  id: "0",
  name: "Silence",
  artist: "N/A",
  url: "https://spotify.com",
  type: "song",
};

async function NowPlaying(): Promise<React.JSX.Element> {
  const song = await getNowPlaying().catch(() => idleSong);

  return <Turntable {...(song ?? idleSong)} />;
}

async function TopArtistsGrid(): Promise<React.JSX.Element> {
  const artists = await getTopArtists().catch(() => fallbackList);

  return <Grid Of={Item} items={artists} />;
}

async function TopSongsGrid(): Promise<React.JSX.Element> {
  const songs = await getTopSongs().catch(() => fallbackList);

  return <Grid className="grid-cols-2 gap-8 sm:grid-cols-5 sm:gap-4" Of={Vinyl} items={songs} />;
}

const containerProps = {
  title: "Jukebox",
  description: "Listen to my favorite songs and artists.",
};

export const metadata: Metadata = containerProps;
export const revalidate = 3600; // 1 Hour

export default function Jukebox(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Section title="Now Playing">
        <Suspense fallback={<Turntable />}>
          <NowPlaying />
        </Suspense>
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
