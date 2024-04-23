import { InferGetStaticPropsType, NextPage } from "next";
import useSWR from "swr";
import Container, { Metadata } from "@/components/container";
import Grid from "@/components/grid";
import Item from "@/components/jukebox/item";
import Section from "@/components/section";
import { Song, defaultSong, getProfile, getTopArtists, getTopSongs } from "@/lib/spotify";

const useNowPlaying = (): Song => {
  const { data: song } = useSWR<Song>("/api/spotify/now-playing", (url: string) =>
    fetch(url).then((r) => r.json()),
  );

  return song ?? defaultSong;
};

const getStaticProps = async () => ({
  props: { profile: await getProfile(), songs: await getTopSongs(), artists: await getTopArtists() },
  revalidate: 60 * 60,
});

const md: Metadata = {
  title: "Jukebox",
  description: "Listen to my favorite songs, artists, and check out my profile.",
};

const Jukebox: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ artists, profile, songs }) => {
  const nowPlaying = useNowPlaying();

  return (
    <Container {...md}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Section title="Profile">
          <Item {...profile} />
        </Section>
        <Section title="Now Playing">
          <Item {...nowPlaying} />
        </Section>
      </div>
      <Section title="My Top Artists">
        <Grid Of={Item} items={artists} />
      </Section>
      <Section title="My Top Tracks">
        <Grid Of={Item} items={songs} />
      </Section>
    </Container>
  );
};

export { getStaticProps };
export default Jukebox;
