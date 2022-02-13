import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />

        <link rel="manifest" href="/favicons/site.webmanifest" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#8080ff" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="msapplication-TileColor" content="#8080ff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#8080ff" />
      </Head>
      <body className="px-4 mx-auto max-w-2xl text-black bg-white dark:text-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
