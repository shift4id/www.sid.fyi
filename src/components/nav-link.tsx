"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { Link } from "./link";

interface NavLinkProps {
  href: string;
  name: string;
  numeral: string;
}

export function NavLink({ href, name, numeral }: NavLinkProps): React.ReactNode {
  const active = usePathname() === href;

  return (
    <li>
      <Link
        aria-current={active ? "page" : undefined}
        href={href}
        className={cn(
          "group flex items-baseline gap-1.5 transition select-none",
          active
            ? "text-foreground"
            : "text-muted hover:text-foreground focus-visible:text-foreground",
        )}
      >
        <span
          className={cn(
            "text-muted group-hover:text-accent text-xs transition",
            active && "text-accent",
          )}
        >
          {numeral}
        </span>
        <span>{name}</span>
      </Link>
    </li>
  );
}
