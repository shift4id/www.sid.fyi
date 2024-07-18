"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Link } from "@/components";
import { cn } from "@/utils";

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
        aria-disabled={active}
        href={href}
        tabIndex={active ? -1 : undefined}
        className={cn(
          "select-none underline underline-offset-8 transition",
          active
            ? "decoration-accent"
            : "decoration-subtle decoration-dotted hover:decoration-accent focus-visible:decoration-accent",
        )}
      >
        {name}
      </Link>
    </li>
  );
}

export { NavLink };
