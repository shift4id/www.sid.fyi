"use client";

import { useEffect, useState } from "react";
import type { Song } from "@/lib/spotify";
import { Turntable } from "./turntable";

const POLL_INTERVAL = 30_000;

const idleSong: Song = {
  id: "0",
  name: "Silence",
  artist: "N/A",
  url: "https://spotify.com",
  type: "song",
};

async function fetchNowPlaying(): Promise<Song> {
  const song = await fetch("/api/now-playing", { cache: "no-store" })
    .then((r) => (r.ok ? (r.json() as Promise<Song | null>) : null))
    .catch(() => null);

  return song ?? idleSong;
}

export function NowPlaying(): React.ReactNode {
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    let active = true;

    const update = (): void => {
      if (document.visibilityState === "hidden") return;
      void fetchNowPlaying().then((next) => {
        if (active) setSong(next);
      });
    };

    update();
    const interval = setInterval(update, POLL_INTERVAL);
    document.addEventListener("visibilitychange", update);

    return () => {
      active = false;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return song ? <Turntable {...song} /> : <Turntable />;
}
