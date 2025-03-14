import { cn } from "@/utils";
import NextLink from "next/link";

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "rel">;

function Link({ className, ...props }: LinkProps): React.ReactNode {
  return <NextLink className={cn("outline-none", className)} rel="noopener noreferrer" {...props} />;
}

export { Link };
