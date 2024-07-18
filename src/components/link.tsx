import NextLink from "next/link";
import { cn } from "@/utils";

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "rel" | "target" | "scroll"> & {
  external?: boolean;
};

function Link({ className, external, ...props }: LinkProps): React.ReactNode {
  return (
    <NextLink
      className={cn("outline-none", className)}
      rel="noopener noreferrer"
      scroll={false}
      target={external ? "_blank" : "_self"}
      {...props}
    />
  );
}

export { Link };
