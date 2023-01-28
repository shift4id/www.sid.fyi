import { Head, Html, Main, NextScript } from "next/document";

const Document: React.FC = () => (
  <Html lang="en">
    <Head>
      <link href="/favicons/site.webmanifest" rel="manifest" />

      <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link color="#333" href="/favicons/safari-pinned-tab.svg" rel="mask-icon" />
      <link href="/favicon.ico" rel="shortcut icon" />

      <meta content="#333" name="msapplication-TileColor" />
      <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
      <meta content="#333" name="theme-color" />
    </Head>
    <body className="mx-auto max-w-3xl scroll-smooth bg-gray-900 text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
