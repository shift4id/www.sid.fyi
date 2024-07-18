import { cn } from "@/utils";

type SkeletonProps = React.PropsWithChildren<{
  className?: string;
  loading?: boolean;
}>;

function Skeleton({ loading, className, children }: SkeletonProps): React.ReactNode {
  if (loading) return <span className={cn("block animate-pulse rounded bg-subtle", className)}>&nbsp;</span>;

  return children;
}

export { Skeleton };
