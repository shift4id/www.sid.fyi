import { m } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Metadata = { title: string; description: string };

type ContainerProps = React.PropsWithChildren<Metadata>;

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

const Container: React.FC<ContainerProps> = ({ title, description, children }) => {
  const { asPath } = useRouter();

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [asPath]);

  return (
    <m.section
      animate={{ opacity: 1 }}
      className="flex w-full grow flex-col items-center justify-center py-10"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: -0.1, ease: "easeInOut" }}
    >
      <Head>
        <title>{`${title} | Sid A`}</title>
        <meta content="follow, index" name="robots" />
        <meta content={description} name="description" />

        <link href={`${BASE_URL}${asPath}`} rel="canonical" />

        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="Siddharth Adusumelli" property="og:site_name" />
        <meta content={`${BASE_URL}${asPath}`} property="og:url" />
        <meta content={`${BASE_URL}/images/open-graph.png`} property="og:image" />

        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@shift4id" name="twitter:site" />
        <meta content={`${BASE_URL}/images/open-graph.png`} name="twitter:image" />
      </Head>
      <div className="w-full space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl">
            <em>{title}</em>
          </h1>
          <h2 className="text-gray-400">{description}</h2>
        </div>
        {children}
      </div>
    </m.section>
  );
};

export type { Metadata };
export default Container;
