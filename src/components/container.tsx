import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type ContainerProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = function ({ title, description, children }) {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

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
      <section className="flex w-full grow flex-col items-center justify-center py-10">
        <div className="relative flex w-full flex-col space-y-8">{children}</div>
      </section>
    </>
  );
};

export default Container;
