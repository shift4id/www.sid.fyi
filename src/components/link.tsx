import NextLink from "next/link";

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({ external, ...props }) => (
  <NextLink rel="noopener noreferrer" scroll={false} target={external ? "_blank" : "_self"} {...props} />
);

export type { LinkProps };
export default Link;
