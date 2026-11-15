"use client";

import { useEffect, useState } from "react";
import type { Song } from "./spotify";

const POLL_INTERVAL = 30_000;

async function fetchNowPlaying(): Promise<Song | null> {
  return fetch("/api/now-playing", { cache: "no-store" })
    .then((r) => (r.ok ? (r.json() as Promise<Song | null>) : null))
    .catch(() => null);
}

/**
 * Polls the now-playing endpoint while the tab is visible.
 * `undefined` = still loading, `null` = nothing playing.
 */
export function useNowPlaying(): Song | null | undefined {
  const [song, setSong] = useState<Song | null>();

  useEffect(() => {
    let active = true;

    const load = (): void => {
      void fetchNowPlaying().then((next) => {
        if (active) setSong(next);
      });
    };
    // poll only while visible, but always load once so background tabs aren't stuck loading
    const update = (): void => {
      if (document.visibilityState !== "hidden") load();
    };

    load();
    const interval = setInterval(update, POLL_INTERVAL);
    document.addEventListener("visibilitychange", update);

    return () => {
      active = false;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return song;
}
