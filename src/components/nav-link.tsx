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
      {/* the current chapter: pink numeral, bright name; hovering another only brightens its name */}
      <Link
        aria-current={active ? "page" : undefined}
        href={href}
        className="group flex items-baseline gap-1.5 outline-none select-none"
      >
        <span className={cn("text-xs", active ? "text-accent" : "text-muted")}>{numeral}</span>
        <span
          className={cn(
            "transition",
            active
              ? "text-foreground"
              : "text-muted group-hover:text-foreground group-focus-visible:text-foreground",
          )}
        >
          {name}
        </span>
      </Link>
    </li>
  );
}
