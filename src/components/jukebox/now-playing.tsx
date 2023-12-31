import { useMemo } from "react";
import useSWR from "swr";
import Grid from "../grid";
import Item, { Song } from "@/components/jukebox/item";

const defaultSong: Song = {
  title: "My Profile",
  artist: "Spotify",
  url: "https://open.spotify.com/user/sidfrostbear",
  type: "song",
};

const NowPlaying: React.FC = () => {
  const { data: song } = useSWR<Song>("/api/spotify/now-playing", (url: string) =>
    fetch(url).then((r) => r.json()),
  );
  const item: Song = useMemo(() => (song?.isPlaying ? song : defaultSong), [song]);

  return <Grid Of={Item} items={[item]} />;
};

export default NowPlaying;
