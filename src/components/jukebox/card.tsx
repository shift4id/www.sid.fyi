import Image from "next/image";
import { FiHeadphones } from "react-icons/fi";
import Link from "@/components/link";
import { Playlist, Song } from "@/lib/spotify";

type CardProps = { item: Playlist | Song };

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <Link
      external
      className="group flex space-x-4 rounded border border-gray-700 p-4 transition duration-300 hover:border-primary-200"
      href={item.url}
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-black text-2xl">
        {item.image ? <Image fill alt="" sizes="3rem" src={item.image} /> : <FiHeadphones />}
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        <p className="truncate text-sm transition duration-300 group-hover:text-primary-200">{item.title}</p>
        <p className="truncate text-xs text-gray-400">
          {item.type === "song" && item.artist}
          {item.type === "playlist" && `${item.count} songs`}
        </p>
      </div>
    </Link>
  );
};

export default Card;
