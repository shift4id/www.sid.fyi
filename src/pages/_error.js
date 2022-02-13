import Head from "next/head";
import PropTypes from "prop-types";

import Link from "@/components/link";

export default function Error({ statusCode }) {
  return (
    <div className="flex flex-col flex-grow justify-center items-center w-full text-center">
      <Head>
        <title>Error - Sid Adusumelli</title>
        <meta name="description" content="This URL doesn't lead you anywhere." />
        <meta property="og:title" content="Error - Sid Adusumelli" />
        <meta property="og:description" content="This URL doesn't lead you anywhere." />
      </Head>
      <h1 className="text-6xl font-bold">{statusCode ? `Error: ${statusCode}` : "Client Error"}</h1>
      <p className="my-4 text-2xl font-medium">There appears to be an error, so try going back to the home page.</p>
      <Link href="/" className="py-2 px-4 bg-gray-200 rounded-md transition dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">
        Return Home
      </Link>
    </div>
  );
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

Error.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
