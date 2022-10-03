import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons/faFaceSmile";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons/faHeadphones";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "./link";

const links = [
  { href: "/", name: "home", icon: faFaceSmile },
  { href: "/music", name: "music", icon: faHeadphones },
  { href: "/photography", name: "photography", icon: faCamera },
];

type NavLinkProps = {
  active: boolean;
  href: string;
  name: string;
  icon: IconDefinition;
};

const NavLink: React.FC<NavLinkProps> = function ({ active, href, icon, name }) {
  return (
    <li key={href} className={`w-min rounded transition duration-500 hover:scale-125 ${!active ? "opacity-50" : ""}`}>
      <Link href={href}>
        <span className="sr-only">{name}</span>
        <FontAwesomeIcon className="text-2xl" icon={icon} />
      </Link>
    </li>
  );
};

const Header: React.FC = function () {
  const { pathname } = useRouter();

  return (
    <header className="flex w-full justify-between py-6 text-lg">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <NavLink key={link.href} active={pathname === link.href} {...link} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
