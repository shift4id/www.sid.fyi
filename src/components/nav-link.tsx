"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { cn } from "@/utils";
import { Link } from "./link";

interface NavLinkProps {
  name: string;
  href: string;
}

function NavLink({ href, name }: NavLinkProps): React.ReactNode {
  const pathname = usePathname();
  const active = useMemo(() => pathname === href, [pathname, href]);

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "select-none underline underline-offset-8 transition",
          active
            ? "decoration-accent"
            : "decoration-muted decoration-dotted hover:decoration-accent focus-visible:decoration-accent",
        )}
      >
        {name}
      </Link>
    </li>
  );
}

export { NavLink };
