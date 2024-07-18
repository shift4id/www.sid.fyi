import Image from "next/image";
import { Skeleton } from "@/components";
import type { Book } from "@/lib/notion";

function Item(props: Book | Record<string, never>): React.ReactNode {
  const { author, image, title } = props;

  const isLoading = !Object.keys(props).length;

  return (
    <div className="flex gap-4">
      <Skeleton className="h-24 w-16" loading={isLoading}>
        <div className="relative h-24 w-16 shrink-0">
          {image ? <Image fill alt="" sizes="4rem" src={image} /> : null}
        </div>
      </Skeleton>
      <div className="flex flex-col justify-center gap-2 overflow-hidden">
        <p className="truncate text-sm">
          <Skeleton className="w-20" loading={isLoading}>
            {title}
          </Skeleton>
        </p>
        <hr className="w-8 border-subtle" />
        <p className="truncate text-xs text-muted">
          <Skeleton className="w-28" loading={isLoading}>
            {author}
          </Skeleton>
        </p>
      </div>
    </div>
  );
}

export { Item };
