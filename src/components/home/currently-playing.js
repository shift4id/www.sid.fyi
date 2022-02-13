import Image from "next/image";
import { Headphones } from "react-feather";

import Link from "@/components/link";
import useAPI from "@/lib/hooks/useAPI";

export default function CurrentlyPlaying() {
  const { data: song } = useAPI("/api/spotify/current");

  return (
    <Link
      className="flex p-2 w-full max-w-xs rounded-md border-2 border-gray-300 dark:border-gray-700"
      href={song?.isPlaying ? song.url : "https://open.spotify.com/user/sidfrostbear"}
    >
      <div className="flex justify-center items-center w-12 h-12">
        {song?.isPlaying ? <Image alt="" className="rounded-md" width={64} height={64} src={song.image} /> : <Headphones size="75%" />}
      </div>
      <div className="max-w-[calc(100%-4.5rem)] ml-2 flex flex-col text-left justify-center">
        <p className="font-medium truncate">{song?.isPlaying ? song.title : "Not Playing"}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 truncate">{song?.isPlaying ? song.artist : "Spotify"}</p>
      </div>
    </Link>
  );
}
