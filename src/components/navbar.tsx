import { useRouter } from "next/router";
import { FiBook, FiCamera, FiMusic, FiSmile } from "react-icons/fi";
import Link, { LinkProps } from "@/components/link";
import clns from "@/lib/clns";

type NavItem = { name: string; href: LinkProps["href"]; Icon: React.ElementType };

interface NavLinkProps extends NavItem {
  active: boolean;
}

const links: NavItem[] = [
  { href: "/", name: "about", Icon: FiSmile },
  { href: "/jukebox", name: "jukebox", Icon: FiMusic },
  { href: "/gallery", name: "gallery", Icon: FiCamera },
  { href: "/library", name: "library", Icon: FiBook },
];

const NavLink: React.FC<NavLinkProps> = ({ active, href, name, Icon }) => (
  <li>
    <Link
      href={href}
      className={clns(
        "flex items-center space-x-2 rounded p-2 transition duration-300 sm:py-1",
        active ? "bg-primary-200/10 text-primary-200" : "bg-gray-400/10 hover:text-gray-400",
      )}
    >
      <Icon size="1rem" />
      <span className="sr-only sm:not-sr-only">{name}</span>
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-10 -mx-6 bg-gray-900 p-6">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <NavLink key={link.name} active={pathname === link.href} {...link} />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
