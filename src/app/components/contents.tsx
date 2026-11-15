import { Link } from "@/components/link";
import { type ChapterHref, chapters } from "@/constants/chapters";

/** What each chapter is, in plain words. */
export type Glosses = Record<ChapterHref, string>;

interface ContentsProps {
  glosses: Glosses;
}

export function Contents({ glosses }: ContentsProps): React.ReactNode {
  return (
    <ol className="flex flex-col">
      {chapters.map(({ href, numeral, title }) => (
        <li key={href}>
          <Link
            aria-current={href === "/" ? "page" : undefined}
            className="group grid grid-cols-[2.75rem_auto_1fr] items-baseline gap-x-3 py-3"
            href={href}
          >
            <span className="text-muted group-hover:text-accent group-focus-visible:text-accent text-base transition">
              {numeral}.
            </span>
            <span className="group-hover:text-accent group-focus-visible:text-accent font-display text-3xl transition group-hover:italic group-focus-visible:italic">
              {title}
            </span>
            <span
              aria-hidden
              className="border-rule group-hover:border-accent group-focus-visible:border-accent -translate-y-1.5 border-b border-dotted transition"
            />
            <span className="text-muted col-start-2 -col-end-1 text-base italic">
              {glosses[href]}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
