import NextLink from "next/link";
import PropTypes from "prop-types";

export default function Link({ href, ...props }) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <NextLink href={href}>
        <a {...props} />
      </NextLink>
    );
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
};
