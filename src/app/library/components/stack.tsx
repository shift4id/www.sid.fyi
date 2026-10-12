"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Book } from "@/lib/notion";
import { Item } from "./item";

const placeholders = Array.from({ length: 10 }).map((_, i) => ({
  id: `item-${i + 1}`,
}));

function isBook(item: { id: string }): item is Book {
  return "type" in item;
}

interface StackProps {
  books?: Book[];
}

export function Stack({ books }: StackProps): React.ReactNode {
  const [openId, setOpenId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const tops = useRef<Map<Element, number>>(null);

  // Snapshot item positions so the layout change can be animated with transforms (FLIP)
  // instead of transitioning height, which re-lays out the whole stack every frame.
  const measure = (): Map<Element, number> =>
    new Map(
      [...(rootRef.current?.querySelectorAll("[data-item]") ?? [])].map((el) => [
        el,
        el.getBoundingClientRect().top,
      ]),
    );

  const toggle = (id: string | null): void => {
    tops.current = measure();
    setOpenId((current) => (current === id ? null : id));
  };

  useLayoutEffect(() => {
    const before = tops.current;

    if (!before) return;

    tops.current = null;

    for (const el of before.keys()) {
      for (const animation of el.getAnimations()) animation.cancel();
    }

    for (const [el, top] of measure()) {
      const delta = (before.get(el) ?? top) - top;

      if (!delta) continue;

      el.animate([{ transform: `translateY(${delta}px)` }, { transform: "none" }], {
        duration: 700,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      });
    }
  }, [openId]);

  useEffect(() => {
    const close = ({ key }: KeyboardEvent): void => {
      if (key === "Escape") toggle(null);
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  const items = books ?? placeholders;
  const half = Math.ceil(items.length / 2);

  return (
    <div ref={rootRef} className="grid gap-16 md:grid-cols-2">
      {[items.slice(0, half), items.slice(half)].map((column) => (
        <div key={column[0]?.id} className="@container flex max-w-96 flex-col gap-16">
          {column.map((item) => (
            <Item
              key={item.id}
              book={isBook(item) ? item : undefined}
              onToggle={() => toggle(item.id)}
              open={openId === item.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
