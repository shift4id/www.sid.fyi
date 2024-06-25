import Image from "next/image";
import Link from "../link";
import { Profile, Song } from "@/lib/spotify";

const Item: React.FC<Profile | Song> = ({ url, image, name, ...props }) => (
  <Link external className="flex gap-4" href={url}>
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-black text-2xl text-white">
      {image ? <Image fill alt="" sizes="3rem" src={image} /> : <span>🎧</span>}
    </div>
    <div className="flex flex-col justify-center gap-1 overflow-hidden">
      <p className="truncate text-sm">{name}</p>
      <p className="truncate text-xs text-gray">
        {props.type === "profile" && `${props.followers.toLocaleString()} followers`}
        {props.type === "song" && props.artist}
      </p>
    </div>
  </Link>
);

export default Item;
