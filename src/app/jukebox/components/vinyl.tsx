import Image from "next/image";
import { Link } from "@/components/link";
import { Skeleton } from "@/components/skeleton";
import type { Song } from "@/lib/spotify";
import { cn } from "@/utils/cn";

type ContainerProps = React.PropsWithChildren<{
  href: string;
  className?: string;
}>;

function Container({ children, href, ...props }: ContainerProps): React.ReactNode {
  return href ? (
    <Link href={href} target="_blank" {...props}>
      {children}
    </Link>
  ) : (
    <div {...props}>{children}</div>
  );
}

type VinylProps = Song | Record<string, never>;

export function Vinyl(props: VinylProps): React.ReactNode {
  const isLoading = !("type" in props);

  return (
    <Container
      className="group hover:text-accent focus-visible:text-accent relative block select-none"
      href={props.url}
    >
      <div className="relative aspect-square w-full">
        <div
          aria-hidden
          className={cn(
            "ring-light/25 pointer-events-none absolute inset-2 overflow-hidden rounded-full ring-1 transition duration-300 group-hover:-translate-y-1/3 group-focus-visible:-translate-y-1/3",
            isLoading && "opacity-0",
          )}
        >
          <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(circle,var(--color-background)_0_1px,var(--color-subtle)_1px_3px)]" />
          <div className="bg-background absolute inset-[40%] rounded-full" />
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-sm">
          <Skeleton className="h-full w-full" loading={isLoading}>
            {props.image ? (
              <Image fill alt="" sizes="(max-width: 640px) 45vw, 8rem" src={props.image} />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl">🎧</div>
            )}
          </Skeleton>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 overflow-hidden pt-2">
        <p className="truncate text-sm">
          <Skeleton className="w-20" loading={isLoading}>
            {props.name}
          </Skeleton>
        </p>
        <p className="text-muted truncate text-xs">
          <Skeleton className="w-16" loading={isLoading}>
            {"type" in props ? props.artist : null}
          </Skeleton>
        </p>
      </div>
    </Container>
  );
}
