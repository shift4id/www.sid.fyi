import Link, { LinkProps } from "./link";

type PrettyLinkProps = LinkProps;

const PrettyLink: React.FC<PrettyLinkProps> = function ({ children, className, ...props }) {
  return (
    <Link
      className="underline decoration-gray-500 underline-offset-4 transition duration-300 hover:text-pink-200"
      {...props}
    >
      <em className={className}>{children}</em>
    </Link>
  );
};

export default PrettyLink;
