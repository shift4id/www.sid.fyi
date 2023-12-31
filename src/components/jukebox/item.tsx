import Image from "next/image";
import Link from "../link";
import { Playlist, Song } from "@/lib/spotify";

const Item: React.FC<Playlist | Song> = ({ url, image, title, ...props }) => (
  <Link external className="group flex space-x-4" href={url}>
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-black text-2xl text-white">
      {image ? <Image fill alt="" sizes="3rem" src={image} /> : <span>🎧</span>}
    </div>
    <div className="flex flex-col justify-center space-y-1 overflow-hidden">
      <p className="truncate text-sm">{title}</p>
      <hr className="w-8 border-lightGray transition group-hover:border-pink" />
      <p className="truncate text-xs text-gray">
        {props.type === "song" && props.artist}
        {props.type === "playlist" && `${props.count} songs`}
      </p>
    </div>
  </Link>
);

export type { Playlist, Song };
export default Item;
