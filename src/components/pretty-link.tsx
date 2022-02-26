import { getGradient } from "@/lib/gradients";
import Link, { LinkProps } from "./link";

type PrettyLinkProps = LinkProps;

const PrettyLink: React.FC<PrettyLinkProps> = function ({ href, children, ...props }) {
  return (
    <Link className={`bg-gradient-to-r bg-clip-text text-transparent ${getGradient()}`} href={href} {...props}>
      <em>{children}</em>
    </Link>
  );
};

export default PrettyLink;
