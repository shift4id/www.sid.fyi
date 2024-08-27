import { cn } from "@/utils";

type SkeletonProps = React.PropsWithChildren<{
  className?: string;
  loading?: boolean;
}>;

function Skeleton({ loading, className, children }: SkeletonProps): React.ReactNode {
  if (loading)
    return (
      <span
        aria-hidden
        className={cn("pointer-events-none block animate-pulse rounded bg-subtle", className)}
      >
        &nbsp;
      </span>
    );

  return children;
}

export { Skeleton };
