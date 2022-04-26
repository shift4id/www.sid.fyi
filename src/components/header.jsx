import { faFaceSmile } from "@fortawesome/free-regular-svg-icons/faFaceSmile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { m as motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useCallback } from "react";
import Link from "./link";

const links = [{ href: "/", name: "home", icon: faFaceSmile }];

function NavLink({ active, href, icon, name }) {
  return (
    <li key={href} className={`w-min rounded transition-opacity ${!active ? "opacity-50" : ""}`}>
      <Link className="transition-transform duration-500 hover:scale-125" href={href}>
        <span className="sr-only">{name}</span>
        <FontAwesomeIcon className="text-xl" icon={icon} />
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  active: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

function ThemeToggle() {
  const { setTheme, resolvedTheme, systemTheme } = useTheme();

  const theme = resolvedTheme ?? systemTheme;

  const updateTheme = useCallback(() => setTheme(theme === "light" ? "dark" : "light"), [setTheme, theme]);
  
  return (
    <button className={`ml-auto transition-transform duration-500 hover:scale-125`} type="button" onClick={updateTheme}>
      <span className="sr-only">Change theme</span>
      <div className="w-5 h-5 rounded-full bg-gray-500"></div>
    </button>
  );
}

const transition = {
  type: "tween",
  duration: 0.5,
};

const sectionVariants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function NavBar() {
  const { pathname } = useRouter();

  return (
    <motion.header
      animate="enter"
      className="flex w-full justify-between py-6 text-lg"
      exit="exit"
      initial="hidden"
      transition={transition}
      variants={sectionVariants}
    >
      <ul className="flex space-x-4">
        {links.map((link) => (
          <NavLink key={link.href} active={pathname === link.href} {...link} />
        ))}
      </ul>
      <ThemeToggle />
    </motion.header>
  );
}
