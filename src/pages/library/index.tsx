import { InferGetStaticPropsType, NextPage } from "next";
import Container, { Metadata } from "@/components/container";
import Grid from "@/components/grid";
import Heading from "@/components/heading";
import Card from "@/components/library/card";
import { getBooks } from "@/lib/notion";

const getStaticProps = async function () {
  return { props: { books: await getBooks() }, revalidate: 60 * 60 };
};

const Library: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = function ({ books }) {
  const md: Metadata = {
    title: "Library",
    description: "Explore a selection of books that have influenced my thinking.",
  };

  return (
    <Container {...md}>
      <Heading {...md} />
      <Grid Of={Card} items={books} />
    </Container>
  );
};

export { getStaticProps };
export default Library;
