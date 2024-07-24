import NextLink from "next/link";
import { cn } from "@/utils";

interface LinkProps extends Omit<React.ComponentProps<"a">, "href" | "rel" | "target"> {
  href: string;
  external?: boolean;
}

function Link({ className, external, ...props }: LinkProps): React.ReactNode {
  const Tag = external ? "a" : NextLink;

  return <Tag className={cn("outline-none", className)} rel="noopener noreferrer" {...props} />;
}

export { Link };
