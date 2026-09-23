import Image from "next/image";
import { Skeleton } from "@/components/skeleton";
import type { Book } from "@/lib/notion";
import { cn } from "@/utils/cn";

interface ItemProps {
  book?: Book;
  open?: boolean;
  onToggle?: () => void;
}

export function Item({ book, open = false, onToggle }: ItemProps): React.ReactNode {
  const isLoading = !book;

  return (
    <button
      aria-label={book ? `${book.title} by ${book.author}` : undefined}
      aria-pressed={open}
      className={cn(
        "group relative w-full cursor-pointer outline-none select-none",
        open && "z-10",
      )}
      disabled={isLoading}
      onClick={onToggle}
      type="button"
    >
      <div
        className={cn(
          "relative transition-[height] duration-700 perspective-distant",
          open ? "h-[100cqw]" : "h-12",
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-1/2 transition-transform duration-700 transform-3d",
            open
              ? "-translate-x-1/3 rotate-x-10 -rotate-y-70 rotate-z-90"
              : "-rotate-x-10 -rotate-y-10",
          )}
        >
          <Skeleton className="absolute inset-x-0 -top-6 h-12" loading={isLoading}>
            <div className="from-subtle to-highlight border-light/5 absolute inset-x-0 -top-6 flex h-12 items-center justify-center gap-6 rounded-sm border-t bg-linear-to-b px-3">
              <p className="group-hover:text-accent group-focus-visible:text-accent min-w-0 truncate text-sm transition">
                {book?.title}
              </p>
              <p className="text-muted shrink-0 truncate text-xs">{book?.author}</p>
            </div>
            <div className="bg-highlight shadow-background/80 absolute inset-x-0 bottom-6 aspect-3/2 origin-bottom rotate-x-90 overflow-hidden rounded-sm shadow-xl">
              {book?.image ? (
                <div className="absolute top-1/2 left-1/2 h-3/2 w-2/3 -translate-x-1/2 -translate-y-1/2 -rotate-90">
                  <Image fill alt="" className="object-cover" sizes="24rem" src={book.image} />
                </div>
              ) : null}
              <div className="from-background/40 absolute inset-x-0 bottom-0 h-6 bg-linear-to-t to-transparent" />
            </div>
            <div className="bg-light absolute -top-6 left-full h-12 w-2/3 origin-left rotate-y-90 backface-hidden" />
          </Skeleton>
        </div>
      </div>
      <div
        aria-hidden
        className={cn(
          "grid transition-[grid-template-rows] duration-500",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="flex flex-col gap-1 overflow-hidden pt-4 text-center">
          <p className="text-sm">{book?.title}</p>
          <p className="text-muted text-xs">{book?.author}</p>
        </div>
      </div>
    </button>
  );
}
