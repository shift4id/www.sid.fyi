import { useRouter } from "next/router";
import Link from "@/components/link";
import cn from "@/utils/cn";

interface NavItem {
  name: string;
  href: string;
}

interface NavLinkProps extends NavItem {
  active: boolean;
}

const links: NavItem[] = [
  { href: "/", name: "about" },
  { href: "/jukebox", name: "jukebox" },
  { href: "/gallery", name: "gallery" },
  { href: "/library", name: "library" },
  { href: "/chat", name: "chat" },
];

const NavLink: React.FC<NavLinkProps> = ({ active, href, name }) => (
  <li>
    <Link
      href={href}
      className={cn(
        "underline decoration-lightGray underline-offset-4 transition-['underline-offset']",
        active
          ? "!decoration-pink underline-offset-8"
          : "hover:underline-offset-8 focus-visible:underline-offset-8",
      )}
    >
      {name}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-10 -mx-6 flex flex-col items-center justify-between gap-2 bg-white p-6">
      <p>
        <em>Siddharth Adusumelli</em>
      </p>
      <ul className="flex gap-6 text-sm">
        {links.map((link) => (
          <NavLink key={link.name} active={pathname === link.href} {...link} />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
