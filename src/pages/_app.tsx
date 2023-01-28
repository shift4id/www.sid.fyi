import localFont from "@next/font/local";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "@/styles/main.css";

const sans = localFont({
  src: [
    { path: "./fonts/SuisseIntl/Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SuisseIntl/Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SuisseIntl/Italic.woff2", weight: "400", style: "italic" },
  ],
  preload: true,
  display: "swap",
  fallback: [],
  variable: "--font-sans",
});

const serif = localFont({
  src: [
    { path: "./fonts/SuisseWorks/Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SuisseWorks/Italic.woff2", weight: "400", style: "italic" },
  ],
  preload: true,
  display: "swap",
  fallback: [],
  variable: "--font-serif",
});

const mono = localFont({
  src: [
    { path: "./fonts/SuisseIntlMono/Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SuisseIntlMono/Bold.woff2", weight: "700", style: "normal" },
  ],
  preload: true,
  display: "swap",
  fallback: [],
  variable: "--font-mono",
});

const { NEXT_PUBLIC_GTAG_ID } = process.env;

const App: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <>
      {NEXT_PUBLIC_GTAG_ID && (
        <>
          <Head>
            <title>Sid A</title>
            <link href="https://www.google-analytics.com" rel="preconnect" />
            <link href="https://www.googletagmanager.com" rel="preconnect" />
          </Head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GTAG_ID}');
            `}</Script>
        </>
      )}
      <main className={`${sans.variable} ${serif.variable} ${mono.variable} flex min-h-screen w-full flex-col px-8`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default App;
