import Image from "next/image";
import { Skeleton } from "@/components/skeleton";
import type { Book } from "@/lib/notion";

type ItemProps = Book | Record<string, never>;

export function Item({ ...props }: ItemProps): React.ReactNode {
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
        <hr className="border-subtle w-8" />
        <p className="text-muted truncate text-xs">
          <Skeleton className="w-24" loading={isLoading}>
            {props.author}
          </Skeleton>
        </p>
      </div>
    </div>
  );
}
