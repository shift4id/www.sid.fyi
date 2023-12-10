import { m } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

type ContainerProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = function ({ title, description, children }) {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <>
      <Head>
        <title>{`${title} - Sid A`}</title>
        <meta content="follow, index" name="robots" />
        <meta content={description} name="description" />

        <link href={`${baseUrl}${router.asPath}`} rel="canonical" />

        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="Siddharth Adusumelli" property="og:site_name" />
        <meta content={`${baseUrl}${router.asPath}`} property="og:url" />
        <meta content={`${baseUrl}/images/open-graph.png`} property="og:image" />

        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@shift4id" name="twitter:site" />
        <meta content={`${baseUrl}/images/open-graph.png`} name="twitter:image" />
      </Head>
      <m.section
        animate={{ opacity: 1 }}
        className="flex w-full grow flex-col items-center justify-center py-10"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: -0.1, ease: "easeInOut" }}
      >
        <div className="w-full space-y-8">{children}</div>
      </m.section>
    </>
  );
};

export default Container;
