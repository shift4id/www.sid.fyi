import NextLink from "next/link";
import clns from "@/lib/clns";

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "rel" | "target" | "scroll"> & {
  external?: boolean;
};

const Link: React.FC<LinkProps> = ({ className, external, ...props }) => (
  <NextLink
    className={clns(className, "outline-none")}
    rel="noopener noreferrer"
    scroll={false}
    target={external ? "_blank" : "_self"}
    {...props}
  />
);

export default Link;
