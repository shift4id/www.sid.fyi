import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import ThemeToggle from "./theme-toggle";
import Link from "@/components/link";
import NavToggle from "@/components/nav-bar/nav-toggle";

const links = [
  { href: "/", text: "index" },
  { href: "/music", text: "music" },
  { href: "/photos", text: "photos" },
  { href: "/projects", text: "projects" },
  { href: "/resume", text: "resume" },
  { href: "/setup", text: "setup" },
  { href: "/thoughts", text: "thoughts" },
];

const navVariants = {
  initial: {
    opacity: 0,
    transition: { delay: 0, opacity: { duration: 0.1 } },
  },
  open: {
    opacity: 1,
    transition: { delay: 0, opacity: { duration: 0.1 } },
  },
  closed: {
    opacity: 0,
    transition: { delay: 0, opacity: { duration: 0.1 } },
  },
};

const ulVariants = {
  initial: {
    opacity: 0,
    // transition: { staggerChildren: 0.025, staggerDirection: -1 },
  },
  open: {
    opacity: 1,
    // transition: { staggerChildren: 0.025 },
  },
  closed: {
    opacity: 0,
  },
};

const linkVariants = {};

// const linkVariants = {
//   initial: { opacity: 0, y: "3rem" },
//   open: { opacity: 1, y: 0, transition: { type: "spring" } },
// };

const NavBar = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const nav = useRef(null);

  useEffect(() => {
    if (!isOpen) return false;

    const handleClick = (e) => {
      if (!nav.current.contains(e.target)) setIsOpen(false);
    };
    const handleKeyPress = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) setIsOpen(false);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  return (
    <>
      <header
        ref={nav}
        className="flex relative sticky top-0 z-50 justify-between py-6 w-full bg-white dark:bg-black"
      >
        <NavToggle setIsOpen={setIsOpen} isOpen={isOpen} />
        <ThemeToggle />

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial="initial"
              animate="open"
              exit="closed"
              variants={navVariants}
              className="absolute top-0 right-0 left-0 py-6 px-4 -mx-4 mt-12 bg-white h-min dark:bg-black"
            >
              <motion.ul variants={ulVariants}>
                {links.map(({ href, text }) => (
                  <motion.li
                    onClick={() => setIsOpen(false)}
                    className="my-2 w-min text-2xl leading-tight"
                    variants={linkVariants}
                    key={href}
                  >
                    <Link href={href}>
                      <span className="mr-2 text-2xl text-gray-500">/</span>
                      <span className={`${pathname === href && "line-through"}`}>{text}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default NavBar;
