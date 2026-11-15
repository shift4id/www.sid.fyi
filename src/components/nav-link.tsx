"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { Link } from "./link";

interface NavLinkProps {
  href: string;
  name: string;
  numeral: string;
}

/** The current chapter shows a pink numeral and a bright name; others brighten their name on hover. */
export function NavLink({ href, name, numeral }: NavLinkProps): React.ReactNode {
  const active = usePathname() === href;

  return (
    <li>
      <Link
        aria-current={active ? "page" : undefined}
        href={href}
        className="group flex items-baseline gap-1.5 select-none"
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
