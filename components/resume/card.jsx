import PropTypes from "prop-types";

const Card = ({ title, subtitle, description }) => {
  return (
    <div className="py-2">
      <p className="text-lg font-medium">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      <p className="mt-1 text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
