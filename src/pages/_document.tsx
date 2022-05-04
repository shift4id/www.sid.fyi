import { Head, Html, Main, NextScript } from "next/document";

const Document: React.FC = function () {
  return (
    <Html lang="en">
      <Head>
        <link as="font" crossOrigin="anonymous" href="/fonts/SuisseIntl/Regular.woff2" rel="preload" />
        <link as="font" crossOrigin="anonymous" href="/fonts/GrandSlang/B-Side.woff2" rel="preload" />
        <link as="font" crossOrigin="anonymous" href="/fonts/GrandSlang/Italic.woff2" rel="preload" />

        <link href="/favicons/site.webmanifest" rel="manifest" />

        <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link color="#8080ff" href="/favicons/safari-pinned-tab.svg" rel="mask-icon" />
        <link href="/favicon.ico" rel="shortcut icon" />

        <meta content="#8080ff" name="msapplication-TileColor" />
        <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
        <meta content="#8080ff" name="theme-color" />
      </Head>
      <body className="mx-auto max-w-4xl bg-black text-white transition duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
