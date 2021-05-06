import NextLink from "next/link";
import PropTypes from "prop-types";

const Link = ({ href, ...props }) => {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <NextLink href={href}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading,jsx-a11y/anchor-has-content */}
        <a {...props} />
      </NextLink>
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading,jsx-a11y/anchor-has-content
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
