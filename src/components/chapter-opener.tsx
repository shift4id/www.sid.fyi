import { type ChapterHref, getChapter } from "@/constants/chapters";

interface ChapterOpenerProps {
  href: ChapterHref;
}

export function ChapterOpener({ href }: ChapterOpenerProps): React.ReactNode {
  const { numeral, title, description } = getChapter(href);

  return (
    <header className="flex flex-col items-start gap-3">
      <span aria-hidden className="text-accent font-display text-8xl leading-none">
        {numeral}
      </span>
      <h1 className="font-display text-5xl italic">{title}</h1>
      <p className="text-muted max-w-md text-xl italic">{description}</p>
    </header>
  );
}
