import Image from "next/image";
import { FiHeadphones } from "react-icons/fi";
import Link from "@/components/link";
import { Playlist, Song } from "@/lib/spotify";

const Card: React.FC<Playlist | Song> = ({ url, image, title, ...props }) => (
  <Link
    external
    className="group flex space-x-4 rounded border border-gray-400/20 p-4 transition duration-300 hover:border-primary-200"
    href={url}
  >
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-black text-2xl">
      {image ? <Image fill alt="" sizes="3rem" src={image} /> : <FiHeadphones />}
    </div>
    <div className="flex flex-col justify-center overflow-hidden">
      <p className="truncate text-sm transition duration-300 group-hover:text-primary-200">{title}</p>
      <p className="truncate text-xs text-gray-400">
        {props.type === "song" && props.artist}
        {props.type === "playlist" && `${props.count} songs`}
      </p>
    </div>
  </Link>
);

export default Card;
