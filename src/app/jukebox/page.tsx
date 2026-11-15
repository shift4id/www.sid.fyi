import type { Metadata } from "next";
import { Suspense } from "react";
import { ChapterOpener } from "@/components/chapter-opener";
import { Link } from "@/components/link";
import { Page } from "@/components/page";
import { Section } from "@/components/section";
import { getTopArtists, getTopSongs, type Song } from "@/lib/spotify";
import { pageMetadata, pages } from "@/utils/metadata";
import { Sleeve } from "./components/sleeve";
import { Turntable } from "./components/turntable";

const SIDE_LENGTH = 5;

function Sides({ songs }: { songs: (Song | undefined)[] }): React.ReactNode {
  const sides = [songs.slice(0, SIDE_LENGTH), songs.slice(SIDE_LENGTH, SIDE_LENGTH * 2)];

  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {sides.map((side, s) => {
        const letter = s === 0 ? "A" : "B";
        return (
          <section key={letter} className="flex flex-col gap-4">
            <h3 className="border-rule flex items-baseline justify-between border-b pb-1.5">
              <span className="text-xl tracking-wide [font-variant:small-caps]">Side {letter}</span>
              <span className="text-muted font-mono text-xs">
                {s * SIDE_LENGTH + 1} – {(s + 1) * SIDE_LENGTH}
              </span>
            </h3>
            <ol className="flex flex-col gap-4">
              {side.map((song, i) => (
                <li key={song?.id ?? `${letter}${String(i)}`}>
                  <Sleeve position={`${letter}${String(i + 1)}`} song={song} />
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

const placeholderSongs = Array.from<undefined>({ length: SIDE_LENGTH * 2 });

async function TopSongs(): Promise<React.ReactNode> {
  const songs = await getTopSongs().catch(() => placeholderSongs);
  return <Sides songs={songs} />;
}

async function Personnel(): Promise<React.ReactNode> {
  const artists = await getTopArtists().catch(() => []);

  return (
    <ul className="gap-x-10 sm:columns-2">
      {artists.map(({ id, name, url, followers }) => (
        <li key={id} className="break-inside-avoid">
          <Link
            className="group flex items-baseline gap-2 py-1.5 outline-none"
            href={url}
            target="_blank"
          >
            <span className="group-hover:text-accent group-focus-visible:text-accent truncate tracking-wide transition [font-variant:small-caps]">
              {name}
            </span>
            <span
              aria-hidden
              className="border-rule min-w-6 grow -translate-y-1 border-b border-dotted"
            />
            <span className="text-muted shrink-0 font-mono text-xs">
              {compact.format(followers)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const compact = new Intl.NumberFormat("en", { notation: "compact" });

export const metadata: Metadata = pageMetadata({ ...pages.jukebox, path: "/jukebox" });
export const revalidate = 3600; // 1 Hour

export default function Jukebox(): React.ReactNode {
  return (
    <Page>
      <ChapterOpener href="/jukebox" />
      <Turntable />
      <Section title="On Repeat">
        <Suspense fallback={<Sides songs={placeholderSongs} />}>
          <TopSongs />
        </Suspense>
      </Section>
      <Section title="Most Played Artists">
        <Suspense fallback={<p className="text-muted text-sm">Loading…</p>}>
          <Personnel />
        </Suspense>
      </Section>
    </Page>
  );
}
