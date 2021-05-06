import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import PropTypes from "prop-types";

import Layout from "@/components/layout";
import Link from "@/components/link";
import Date from "@/components/thoughts/date";
import { getFiles, getFileBySlug } from "@/lib/mdx";

const Thought = ({ mdxSource, frontMatter }) => (
  <article className="w-full">
    <Layout title={frontMatter.title} description={frontMatter.description}>
      <p className="mt-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
        <Date date={frontMatter.date} />
      </p>
      <div className="prose dark:prose-dark">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <MDXRemote components={{ a: Link, Image }} {...mdxSource} />
      </div>
    </Layout>
  </article>
);

Thought.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mdxSource: PropTypes.object.isRequired,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export async function getStaticPaths() {
  const posts = await getFiles("thoughts");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("thoughts", params.slug);

  return { props: { ...post } };
}

export default Thought;
