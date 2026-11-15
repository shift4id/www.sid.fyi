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
      {/* the current chapter is in the accent color; hovering another only brightens its name */}
      <Link
        aria-current={active ? "page" : undefined}
        href={href}
        className={cn(
          "group flex items-baseline gap-1.5 outline-none select-none",
          active ? "text-accent" : "text-muted",
        )}
      >
        <span className="text-xs">{numeral}</span>
        <span
          className={cn(
            !active && "group-hover:text-foreground group-focus-visible:text-foreground transition",
          )}
        >
          {name}
        </span>
      </Link>
    </li>
  );
}
