import localFont from "@next/font/local";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "@/styles/main.css";

const sans = localFont({
  src: [{ path: "./fonts/SuisseIntl/Regular.woff2", weight: "400", style: "normal" }],
  preload: true,
  display: "swap",
  variable: "--font-sans",
});

const serif = localFont({
  src: [{ path: "./fonts/SuisseWorks/Italic.woff2", weight: "400", style: "italic" }],
  preload: true,
  display: "swap",
  variable: "--font-serif",
});

const mono = localFont({
  src: [{ path: "./fonts/SuisseIntlMono/Regular.woff2", weight: "400", style: "normal" }],
  preload: true,
  display: "swap",
  variable: "--font-mono",
});

const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;

const App: React.FC<AppProps> = function ({ Component, pageProps }) {

  return (
    <>
      {gtagId && (
        <>
          <Head>
            <title>Sid A</title>
            <link href="https://www.google-analytics.com" rel="preconnect" />
            <link href="https://www.googletagmanager.com" rel="preconnect" />
          </Head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagId}');
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
