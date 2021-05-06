import PropTypes from "prop-types";

import Layout from "@/components/layout";
import Card from "@/components/thoughts/card";
import { getAllFilesFrontMatter } from "@/lib/mdx";

const Thoughts = ({ thoughts }) => {
  thoughts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <Layout title="Thoughts" description="Here are a few things that I've written about!">
      <div className="py-2" />
      {thoughts.map((frontMatter) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={frontMatter.slug} {...frontMatter} />
      ))}
    </Layout>
  );
};

Thoughts.propTypes = {
  thoughts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const getStaticProps = async () => {
  const thoughts = await Promise.all(await getAllFilesFrontMatter("thoughts"));

  return { props: { thoughts } };
};

export default Thoughts;
