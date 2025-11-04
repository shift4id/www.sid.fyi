import NextLink from "next/link";
import { cn } from "@/utils/cn";

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "rel">;

export function Link({ className, ...props }: LinkProps): React.ReactNode {
  return <NextLink className={cn("outline-none", className)} rel="noopener noreferrer" {...props} />;
}
