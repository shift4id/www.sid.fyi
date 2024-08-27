import Image from "next/image";
import { Skeleton } from "@/components";
import type { Book } from "@/lib/notion";

type ItemProps = Book | Record<string, never>;

function Item(props: ItemProps): React.ReactNode {
  const isLoading = !("title" in props);

  return (
    <div className="flex gap-4">
      <Skeleton className="h-24 w-16" loading={isLoading}>
        <div className="relative h-24 w-16 shrink-0">
          {props.image ? <Image fill alt="" sizes="4rem" src={props.image} /> : null}
        </div>
      </Skeleton>
      <div className="flex flex-col justify-center gap-2 overflow-hidden">
        <p className="truncate text-sm">
          <Skeleton className="w-20" loading={isLoading}>
            {props.title}
          </Skeleton>
        </p>
        <hr className="w-8 border-subtle" />
        <p className="truncate text-xs text-muted">
          <Skeleton className="w-28" loading={isLoading}>
            {props.author}
          </Skeleton>
        </p>
      </div>
    </div>
  );
}

export { Item };
