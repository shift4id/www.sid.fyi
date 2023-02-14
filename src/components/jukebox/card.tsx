import Image from "next/image";
import Link from "@/components/link";
import { Playlist, Song } from "@/lib/spotify";

type CardProps = {
  item: Playlist | Song;
};

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <Link external className="flex w-full transition-all duration-300 hover:text-pink-200" href={item.url}>
      <div className="relative flex h-12 w-12 shrink-0 bg-black">
        {item?.image && <Image fill alt="" sizes="3rem" src={item.image} />}
      </div>
      <div className="ml-2 flex w-full flex-col justify-center overflow-hidden py-1 px-2">
        <p className="truncate text-sm">{item.title}</p>
        <p className="truncate text-xs text-gray-300">
          {item.type === "song" && item.artist}
          {item.type === "playlist" && `${item.count} songs`}
        </p>
      </div>
    </Link>
  );
};

export default Card;
