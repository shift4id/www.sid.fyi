"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { cn } from "@/utils/cn";
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
          "underline underline-offset-8 transition select-none",
          active
            ? "decoration-accent"
            : "decoration-muted hover:decoration-accent focus-visible:decoration-accent decoration-dotted",
        )}
      >
        {name}
      </Link>
    </li>
  );
}

export { NavLink };
