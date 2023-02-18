import useSWR from "swr";
import Card from "@/components/jukebox/card";
import { Song } from "@/lib/spotify";

const NowPlaying: React.FC = function () {
  const { data: song } = useSWR<Song>("/api/spotify/now-playing", (url: string) => fetch(url).then((r) => r.json()));

  const item: Song = song?.isPlaying
    ? song
    : {
        title: "Nothing",
        artist: "Spotify",
        url: "https://open.spotify.com/user/sidfrostbear",
        type: "song",
      };

  return <Card item={item} />;
};

export default NowPlaying;
