import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { getBooks } from "@/lib/notion";
import { pageMetadata, pages } from "@/utils/metadata";
import { Stack } from "./components/stack";

async function Books(): Promise<React.JSX.Element> {
  const books = await getBooks().catch(() => undefined);

  return <Stack books={books} />;
}

const containerProps = pages.library;

export const metadata: Metadata = pageMetadata({ ...containerProps, path: "/library" });
export const revalidate = 3600; // 1 Hour

export default function Library(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Suspense fallback={<Stack />}>
        <Books />
      </Suspense>
    </Container>
  );
}
