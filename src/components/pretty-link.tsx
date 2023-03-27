import Link, { LinkProps } from "./link";

type PrettyLinkProps = LinkProps;

const PrettyLink: React.FC<PrettyLinkProps> = function ({ children, ...props }) {
  return (
    <Link
      className="underline decoration-gray-600 decoration-2 underline-offset-2 transition duration-300 hover:text-pink-200"
      {...props}
    >
      <em>{children}</em>
    </Link>
  );
};

export default PrettyLink;
