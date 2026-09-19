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

type TurntableProps = Song | Record<string, never>;

export function Turntable(props: TurntableProps): React.ReactNode {
  const isLoading = !("type" in props);
  const isPlaying = Boolean(props.image);

  return (
    <Container
      className="hover:text-accent focus-visible:text-accent flex items-center gap-6 transition select-none"
      href={props.url}
    >
      <div className="bg-accent/20 relative size-48 shrink-0 rounded-md">
        <div className="bg-background absolute inset-4 rounded-full">
          <div
            className={cn(
              "ring-light/25 absolute inset-1 overflow-hidden rounded-full ring-1",
              isPlaying && "animate-[spin_4s_linear_infinite] motion-reduce:animate-none",
            )}
          >
            <Skeleton className="h-full w-full rounded-full" loading={isLoading}>
              {props.image ? (
                <Image fill alt="" className="rounded-full" sizes="8rem" src={props.image} />
              ) : (
                <div className="bg-foreground/5 absolute inset-0 rounded-full" />
              )}
            </Skeleton>
          </div>
        </div>
        <div
          className={cn(
            "absolute top-3 right-3 flex origin-top flex-col items-center transition-transform",
            isPlaying ? "rotate-20" : "-rotate-6",
          )}
        >
          <div className="bg-light size-3 rounded-xs" />
          <div className="bg-light -my-1 h-18 w-1 rounded-full" />
          <div className="bg-light h-3 w-2 rounded-full" />
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <Skeleton className="w-24" loading={isLoading}>
          <p className="truncate text-sm">{props.name}</p>
        </Skeleton>
        <Skeleton className="w-20" loading={isLoading}>
          <p className="text-muted truncate text-xs">{"type" in props ? props.artist : null}</p>
        </Skeleton>
      </div>
    </Container>
  );
}
