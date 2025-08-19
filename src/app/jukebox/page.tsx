import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import { Section } from "@/components/section";
import { getProfile, getTopArtists, getTopSongs } from "@/lib/spotify";
import { Item } from "./components/item";
import { NowPlaying } from "./components/now-playing";

const fallbackValue: Record<string, never> = {};
const fallbackData = Array.from<typeof fallbackValue>({ length: 10 }).fill(fallbackValue);

async function ProfileItem(): Promise<React.JSX.Element> {
  const profile = await getProfile().catch(() => fallbackValue);

  return <Item {...profile} />;
}

async function TopArtistsGrid(): Promise<React.JSX.Element> {
  const artists = await getTopArtists().catch(() => fallbackData);

  return <Grid Of={Item} items={artists} />;
}

async function TopSongsGrid(): Promise<React.JSX.Element> {
  const songs = await getTopSongs().catch(() => fallbackData);

  return <Grid Of={Item} items={songs} />;
}

const containerProps = {
  title: "Jukebox",
  description: "Listen to my favorite songs, artists, and check out my profile.",
};
const metadata: Metadata = containerProps;

const revalidate = 60 * 60;

function Jukebox(): React.ReactNode {
  return (
    <Container {...containerProps}>
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

export { metadata, revalidate };
export default Jukebox;
