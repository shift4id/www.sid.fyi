import { NavLink } from "./nav-link";

const links: React.ComponentProps<typeof NavLink>[] = [
  { href: "/", name: "about" },
  { href: "/jukebox", name: "jukebox" },
  { href: "/gallery", name: "gallery" },
  { href: "/library", name: "library" },
  { href: "/chat", name: "chat" },
];

export function NavBar(): React.ReactNode {
  return (
    <header className="bg-background sticky inset-x-0 top-0 z-10 flex flex-col gap-4 py-6">
      <ul className="flex gap-6 text-sm">
        {links.map((link) => (
          <NavLink key={link.name} {...link} />
        ))}
      </ul>
    </header>
  );
}
