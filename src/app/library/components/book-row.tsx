"use client";

import { useState } from "react";
import { Rail } from "@/components/rail";
import type { Book } from "@/lib/notion";
import { cn } from "@/utils/cn";
import styles from "./book-row.module.css";

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

const placeholders = Array.from({ length: 8 }, (_, i) => `placeholder-${String(i)}`);

interface BookRowProps {
  books?: Book[];
}

/**
 * The library as a single row of cloth-bound books, turned so their spines show. Hovering or
 * tapping a book turns it to face you; every book is the same size, so the loading row matches.
 */
export function BookRow({ books }: BookRowProps): React.ReactNode {
  const [facing, setFacing] = useState<string | null>(null);

  return (
    <Rail className={styles.row}>
      {books
        ? books.map((book) => (
            <button
              key={book.id}
              aria-label={`${book.title} by ${book.author}`}
              aria-pressed={facing === book.id}
              className={cn(styles.book, facing === book.id && styles.facing)}
              onClick={() => setFacing((id) => (id === book.id ? null : book.id))}
              style={{ "--cloth": cloths[hash(book.id) % cloths.length] } as React.CSSProperties}
              type="button"
            >
              <span className={styles.object}>
                <span className={styles.cover}>
                  <span className={styles.title}>{book.title}</span>
                  <span className={styles.author}>{book.author}</span>
                  {book.reading ? <span aria-hidden className={styles.ribbon} /> : null}
                </span>
                <span aria-hidden className={styles.spine}>
                  <span>{book.title}</span>
                </span>
                <span aria-hidden className={styles.pages} />
              </span>
            </button>
          ))
        : placeholders.map((id) => (
            <span key={id} className={cn(styles.book, styles.loading)}>
              <span className={styles.object}>
                <span className={styles.cover} />
                <span className={styles.spine} />
              </span>
            </span>
          ))}
    </Rail>
  );
}
