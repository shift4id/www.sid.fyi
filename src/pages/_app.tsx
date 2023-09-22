import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "@/styles/main.css";

const sans = localFont({
  src: [
    { path: "./fonts/SuisseIntl/Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SuisseIntl/Medium.woff2", weight: "500", style: "normal" },
  ],
  preload: true,
  display: "swap",
  variable: "--font-sans",
});

const serif = localFont({
  src: [{ path: "./fonts/GrandSlang/Italic.woff2", weight: "400", style: "italic" }],
  preload: true,
  display: "swap",
  variable: "--font-serif",
});

const clns = (...args: string[]): string => args.filter(Boolean).join(" ");

const App: React.FC<AppProps> = function ({ Component, pageProps, router }) {
  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>Sid A</title>
      </Head>
      <main className={clns(sans.variable, serif.variable, "flex min-h-screen w-full flex-col p-8 font-sans")}>
        <Navbar />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        <Footer />
        <Analytics />
      </main>
    </LazyMotion>
  );
};

export default App;
