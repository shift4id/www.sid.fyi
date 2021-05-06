import Image from "next/image";
import PropTypes from "prop-types";

import Link from "@/components/link";

const Card = ({ url, title, image, artists }) => {
  return (
    <Link
      href={url}
      className="flex p-4 mt-6 rounded-md border-2 border-gray-300 dark:border-gray-700"
    >
      <div className="flex w-full">
        <div className="flex relative justify-center items-center w-12 h-12">
          <Image className="rounded-md" layout="fill" src={image} />
        </div>
        <div className="max-w-[calc(100%-5rem)] ml-4">
          <p className="font-medium truncate overflow-ellipsis">{title}</p>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 truncate overflow-ellipsis">
            {artists}
          </p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artists: PropTypes.string.isRequired,
};

export default Card;
