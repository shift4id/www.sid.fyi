import NextLink from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

const Link: React.FC<LinkProps> = function ({ href, external, ...props }) {
  return (
    <NextLink href={href}>
      <a {...props} rel="noopener noreferrer" target={external ? "_blank" : "_self"} />
    </NextLink>
  );
};

export type { LinkProps };
export default Link;
