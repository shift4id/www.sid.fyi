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
      aria-disabled={active}
      href={href}
      tabIndex={active ? -1 : undefined}
      className={cn(
        "select-none underline underline-offset-8 transition",
        active
          ? "decoration-accent"
          : "decoration-subtle hover:decoration-accent focus-visible:decoration-accent decoration-dotted",
      )}
    >
      {name}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="bg-background sticky inset-x-0 top-0 z-10 flex flex-col items-center justify-between gap-2 p-6">
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
