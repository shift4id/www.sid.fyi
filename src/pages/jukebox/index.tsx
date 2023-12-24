import { InferGetStaticPropsType, NextPage } from "next";
import Container, { Metadata } from "@/components/container";
import Grid from "@/components/grid";
import Card from "@/components/jukebox/card";
import NowPlaying from "@/components/jukebox/now-playing";
import Section from "@/components/jukebox/section";
import { getPlaylists, getTopSongs } from "@/lib/spotify";

const getStaticProps = async () => ({
  props: { playlists: await getPlaylists(), songs: await getTopSongs() },
  revalidate: 60 * 60,
});

const md: Metadata = { title: "Jukebox", description: "Listen to my favorite songs and curated playlists." };

const Jukebox: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ playlists, songs }) => (
  <Container {...md}>
    <Section title="Now Playing">
      <NowPlaying />
    </Section>
    <Section title="My Playlists">
      <Grid Of={Card} items={playlists} />
    </Section>
    <Section title="My Top Tracks">
      <Grid Of={Card} items={songs} />
    </Section>
  </Container>
);

export { getStaticProps };
export default Jukebox;
