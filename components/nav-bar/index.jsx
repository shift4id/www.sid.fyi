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

        {isOpen && (
          <nav className="absolute top-0 right-0 left-0 py-6 px-4 -mx-4 mt-12 bg-white h-min dark:bg-black">
            <ul>
              {links.map(({ href, text }) => (
                <li
                  onClick={() => setIsOpen(false)}
                  className="my-2 w-min text-2xl leading-tight"
                  key={href}
                >
                  <Link href={href}>
                    <span className="mr-2 text-2xl text-gray-500">/</span>
                    <span className={`${pathname === href && "line-through"}`}>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default NavBar;
