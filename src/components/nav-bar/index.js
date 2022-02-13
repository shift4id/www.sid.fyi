import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Camera, HardDrive, Headphones, Home } from "react-feather";

import ThemeToggle from "./theme-toggle";
import Link from "@/components/link";

const links = [
  { href: "/", text: "home", Icon: Home },
  { href: "/music", text: "music", Icon: Headphones },
  { href: "/photos", text: "photos", Icon: Camera },
  { href: "/setup", text: "setup", Icon: HardDrive },
];

export default function NavBar() {
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
      <header ref={nav} className="flex relative sticky top-0 z-50 justify-between py-6 w-full bg-white dark:bg-black">
        <ul className="flex space-x-4">
          {links.map(({ href, text, Icon }) => (
            <li className={`rounded w-min transition-opacity ${pathname !== href && "opacity-50"}`} key={href}>
              <Link href={href}>
                <span className="sr-only">{text}</span>
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </header>
    </>
  );
}
