import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/footer";
import Header from "@/components/header";

import "@/styles/main.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

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
      <main className="flex min-h-screen w-full flex-col px-8">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default App;
