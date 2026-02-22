import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import { getBooks } from "@/lib/notion";
import { Item } from "./components/item";

const fallbackData = Array.from({ length: 10 }).map((_, i) => ({
  id: i.toString(),
}));

async function BooksGrid(): Promise<React.JSX.Element> {
  const books = await getBooks().catch(() => fallbackData);

  return <Grid Of={Item} items={books} />;
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
      <Suspense fallback={<Grid Of={Item} items={fallbackData} />}>
        <BooksGrid />
      </Suspense>
    </Container>
  );
}
