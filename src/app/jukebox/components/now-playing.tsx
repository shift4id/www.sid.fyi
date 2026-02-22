"use client";

import { Suspense, use } from "react";
import type { Song } from "@/lib/spotify";
import { Item } from "./item";

const defaultSong: Song = {
  id: "0",
  name: "Silence",
  artist: "N/A",
  url: "https://spotify.com",
  type: "song",
};

async function fetchNowPlaying(): Promise<Song> {
  const song = await fetch("/api/now-playing")
    .then((r) => r.json() as Promise<Song | null>)
    .catch(() => null);

  return song ?? defaultSong;
}

function NowPlayingItem({
  nowPlayingPromise,
}: {
  nowPlayingPromise: Promise<Song>;
}): React.ReactNode {
  const nowPlaying = use(nowPlayingPromise);

  return <Item {...nowPlaying} />;
}

export function NowPlaying(): React.ReactNode {
  const nowPlayingPromise = fetchNowPlaying();

  return (
    <Suspense fallback={<Item />}>
      <NowPlayingItem nowPlayingPromise={nowPlayingPromise} />
    </Suspense>
  );
}
