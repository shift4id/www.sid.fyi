import PropTypes from "prop-types";

import Link from "@/components/link";

export default function Card({ href, product, type, description }) {
  return (
    <Link href={href}>
      <p className="text-lg font-medium">{product}</p>
      <p className="mt-1 text-sm text-gray-500">{type}</p>
      <p className="mt-1 text-gray-700 dark:text-gray-300">{description}</p>
    </Link>
  );
}
Card.propTypes = {
  href: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Card.defaultProps = {
  description: "",
};
