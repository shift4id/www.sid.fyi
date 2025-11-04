import type { Profile, Song } from "@/lib/spotify";
import Image from "next/image";
import { Link } from "@/components/link";
import { Skeleton } from "@/components/skeleton";
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

type ItemProps = Profile | Song | Record<string, never>;

export function Item({ ...props }: ItemProps): React.ReactNode {
  const isLoading = !("type" in props);

  return (
    <Container
      className="ring-accent/20 hover:text-accent focus-visible:text-accent flex gap-4 transition select-none"
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
                <div className="bg-background absolute inset-4 z-10 rounded-full" />
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
        <p className="text-muted truncate text-xs">
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
