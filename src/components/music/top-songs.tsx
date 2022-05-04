import useSWR from "swr";
import { Song } from "@/lib/spotify";
import Card from "./card";

const TopSongs = function () {
  const { data: songs } = useSWR<Song[]>("/api/spotify/top", (url: string) => fetch(url).then((r) => r.json()));

  return (
    <div className="grid w-full gap-4 md:grid-cols-2">
      {songs?.map((song) => (
        <Card key={song.title} song={song} />
      ))}
    </div>
  );
};

export default TopSongs;
