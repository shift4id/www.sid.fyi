import useSWR from "swr";
import { Playlist, Song } from "@/lib/spotify";
import Card from "./card";

type GridProps = {
  title: string;
  url: string;
};

const Grid: React.FC<GridProps> = function Grid({ title, url }) {
  const { data: items } = useSWR<Playlist[] | Song[]>(url, (url: string) => fetch(url).then((r) => r.json()), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 1000 * 60 * 60,
  });

  return (
    <div className="space-y-2">
      <p className="text-xl text-gray-100">
        <em>{title}</em>
      </p>
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
        {items?.map((item: Playlist | Song) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
