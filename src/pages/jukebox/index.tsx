import { InferGetStaticPropsType, NextPage } from "next";
import Container, { Metadata } from "@/components/container";
import Grid from "@/components/grid";
import Heading from "@/components/heading";
import Card from "@/components/jukebox/card";
import NowPlaying from "@/components/jukebox/now-playing";
import Section from "@/components/jukebox/section";
import { getPlaylists, getTopSongs } from "@/lib/spotify";

const getStaticProps = async function () {
  return { props: { playlists: await getPlaylists(), songs: await getTopSongs() }, revalidate: 60 * 60 };
};

const Jukebox: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = function ({ playlists, songs }) {
  const md: Metadata = {
    title: "Jukebox",
    description: "Listen to my favorite songs and curated playlists.",
  };

  return (
    <Container {...md}>
      <Heading {...md} />
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
};

export { getStaticProps };
export default Jukebox;
