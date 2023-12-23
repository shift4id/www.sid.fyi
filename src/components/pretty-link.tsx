import Link, { LinkProps } from "./link";

type PrettyLinkProps = LinkProps;

const PrettyLink: React.FC<PrettyLinkProps> = ({ children, ...props }) => (
  <Link
    className="underline decoration-gray-400 underline-offset-4 transition duration-300 hover:text-primary-200"
    {...props}
  >
    {children}
  </Link>
);

export default PrettyLink;
