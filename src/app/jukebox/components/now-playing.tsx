"use client";

import useSWR from "swr";
import type { Song } from "@/lib/spotify";
import { Item } from "./item";

const defaultSong: Song = { name: "Not Playing", artist: "N/A", url: "https://spotify.com", type: "song" };

const useNowPlaying = (): Song | Record<string, never> => {
  const { data: song, isLoading } = useSWR<Song | null>("/api/spotify/now-playing", (url: string) =>
    fetch(url).then((r) => r.json()),
  );

  return isLoading ? {} : (song ?? defaultSong);
};

function NowPlaying(): React.ReactNode {
  const nowPlaying = useNowPlaying();

  return <Item {...nowPlaying} />;
}

export { NowPlaying };