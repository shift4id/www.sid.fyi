import type { Metadata } from "next";
import { Container, Grid } from "@/components";
import { getBooks } from "@/lib/notion";
import { Suspense } from "react";
import { Item } from "./components";

const fallbackValue = {};
const fallbackData = Array.from<typeof fallbackValue>({ length: 10 }).fill(fallbackValue);

async function BooksGrid(): Promise<React.JSX.Element> {
  const books = await getBooks().catch(() => fallbackData);

  return <Grid Of={Item} items={books} />;
}

const metadata = {
  title: "Library",
  description: "Explore various books that have influenced my thinking.",
} satisfies Metadata;

const revalidate = 60 * 60;

function Library(): React.ReactNode {
  return (
    <Container {...metadata}>
      <Suspense fallback={<Grid Of={Item} items={fallbackData} />}>
        <BooksGrid />
      </Suspense>
    </Container>
  );
}

export { metadata, revalidate };
export default Library;
