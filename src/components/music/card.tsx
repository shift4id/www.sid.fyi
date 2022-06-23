import Image from "next/image";
import Link from "@/components/link";
import { Playlist, Song } from "@/lib/spotify";

type CardProps = {
  item: Playlist | Song;
};

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <Link className="flex w-full rounded-md bg-gray-900 p-2" href={item.url}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Image alt="" className="rounded-md" height={96} src={item.image} width={96} />
      </div>
      <div className="ml-2 flex w-full flex-col justify-center overflow-hidden text-left">
        <p className="truncate text-sm">{item.title}</p>
        {item.type === "song" && <p className="truncate text-xs text-gray-300">{item.artist}</p>}
        {item.type === "playlist" && <p className="truncate text-xs text-gray-300">{item.count} songs</p>}
      </div>
    </Link>
  );
};

export default Card;
