import { Link } from "@/components/link";
import type { Song } from "@/lib/spotify";
import { cn } from "@/utils/cn";

interface SleeveProps {
  song?: Song;
  /** Position on the record, e.g. "A1". */
  position: string;
}

const groove =
  "bg-[repeating-radial-gradient(circle,var(--bg)_0_1.5px,color-mix(in_srgb,var(--fg)_30%,var(--bg))_1.5px_2.2px)]";

/** An album sleeve whose record slides out on hover. */
export function Sleeve({ song, position }: SleeveProps): React.ReactNode {
  const art = song?.image ? { backgroundImage: `url(${song.image})` } : undefined;

  const body = (
    <>
      <span className="relative size-16 shrink-0">
        <span
          aria-hidden
          className={cn(
            "border-foreground absolute inset-[4%] rounded-full border transition-transform duration-500 ease-[cubic-bezier(.3,.1,.2,1)] group-hover:translate-x-[42%] group-hover:rotate-[70deg] group-focus-visible:translate-x-[42%] group-focus-visible:rotate-[70deg]",
            groove,
          )}
        >
          <span
            className="border-foreground bg-accent absolute inset-[36%] rounded-full border bg-cover bg-center"
            style={art}
          />
        </span>
        <span
          className={cn(
            "border-foreground bg-surface absolute inset-0 border bg-cover bg-center",
            !song && "animate-pulse",
          )}
          style={art}
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-muted font-mono text-xs">{position}</span>
        <span className="group-hover:text-accent group-focus-visible:text-accent font-display truncate text-xl leading-tight transition">
          {song ? song.name : " "}
        </span>
        <span className="text-muted truncate text-base italic">{song?.artist ?? " "}</span>
      </span>
    </>
  );

  const className = "group flex items-center gap-4 outline-none";

  return song ? (
    <Link className={className} href={song.url} target="_blank">
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  );
}
