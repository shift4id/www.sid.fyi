import Image from "next/image";
import { Link } from "@/components/link";
import { Skeleton } from "@/components/skeleton";
import type { Profile } from "@/lib/spotify";

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

type ItemProps = Profile | Record<string, never>;

export function Item(props: ItemProps): React.ReactNode {
  const isLoading = !("type" in props);

  return (
    <Container
      className="hover:text-accent focus-visible:text-accent flex gap-4 transition select-none"
      href={props.url}
    >
      <Skeleton className="size-12 rounded-full" loading={isLoading}>
        <div className="relative flex size-12 shrink-0 items-center justify-center text-2xl">
          {props.image ? (
            <Image fill alt="" className="rounded-full" sizes="3rem" src={props.image} />
          ) : (
            <span>🎧</span>
          )}
        </div>
      </Skeleton>
      <div className="flex flex-col justify-center gap-1 overflow-hidden">
        <Skeleton className="w-24" loading={isLoading}>
          <p className="truncate text-sm">{props.name}</p>
        </Skeleton>
        <Skeleton className="w-20" loading={isLoading}>
          <p className="text-muted truncate text-xs">
            {"type" in props ? `${props.followers.toLocaleString()} followers` : null}
          </p>
        </Skeleton>
      </div>
    </Container>
  );
}
