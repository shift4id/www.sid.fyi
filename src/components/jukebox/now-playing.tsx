import useSWR from "swr";
import Grid from "../grid";
import Card from "@/components/jukebox/card";
import { Song } from "@/lib/spotify";

const defaultSong: Song = {
  title: "My Profile",
  artist: "Spotify",
  url: "https://open.spotify.com/user/sidfrostbear",
  type: "song",
};

const NowPlaying: React.FC = () => {
  const { data: song } = useSWR<Song>("/api/spotify/now-playing", (url: string) => fetch(url).then((r) => r.json()));

  const item: Song = song?.isPlaying ? song : defaultSong;

  return <Grid Of={Card} items={[item]} />;
};

export default NowPlaying;
