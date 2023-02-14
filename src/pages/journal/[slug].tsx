import { InferGetStaticPropsType, NextPage } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Heading from "@/components/heading";
import formatDate from "@/lib/format-date";
import mdToHtml from "@/lib/md-to-html";
import { getEssayBySlug, getEssays } from "@/lib/notion";

type Params = { params: { slug: string } };

const getStaticPaths = async function () {
  const paths = (await getEssays()).map((item) => ({ params: { slug: item.slug } }));
  return { paths, fallback: 'blocking' };
};

const getStaticProps = async function ({ params }: Params) {
  const post = await getEssayBySlug(params.slug);
  const content = await mdToHtml(post.content || "");
  return {
    props: { item: { ...post, content } },
    revalidate: 60 * 60,
  };
};

const Essay: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = function ({ item }) {
  const router = useRouter();

  if (!router.isFallback && !item?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const md = { title: item.title, description: item.description };

  return (
    <Container {...md}>
      <time className="font-mono text-xs text-gray-400">{formatDate(item.date)}</time>
      <article>
        <Heading description={item.description} title={item.title} />
        <div dangerouslySetInnerHTML={{ __html: item.content }} className="prose break-words !prose-invert prose-gray mt-8" />
      </article>
    </Container>
  );
};

export { getStaticPaths, getStaticProps };
export default Essay;
