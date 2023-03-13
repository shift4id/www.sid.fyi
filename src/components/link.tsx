import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>, NextLinkProps {
  external?: boolean;
}

const Link: React.FC<LinkProps> = function ({ external, ...props }) {
  return <NextLink rel="noopener noreferrer" scroll={false} target={external ? "_blank" : "_self"} {...props} />;
};

export type { LinkProps };
export default Link;
