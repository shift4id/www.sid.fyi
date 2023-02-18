import { InferGetStaticPropsType, NextPage } from "next";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Grid from "@/components/jukebox/grid";
import NowPlaying from "@/components/jukebox/now-playing";
import Section from "@/components/jukebox/section";
import { getPlaylists, getTopSongs } from "@/lib/spotify";

const getStaticProps = async function () {
  const playlists = await getPlaylists();
  const topSongs = await getTopSongs();
  return {
    props: { playlists, topSongs },
    revalidate: 60 * 60,
  };
};

const Jukebox: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = function ({ playlists, topSongs }) {
  const md = {
    title: "Jukebox",
    description: "Listen to my favorite songs and curated playlists.",
  };

  return (
    <Container {...md}>
      <Heading {...md} />
      <Section title="Now Playing">
        <div className="md:w-1/2 md:pr-1">
          <NowPlaying />
        </div>
      </Section>
      <Section title="My Playlists">
        <Grid items={playlists} />
      </Section>
      <Section title="My Top Tracks">
        <Grid items={topSongs} />
      </Section>
    </Container>
  );
};

export { getStaticProps };
export default Jukebox;
