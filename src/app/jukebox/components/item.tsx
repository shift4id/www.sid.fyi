import Image from "next/image";
import { Link, Skeleton } from "@/components";
import type { Profile, Song } from "@/lib/spotify";

type ContainerProps = React.PropsWithChildren<{
  isLoading: boolean;
  href: string;
  className?: string;
}>;

function Container({ isLoading, ...props }: ContainerProps): React.ReactNode {
  return isLoading ? <div {...props} /> : <Link external {...props} />;
}

type ItemProps = Profile | Song | Record<string, never>;

function Item(props: ItemProps): React.ReactNode {
  const { url, image, name, ...rest } = props;

  const isLoading = !("type" in rest);

  return (
    <Container
      className="flex select-none gap-4 ring-accent/20 transition hover:text-accent focus-visible:text-accent"
      href={url}
      isLoading={isLoading}
    >
      <Skeleton className="h-12 w-12" loading={isLoading}>
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center text-2xl">
          {image ? <Image fill alt="" sizes="3rem" src={image} /> : <span>🎧</span>}
        </div>
      </Skeleton>
      <div className="flex flex-col justify-center gap-1 overflow-hidden">
        <p className="truncate text-sm">
          <Skeleton className="w-24" loading={isLoading}>
            {name}
          </Skeleton>
        </p>
        <p className="truncate text-xs text-muted">
          <Skeleton className="w-20" loading={isLoading}>
            {"type" in rest && (
              <>
                {rest.type === "profile" && `${rest.followers.toLocaleString()} followers`}
                {rest.type === "song" && rest.artist}
              </>
            )}
          </Skeleton>
        </p>
      </div>
    </Container>
  );
}

export { Item };
