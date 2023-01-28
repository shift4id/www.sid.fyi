import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { AppProps } from "next/app";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import clns from "@/lib/clns";
import "@/styles/main.css";

const sans = localFont({
  src: [
    { path: "../fonts/SuisseIntl/Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/SuisseIntl/Medium.woff2", weight: "500", style: "normal" },
  ],
  preload: true,
  display: "swap",
  variable: "--font-sans",
});

const serif = localFont({
  src: [{ path: "../fonts/SuisseWorks/Italic.woff2", weight: "400", style: "italic" }],
  preload: true,
  display: "swap",
  variable: "--font-serif",
});

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <LazyMotion features={domAnimation}>
    <main className={clns(sans.variable, serif.variable, "flex min-h-screen w-full flex-col p-8 font-sans")}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Footer />
      <SpeedInsights />
    </main>
  </LazyMotion>
);

export default App;
