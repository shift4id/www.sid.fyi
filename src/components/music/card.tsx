import Image from "next/image";
import Link from "@/components/link";
import { Song } from "@/lib/spotify";

type CardProps = {
  song: Song;
};

const Card: React.FC<CardProps> = function ({ song }) {
  return (
    <Link className="flex w-full rounded-md bg-gray-900 p-2" href={song.url}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Image alt="" className="rounded-md" height={64} src={song.image} width={64} />
      </div>
      <div className="ml-2 flex w-full flex-col justify-center overflow-hidden text-left">
        <p className="truncate text-sm">{song.title}</p>
        <p className="truncate text-xs text-gray-300">{song.artist}</p>
      </div>
    </Link>
  );
};

export default Card;
