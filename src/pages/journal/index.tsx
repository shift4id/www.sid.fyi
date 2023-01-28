import { InferGetStaticPropsType, NextPage } from "next";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Card from "@/components/journal/card";
import { getEssays } from "@/lib/notion";

const getStaticProps = async function () {
  const essays = await getEssays();
  return {
    props: { essays },
    revalidate: 60 * 60,
  };
};

const Journal: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = function ({ essays }) {
  const md = {
    title: "Journal",
    description: "Discover my inner musings on a variety of topics.",
  };

  return (
    <Container {...md}>
      <Heading {...md} />
      {essays.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Container>
  );
};

export { getStaticProps };
export default Journal;
