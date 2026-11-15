"use client";

import { useEffect } from "react";
import { Link } from "@/components/link";
import { Page } from "@/components/page";
import { fullName } from "@/utils/metadata";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const actionClassName =
  "group flex cursor-pointer items-center gap-4 py-1 text-left outline-none select-none";

function Arrow(): React.ReactNode {
  return (
    <span className="text-muted group-hover:text-accent group-focus-visible:text-accent transition group-hover:translate-x-1 group-focus-visible:translate-x-1">
      &rarr;
    </span>
  );
}

export default function ErrorPage({ error, reset }: ErrorPageProps): React.ReactNode {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Page>
      <title>{`Error | ${fullName}`}</title>
      <header className="flex flex-col items-start gap-3">
        <h1 className="font-display text-5xl italic">Error</h1>
        <p className="text-muted text-xl italic">Something went wrong...</p>
      </header>
      <div className="flex flex-col gap-4">
        <p className="text-muted text-sm">
          This page hit a snag while loading. Trying again usually fixes it.
        </p>
        <div className="flex flex-col">
          <button className={actionClassName} type="button" onClick={reset}>
            <Arrow />
            try again
          </button>
          <Link className={actionClassName} href="/">
            <Arrow />
            go home
          </Link>
        </div>
        {error.digest ? (
          <p className="text-muted text-xs">
            Reference: <code className="select-all">{error.digest}</code>
          </p>
        ) : null}
      </div>
    </Page>
  );
}
