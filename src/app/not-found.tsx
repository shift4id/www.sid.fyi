import type { Metadata } from "next";
import { Link } from "@/components/link";
import { Page } from "@/components/page";

export const metadata: Metadata = { title: "404", description: "You seem lost..." };

export default function NotFound(): React.ReactNode {
  return (
    <Page>
      <header className="flex flex-col items-start gap-3">
        <span aria-hidden className="text-accent font-display text-8xl leading-none">
          404
        </span>
        <h1 className="font-display text-5xl italic">You seem lost…</h1>
        <Link
          className="text-muted hover:text-accent focus-visible:text-accent transition"
          href="/"
        >
          &larr; back to contents
        </Link>
      </header>
    </Page>
  );
}
