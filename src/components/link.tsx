import NextLink from "next/link";
import cn from "@/utils/cn";

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "rel" | "target" | "scroll"> & {
  external?: boolean;
};

const Link: React.FC<LinkProps> = ({ className, external, ...props }) => (
  <NextLink
    className={cn("outline-none", className)}
    rel="noopener noreferrer"
    scroll={false}
    target={external ? "_blank" : "_self"}
    {...props}
  />
);

export default Link;
