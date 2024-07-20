import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Container, Grid, Section } from "@/components";
import { getProfile, getTopArtists, getTopSongs } from "@/lib/spotify";
import { Item } from "./components/item";
import { NowPlaying } from "./components/now-playing";

const fallbackValue: Record<string, never> = {};
const fallbackData = Array.from<typeof fallbackValue>({ length: 10 }).fill({});

async function ProfileItem(): Promise<React.JSX.Element> {
  const profile = await getProfile().catch((e: unknown) => {
    // eslint-disable-next-line no-console -- Debugging
    console.error(e);
    return fallbackValue;
  });

  return <Item {...profile} />;
}

async function TopArtistsGrid(): Promise<React.JSX.Element> {
  const artists = await getTopArtists().catch((e: unknown) => {
    // eslint-disable-next-line no-console -- Debugging
    console.error(e);
    return fallbackData;
  });

  return <Grid Of={Item} items={artists} />;
}

async function TopSongsGrid(): Promise<React.JSX.Element> {
  const songs = await getTopSongs().catch((e: unknown) => {
    // eslint-disable-next-line no-console -- Debugging
    console.error(e);
    return fallbackData;
  });

  return <Grid Of={Item} items={songs} />;
}

const metadata = {
  title: "Jukebox",
  description: "Listen to my favorite songs, artists, and check out my profile.",
} satisfies Metadata;

function Jukebox(): React.ReactNode {
  return (
    <Container {...metadata}>
      <Grid
        Of={Section}
        items={[
          {
            title: "Profile",
            children: (
              <Suspense fallback={<Item />}>
                <ProfileItem />
              </Suspense>
            ),
          },
          { title: "Now Playing", children: <NowPlaying /> },
        ]}
      />
      <Section title="My Top Artists">
        <Suspense fallback={<Grid Of={Item} items={fallbackData} />}>
          <TopArtistsGrid />
        </Suspense>
      </Section>
      <Section title="My Top Tracks">
        <Suspense fallback={<Grid Of={Item} items={fallbackData} />}>
          <TopSongsGrid />
        </Suspense>
      </Section>
    </Container>
  );
}

export { metadata };
export default Jukebox;
