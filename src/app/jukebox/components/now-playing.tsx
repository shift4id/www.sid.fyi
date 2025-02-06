"use client";

import { Suspense, use, useMemo } from "react";
import type { Song } from "@/lib/spotify";
import { Item } from "./item";

const defaultSong: Song = { name: "Silence", artist: "N/A", url: "https://spotify.com", type: "song" };

const fetchNowPlaying = async (): Promise<Song> => {
  const song = await fetch("/api/now-playing")
    .then((r) => r.json() as Promise<Song | null>)
    .catch(() => null);

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
