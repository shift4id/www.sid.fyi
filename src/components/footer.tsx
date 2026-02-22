import socials from "@/constants/socials.json";
import { Link } from "./link";

export function Footer(): React.ReactNode {
  return (
    <footer className="flex flex-col gap-4 pt-10">
      <div className="-mx-1 flex flex-wrap gap-x-2 gap-y-0.5 text-xs">
        {socials.map(({ name, link }) => (
          <Link
            key={name}
            className="text-muted hover:text-accent focus-visible:text-accent p-1 transition"
            href={link}
            target="_blank"
          >
            {name}
          </Link>
        ))}
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.
      </p>
    </footer>
  );
}
