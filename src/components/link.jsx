import NextLink from "next/link";
import PropTypes from "prop-types";

export default function Link({ href, ...props }) {
  return href.startsWith("/") || href.startsWith("#") ? (
    <NextLink href={href}>
      <a {...props} />
    </NextLink>
  ) : (
    <a href={href} rel="noopener noreferrer" target="_blank" {...props} />
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
