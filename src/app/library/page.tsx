import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import { getBooks } from "@/lib/notion";
import { Item } from "./components/item";

const fallbackValue = {};
const fallbackData = Array.from<typeof fallbackValue>({ length: 10 }).fill(fallbackValue);

async function BooksGrid(): Promise<React.JSX.Element> {
  const books = await getBooks().catch(() => fallbackData);

  return <Grid Of={Item} items={books} />;
}

const containerProps = {
  title: "Library",
  description: "Explore various books that have influenced my thinking.",
};
const metadata: Metadata = containerProps;

const revalidate = 60 * 60;

function Library(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Suspense fallback={<Grid Of={Item} items={fallbackData} />}>
        <BooksGrid />
      </Suspense>
    </Container>
  );
}

export { metadata, revalidate };
export default Library;
