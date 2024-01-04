import { Head, Html, Main, NextScript } from "next/document";

const Document: React.FC = () => (
  <Html className="antialiased" lang="en">
    <Head>
      <link href="/favicons/apple-touch-icon.png?v=2024" rel="apple-touch-icon" sizes="180x180" />
      <link href="/favicons/favicon-32x32.png?v=2024" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicons/favicon-16x16.png?v=2024" rel="icon" sizes="16x16" type="image/png" />
      <link href="/favicons/site.webmanifest?v=2024" rel="manifest" />
      <link color="#ff80ff" href="/favicons/safari-pinned-tab.svg?v=2024" rel="mask-icon" />
      <link href="/favicon.ico?v=2024" rel="shortcut icon" />
      <meta content="sid.fyi" name="apple-mobile-web-app-title" />
      <meta content="sid.fyi" name="application-name" />
      <meta content="#ff80ff" name="msapplication-TileColor" />
      <meta content="/favicons/browserconfig.xml?v=2024" name="msapplication-config" />
      <meta content="#ff80ff" name="theme-color" />
    </Head>
    <body className="mx-auto max-w-3xl scroll-smooth bg-white text-black selection:bg-yellow">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
