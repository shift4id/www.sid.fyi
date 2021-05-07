import Head from "next/head";

import Link from "@/components/link";

const Offline = () => (
  <div className="flex flex-col flex-grow justify-center items-center w-full text-center">
    <Head>
      <title>Error - Sid Adusumelli</title>
      <meta name="description" content="This URL doesn't lead you anywhere." />
      <meta property="og:title" content="Error - Sid Adusumelli" />
      <meta property="og:description" content="This URL doesn't lead you anywhere." />
    </Head>
    <h1 className="text-6xl font-bold">Error: Offline</h1>
    <p className="my-4 text-2xl font-medium">
      You are currently offline. Please check your internet connection.
    </p>
    <Link
      href="/"
      className="py-2 px-4 bg-gray-200 rounded-md transition hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      Return Home
    </Link>
  </div>
);

export default Offline;
