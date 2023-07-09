import { Playlist, Song } from "@/lib/spotify";
import Card from "./card";

type GridProps = {
  items: (Song | Playlist)[];
};

const Grid: React.FC<GridProps> = function ({ items }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {items?.map((item: Playlist | Song) => <Card key={item.title} item={item} />)}
    </div>
  );
};

export default Grid;
