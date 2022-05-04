import Head from "next/head";
import { useRouter } from "next/router";

const { NEXT_PUBLIC_WEBSITE_URL } = process.env;

type ContainerProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = function ({ title, description, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${title} - Sid A`}</title>
        <meta content="follow, index" name="robots" />
        <meta content={description} name="description" />

        <link href={`${NEXT_PUBLIC_WEBSITE_URL}${router.asPath}`} rel="canonical" />

        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="Siddharth Adusumelli" property="og:site_name" />
        <meta content={`${NEXT_PUBLIC_WEBSITE_URL}${router.asPath}`} property="og:url" />
        <meta content={`${NEXT_PUBLIC_WEBSITE_URL}/images/open-graph.png`} property="og:image" />

        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@shift4id" name="twitter:site" />
        <meta content={`${NEXT_PUBLIC_WEBSITE_URL}/images/open-graph.png`} name="twitter:image" />
      </Head>
      {children}
    </>
  );
};

export default Container;
