"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const close = ({ key }: KeyboardEvent): void => {
      if (key === "Escape") setOpenId(null);
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  const items = books ?? placeholders;
  const half = Math.ceil(items.length / 2);

  return (
    <div className="grid gap-16 md:grid-cols-2">
      {[items.slice(0, half), items.slice(half)].map((column) => (
        <div key={column[0]?.id} className="@container flex max-w-96 flex-col gap-16">
          {column.map((item) => (
            <Item
              key={item.id}
              book={isBook(item) ? item : undefined}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              open={openId === item.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
