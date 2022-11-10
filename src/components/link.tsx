import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>, NextLinkProps {  
  external?: boolean;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = function ({ external, ...props }) {
  return (
    <NextLink {...props} rel="noopener noreferrer" target={external ? "_blank" : "_self"}  />
  );
};

export type { LinkProps };
export default Link;
