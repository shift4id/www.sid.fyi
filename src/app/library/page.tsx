import type { Metadata } from "next";
import { Suspense } from "react";
import { ChapterOpener } from "@/components/chapter-opener";
import { Page } from "@/components/page";
import { getBooks } from "@/lib/notion";
import { pageMetadata, pages } from "@/utils/metadata";
import { Shelf } from "./components/shelf";

async function Books(): Promise<React.ReactNode> {
  const books = await getBooks().catch(() => undefined);

  return <Shelf books={books} />;
}

export const metadata: Metadata = pageMetadata({ ...pages.library, path: "/library" });
export const revalidate = 3600; // 1 Hour

export default function Library(): React.ReactNode {
  return (
    <Page>
      <ChapterOpener href="/library" />
      <Suspense fallback={<Shelf />}>
        <Books />
      </Suspense>
    </Page>
  );
}
