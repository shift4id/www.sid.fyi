import { ThemeProvider } from "next-themes";
import Script from "next/script";
import PropTypes from "prop-types";

import Name from "@/components/name";
import NavBar from "@/components/nav-bar";

import "@/styles/global.css";

const { NEXT_PUBLIC_GTAG_ID } = process.env;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTAG_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${NEXT_PUBLIC_GTAG_ID}');
      `}</Script>
      <Name />
      <NavBar />
      <main className="flex flex-col flex-grow py-12 w-full">
        <Component {...pageProps} />
      </main>
      <p className="mx-auto mt-2 mb-8 text-sm text-center">&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
    </ThemeProvider>
  );
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
