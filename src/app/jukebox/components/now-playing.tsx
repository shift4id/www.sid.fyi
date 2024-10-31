"use client";

import axios from "axios";
import { Suspense, use, useMemo } from "react";
import type { Song } from "@/lib/spotify";
import { Item } from "./item";

export const defaultSong: Song = { name: "Silence", artist: "N/A", url: "https://spotify.com", type: "song" };

export const fetchNowPlaying = async (): Promise<Song> => {
  const song = await axios.get<Song | null>("/api/now-playing").then((r) => r.data);

  return song ?? defaultSong;
};

function NowPlayingItem({ nowPlayingPromise }: { nowPlayingPromise: Promise<Song> }): React.ReactNode {
  const nowPlaying = use(nowPlayingPromise);

  return <Item {...nowPlaying} />;
}

function NowPlaying(): React.ReactNode {
  const nowPlayingPromise = useMemo(() => fetchNowPlaying(), []);

  return (
    <Suspense fallback={<Item />}>
      <NowPlayingItem nowPlayingPromise={nowPlayingPromise} />
    </Suspense>
  );
}

export { NowPlaying };
