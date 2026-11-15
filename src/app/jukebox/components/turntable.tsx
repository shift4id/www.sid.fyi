"use client";

import { Link } from "@/components/link";
import { useNowPlaying } from "@/lib/now-playing";
import { cn } from "@/utils/cn";

const grooves =
  "bg-[repeating-radial-gradient(circle,transparent_0_2px,color-mix(in_srgb,var(--fg)_22%,transparent)_2px_2.6px)]";

/**
 * The jukebox's centerpiece, drawn in ink. The platter spins and the tonearm swings in
 * while something is playing; when nothing is, the arm rests and the platter stops.
 */
export function Turntable(): React.ReactNode {
  const song = useNowPlaying();
  const playing = Boolean(song);
  const loading = song === undefined;

  const deck = (
    <div className="border-foreground bg-surface relative flex aspect-[1.23] items-center border px-[7%] shadow-[8px_8px_0_-1px_var(--bg),8px_8px_0_0_var(--rule)]">
      {/* platter */}
      <div
        className={cn(
          "border-foreground relative aspect-square w-[78%] rounded-full border",
          grooves,
        )}
      >
        <div
          className={cn(
            "border-foreground absolute inset-[6%] rounded-full border border-transparent border-t-current border-l-current opacity-35",
            playing && "animate-[spin_3.6s_linear_infinite] motion-reduce:animate-none",
          )}
        />
        {/* center label: album art */}
        <div
          className={cn(
            "border-foreground bg-accent absolute inset-[33%] overflow-hidden rounded-full border bg-cover bg-center transition-opacity",
            loading && "opacity-30",
            playing && "animate-[spin_3.6s_linear_infinite] motion-reduce:animate-none",
          )}
          style={song?.image ? { backgroundImage: `url(${song.image})` } : undefined}
        >
          <div className="border-foreground bg-background absolute inset-[44%] rounded-full border" />
        </div>
      </div>

      {/* tonearm */}
      <div
        aria-hidden
        className={cn(
          "absolute top-[6%] right-[6%] h-[82%] w-[26%] origin-[70%_9%] transition-transform duration-1000 ease-[cubic-bezier(.3,.1,.2,1)]",
          playing ? "rotate-[19deg]" : "-rotate-[8deg]",
        )}
      >
        <svg
          className="size-full overflow-visible"
          fill="none"
          preserveAspectRatio="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          viewBox="0 0 100 300"
        >
          <circle className="fill-background" cx="70" cy="27" r="16" />
          <circle className="fill-background" cx="70" cy="27" r="6" />
          <path d="M70 27 L70 200 Q70 236 46 252" />
          <rect
            className="fill-background"
            height="34"
            rx="3"
            transform="rotate(28 42 265)"
            width="24"
            x="30"
            y="248"
          />
          <path d="M84 14 L94 4" />
        </svg>
      </div>

      {/* power knob: turned on while something plays */}
      <span className="border-foreground bg-background absolute bottom-[7%] left-[7%] size-6 rounded-full border">
        <span
          className={cn(
            "bg-foreground absolute top-1 left-1/2 h-2 w-px origin-[50%_8px] transition-transform duration-500",
            playing && "rotate-90",
          )}
        />
      </span>
      <span className="border-foreground bg-background absolute -bottom-[3.2%] left-[8%] h-[3%] w-[8%] border border-t-0" />
      <span className="border-foreground bg-background absolute right-[8%] -bottom-[3.2%] h-[3%] w-[8%] border border-t-0" />
    </div>
  );

  return (
    <figure className="mx-auto flex w-full max-w-md flex-col gap-5">
      {/* the deck stays mounted so the tonearm can swing in when a song arrives;
          the link is laid over it rather than wrapped around it */}
      <div className="relative">
        {deck}
        {song ? (
          <Link
            aria-label={`${song.name} by ${song.artist} on Spotify`}
            className="focus-visible:outline-accent absolute inset-0 outline-offset-4 focus-visible:outline-1 focus-visible:outline-dashed"
            href={song.url}
            target="_blank"
          />
        ) : null}
      </div>
      <figcaption
        aria-live="polite"
        className="flex min-h-24 flex-col items-center gap-1 text-center"
      >
        {song ? (
          <>
            <span className="font-display text-2xl leading-tight text-balance">{song.name}</span>
            <span className="text-muted text-base italic">{song.artist}</span>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}
