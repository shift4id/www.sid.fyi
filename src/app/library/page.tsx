import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { getBooks } from "@/lib/notion";
import { Stack } from "./components/stack";

async function Books(): Promise<React.JSX.Element> {
  const books = await getBooks().catch(() => undefined);

  return <Stack books={books} />;
}

const containerProps = {
  title: "Library",
  description: "Explore various books that have influenced my thinking.",
};

export const metadata: Metadata = containerProps;
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
