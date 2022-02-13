import PropTypes from "prop-types";

import Container from "./container";
import { getGradient } from "@/lib/gradients";

export default function Layout({ title, description, children }) {
  const gradient = getGradient();

  return (
    <Container title={title} description={description}>
      <h1 className={`text-4xl leading-normal tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
        {title}
      </h1>
      <h2 className="mt-2 text-gray-600 dark:text-gray-400">{description}</h2>
      {children}
    </Container>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
