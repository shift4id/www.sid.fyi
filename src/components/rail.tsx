"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import styles from "./rail.module.css";

type RailProps = React.PropsWithChildren<{
  /** Names the row for screen readers, e.g. "Books". */
  label: string;
  className?: string;
}>;

/**
 * A full-bleed horizontal row with arrows underneath that page through it; the arrows dim at
 * either end and disappear when everything fits.
 */
export function Rail({ label, className, children }: RailProps): React.ReactNode {
  const ref = useRef<HTMLElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (): void => {
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const page = (direction: 1 | -1): void => {
    const el = ref.current;
    if (!el) return;
    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: smooth ? "smooth" : "auto" });
  };

  return (
    <div className="flex flex-col gap-3">
      <section
        ref={ref}
        aria-label={label}
        className={cn(styles.rail, className)}
        // focusable so the row can be scrolled with the keyboard
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {children}
      </section>

      {atStart && atEnd ? null : (
        <div className="flex justify-end gap-1">
          <button
            aria-label={`Scroll ${label.toLowerCase()} back`}
            className={styles.arrow}
            disabled={atStart}
            onClick={() => page(-1)}
            type="button"
          >
            &larr;
          </button>
          <button
            aria-label={`Scroll ${label.toLowerCase()} forward`}
            className={styles.arrow}
            disabled={atEnd}
            onClick={() => page(1)}
            type="button"
          >
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
