import PropTypes from "prop-types";

import Link from "@/components/link";

const Card = ({ title, position, description, icons }) => {
  return (
    <div className="p-4 mt-6 rounded-md border-2 border-gray-300 dark:border-gray-700">
      <div className="flex justify-between w-full">
        <div>
          <p className="text-lg font-medium">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{position}</p>
        </div>
        <div className="flex -mx-2">
          {icons.map(({ Icon, url }) => (
            <Link key={url} href={url} className="mx-2">
              <Icon />
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-1 text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
