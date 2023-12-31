import { InferGetStaticPropsType, NextPage } from "next";
import Container, { Metadata } from "@/components/container";
import Grid from "@/components/grid";
import Card from "@/components/library/card";
import { getBooks } from "@/lib/notion";

const getStaticProps = async () => ({ props: { books: await getBooks() }, revalidate: 60 * 60 });

const md: Metadata = {
  title: "Library",
  description: "Explore various books that have influenced my thinking.",
};

const Library: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ books }) => (
  <Container {...md}>
    <Grid Of={Card} items={books} />
  </Container>
);

export { getStaticProps };
export default Library;
