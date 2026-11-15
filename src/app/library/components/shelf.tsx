"use client";

import { useEffect, useState } from "react";
import type { Book } from "@/lib/notion";
import { cn } from "@/utils/cn";
import styles from "./shelf.module.css";

/** Book-cloth colors; each book gets one deterministically from its id. */
const cloths = [
  "#305040",
  "#903020",
  "#404060",
  "#203050",
  "#705080",
  "#603050",
  "#a04030",
  "#506040",
  "#303030",
  "#405060",
];

function hash(id: string): number {
  let h = 0;
  for (const char of id) h = (h * 31 + char.charCodeAt(0)) >>> 0;
  return h;
}

/*
 * Spine sizes follow a fixed pattern by shelf position (not by book), so the loading skeleton
 * has exactly the same silhouette as the loaded shelf. The two cycles have different lengths
 * (7 and 8), so the pattern only repeats every 56 books. All values sit on the 4px grid.
 */
const widths = [32, 40, 28, 36, 44, 32, 36];
const heights = [216, 200, 232, 208, 192, 224, 200, 216];

function size(index: number): { width: number; height: number } {
  return { width: widths[index % widths.length], height: heights[index % heights.length] };
}

const placeholders = Array.from({ length: 16 }, (_, i) => `placeholder-${String(i)}`);

interface ShelfProps {
  books?: Book[];
}

/**
 * The library: books standing on shelves, spines out. Click a book to select it (it stays
 * lifted with its title below); click it again, point at another book, or press Esc to clear it.
 */
export function Shelf({ books }: ShelfProps): React.ReactNode {
  const [selected, setSelected] = useState<Book | null>(null);
  const [preview, setPreview] = useState<Book | null>(null);
  const current = preview ?? selected;

  /** Pointing at a different book drops the current selection and previews the new one. */
  const point = (book: Book): void => {
    setPreview(book);
    setSelected((s) => (s && s.id !== book.id ? null : s));
  };

  /** Clicking selects a book; clicking it again puts it back right away. */
  const toggle = (book: Book): void => {
    if (selected?.id === book.id) {
      setSelected(null);
      setPreview(null);
    } else {
      setSelected(book);
    }
  };

  useEffect(() => {
    const onKey = ({ key }: KeyboardEvent): void => {
      if (key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <ul className={styles.shelves}>
        {books
          ? books.map((book, index) => {
              const { width, height } = size(index);
              const cloth = cloths[hash(book.id) % cloths.length];
              return (
                <li key={book.id} className={styles.slot}>
                  <button
                    aria-label={`${book.title} by ${book.author}`}
                    aria-pressed={selected?.id === book.id}
                    className={cn(styles.book, current?.id === book.id && styles.lifted)}
                    onBlur={() => setPreview(null)}
                    onClick={() => toggle(book)}
                    onFocus={() => point(book)}
                    onMouseEnter={() => point(book)}
                    onMouseLeave={() => setPreview(null)}
                    style={{ width, height, "--cloth": cloth } as React.CSSProperties}
                    type="button"
                  >
                    <span className={styles.title}>{book.title}</span>
                    <span className={styles.author}>{book.author.split(" ").at(-1)}</span>
                    {book.reading ? <span aria-hidden className={styles.ribbon} /> : null}
                  </button>
                </li>
              );
            })
          : placeholders.map((id, index) => {
              const { width, height } = size(index);
              return (
                <li key={id} className={styles.slot}>
                  <span className={cn(styles.book, styles.loading)} style={{ width, height }} />
                </li>
              );
            })}
      </ul>

      {/* sticks to the bottom of the screen while the shelves scroll, so a selection is always visible */}
      <p
        aria-live="polite"
        className={cn(
          "pointer-events-none sticky bottom-0 flex min-h-24 flex-col items-center justify-center gap-1 border-t border-transparent px-4 py-4 text-center transition-colors",
          current && "bg-background border-rule",
        )}
      >
        {current ? (
          <>
            <span className="font-display text-2xl leading-tight text-balance">
              {current.title}
            </span>
            <span className="text-muted italic">{current.author}</span>
          </>
        ) : null}
      </p>
    </div>
  );
}
