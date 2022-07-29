import { faPauseCircle } from "@fortawesome/free-regular-svg-icons/faPauseCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import useSWR from "swr";
import Link from "@/components/link";
import { Song } from "@/lib/spotify";

const CurrentlyPlaying = function () {
  const { data: song } = useSWR<Song>("/api/spotify/current", (url: string) => fetch(url).then((r) => r.json()));

  return (
    <Link
      className="flex w-full max-w-xs rounded-md bg-gray-900 p-2"
      href={song?.isPlaying ? song.url : "https://open.spotify.com/user/sidfrostbear"}
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
        {song?.isPlaying ? (
          <Image alt="" className="rounded-md" layout="fill" src={song.image} />
        ) : (
          <FontAwesomeIcon icon={faPauseCircle} size="2x" />
        )}
      </div>
      <div className="ml-2 flex w-full flex-col justify-center overflow-hidden text-left">
        <p className="truncate text-sm">{song?.isPlaying ? song.title : "Not Playing"}</p>
        <p className="truncate text-xs text-gray-300">{song?.isPlaying ? song.artist : "Spotify"}</p>
      </div>
    </Link>
  );
};

export default CurrentlyPlaying;
