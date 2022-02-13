import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

export default function Container({ title, description, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} - Sid A</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${router.asPath}`} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${router.asPath}`} />

        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content="Siddharth Adusumelli" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/open-graph.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shift4id" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/open-graph.png`} />
      </Head>
      {children}
    </>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
