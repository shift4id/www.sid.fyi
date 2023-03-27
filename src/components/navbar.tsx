import { useRouter } from "next/router";
import { Book, Camera, Icon, Music, Smile } from "react-feather";
import Link, { LinkProps } from "@/components/link";

type NavItem = {
  name: string;
  href: LinkProps["href"];
  Icon: Icon;
};

const links: NavItem[] = [
  { href: "/", name: "home", Icon: Smile },
  { href: "/jukebox", name: "jukebox", Icon: Music },
  { href: "/gallery", name: "gallery", Icon: Camera },
  { href: "/library", name: "library", Icon: Book },
];

type NavLinkProps = {
  active: boolean;
  item: NavItem;
};

const NavLink: React.FC<NavLinkProps> = function ({ active, item }) {
  return (
    <li>
      <Link
        href={item.href}
        className={`flex items-center space-x-2 transition duration-300 ${
          active ? "text-pink-200" : "hover:text-gray-300"
        }`}
      >
        <item.Icon size="1rem" />
        <span className="sr-only sm:not-sr-only">{item.name}</span>
      </Link>
    </li>
  );
};

const Navbar: React.FC = function () {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-10 -mx-6 bg-gray-900 p-6">
      <ul className="flex space-x-6 leading-none">
        {links.map((item) => (
          <NavLink key={item.name} active={pathname === item.href} item={item} />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
