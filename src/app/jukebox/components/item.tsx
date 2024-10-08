import Image from "next/image";
import { Link, Skeleton } from "@/components";
import type { Profile, Song } from "@/lib/spotify";
import { cn } from "@/utils";

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

type ItemProps = Profile | Song | Record<string, never>;

function Item(props: ItemProps): React.ReactNode {
  const isLoading = !("type" in props);

  return (
    <Container
      className="flex select-none gap-4 ring-accent/20 transition hover:text-accent focus-visible:text-accent"
      href={props.url}
    >
      <Skeleton className="size-12 rounded-full" loading={isLoading}>
        <div className="relative flex size-12 shrink-0 items-center justify-center text-2xl">
          {props.image ? (
            <>
              <Image
                fill
                alt=""
                className={cn("rounded-full", props.type === "song" && "animate-[spin_5s_linear_infinite]")}
                sizes="3rem"
                src={props.image}
              />
              {props.type === "song" ? (
                <div className="absolute inset-4 z-10 rounded-full bg-background" />
              ) : null}
            </>
          ) : (
            <span>🎧</span>
          )}
        </div>
      </Skeleton>
      <div className="flex flex-col justify-center gap-1 overflow-hidden">
        <p className="truncate text-sm">
          <Skeleton className="w-24" loading={isLoading}>
            {props.name}
          </Skeleton>
        </p>
        <p className="truncate text-xs text-muted">
          <Skeleton className="w-20" loading={isLoading}>
            {"type" in props && (
              <>
                {props.type === "profile" && `${props.followers.toLocaleString()} followers`}
                {props.type === "song" && props.artist}
              </>
            )}
          </Skeleton>
        </p>
      </div>
    </Container>
  );
}

export { Item };
