import PropTypes from "prop-types";

import Link from "@/components/link";
import Date from "@/components/thoughts/date";

const Card = ({ slug, title, date, description }) => (
  <Link href={`/thoughts/${slug}`} className="py-2">
    <h3 className="text-xl font-medium">{title}</h3>
    <p className="mt-1 text-sm text-gray-500">
      <Date date={date} />
    </p>
    <p className="mt-1 text-gray-700 dark:text-gray-300">{description}</p>
  </Link>
);

Card.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
