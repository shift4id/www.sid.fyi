import { m } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Metadata = { title: string; description: string };

type ContainerProps = React.PropsWithChildren<Metadata & { md?: Metadata }>;

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

const Container: React.FC<ContainerProps> = ({ title, description, md, children }) => {
  const { asPath } = useRouter();

  const mdTitle = md?.title ?? title;
  const mdDescription = md?.description ?? description;

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [asPath]);

  return (
    <m.section
      animate={{ opacity: 1 }}
      className="w-full grow py-20"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: -0.1, ease: "easeInOut" }}
    >
      <Head>
        <title>{`${mdTitle} | Sid A`}</title>
        <meta content="follow, index" name="robots" />
        <meta content={mdDescription} name="description" />

        <link href={`${BASE_URL}${asPath}`} rel="canonical" />

        <meta content={mdTitle} property="og:title" />
        <meta content={mdDescription} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="Siddharth Adusumelli" property="og:site_name" />
        <meta content={`${BASE_URL}${asPath}`} property="og:url" />
        <meta content={`${BASE_URL}/images/open-graph.png`} property="og:image" />

        <meta content={mdTitle} name="twitter:title" />
        <meta content={mdDescription} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@shift4id" name="twitter:site" />
        <meta content={`${BASE_URL}/images/open-graph.png`} name="twitter:image" />
      </Head>
      <div className="w-full space-y-8">
        <div>
          <h1 className="text-3xl !leading-normal md:text-4xl">
            <em className="bg-pink/20">{title}</em>
          </h1>
          <h2 className="ml-auto max-w-lg text-right text-2xl !leading-normal text-gray md:text-3xl">
            {description}
          </h2>
        </div>
        <hr className="border-lightGray" />
        {children}
      </div>
    </m.section>
  );
};

export type { Metadata };
export default Container;
