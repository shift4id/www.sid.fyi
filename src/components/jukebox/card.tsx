import Image from "next/image";
import Link from "@/components/link";
import { Playlist, Song } from "@/lib/spotify";

type CardProps = {
  item: Playlist | Song;
};

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <Link external className="group flex space-x-4 bg-gray-800 p-4" href={item.url}>
      <div className="relative h-12 w-12 shrink-0 bg-black">
        {item?.image && <Image fill alt="" sizes="3rem" src={item.image} />}
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        <p className="truncate text-sm transition duration-300 group-hover:text-pink-200">{item.title}</p>
        <p className="truncate text-xs text-gray-300">
          {item.type === "song" && item.artist}
          {item.type === "playlist" && `${item.count} songs`}
        </p>
      </div>
    </Link>
  );
};

export default Card;
