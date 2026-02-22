import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import { Section } from "@/components/section";
import { getProfile, getTopArtists, getTopSongs } from "@/lib/spotify";
import { Item } from "./components/item";
import { NowPlaying } from "./components/now-playing";

const fallbackProfile: Record<string, unknown> = {};
const fallbackList = Array.from({ length: 10 }).map((_, i) => ({
  id: `item-${i + 1}`,
}));

async function ProfileItem(): Promise<React.JSX.Element> {
  const profile = await getProfile().catch(() => fallbackProfile);

  return <Item {...profile} />;
}

async function TopArtistsGrid(): Promise<React.JSX.Element> {
  const artists = await getTopArtists().catch(() => fallbackList);

  return <Grid Of={Item} items={artists} />;
}

async function TopSongsGrid(): Promise<React.JSX.Element> {
  const songs = await getTopSongs().catch(() => fallbackList);

  return <Grid Of={Item} items={songs} />;
}

const containerProps = {
  title: "Jukebox",
  description: "Listen to my favorite songs, artists, and check out my profile.",
};

export const metadata: Metadata = containerProps;
export const revalidate = 3600; // 1 Hour

export default function Jukebox(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Grid
        Of={Section}
        items={[
          {
            id: "profile",
            title: "Profile",
            children: (
              <Suspense fallback={<Item />}>
                <ProfileItem />
              </Suspense>
            ),
          },
          { id: "now-playing", title: "Now Playing", children: <NowPlaying /> },
        ]}
      />
      <Section title="My Top Artists">
        <Suspense fallback={<Grid Of={Item} items={fallbackList} />}>
          <TopArtistsGrid />
        </Suspense>
      </Section>
      <Section title="My Top Tracks">
        <Suspense fallback={<Grid Of={Item} items={fallbackList} />}>
          <TopSongsGrid />
        </Suspense>
      </Section>
    </Container>
  );
}
