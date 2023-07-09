import { InferGetStaticPropsType, NextPage } from "next";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Card from "@/components/library/card";
import { getBooks } from "@/lib/notion";

const getStaticProps = async function () {
  const books = await getBooks();
  return { props: { books }, revalidate: 60 * 60 };
};

const Library: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = function ({ books }) {
  const md = {
    title: "Library",
    description: "Explore a selection of books that have influenced my thinking.",
  };

  return (
    <Container {...md}>
      <Heading {...md} />
      <div className="grid gap-2 md:grid-cols-2">
        {books.map((book) => (
          <Card key={book.id} item={book} />
        ))}
      </div>
    </Container>
  );
};

export { getStaticProps };
export default Library;
