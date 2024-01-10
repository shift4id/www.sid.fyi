import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { AppProps } from "next/app";
import { Lora, Mulish } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import clns from "@/lib/clns";
import "@/styles/main.css";

const sans = Mulish({ weight: ["400"], variable: "--font-sans", subsets: ["latin-ext"] });
const serif = Lora({ weight: ["400"], variable: "--font-serif", subsets: ["latin-ext"] });

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <LazyMotion features={domAnimation}>
    <main className={clns(sans.variable, serif.variable, "flex min-h-screen w-full flex-col p-6 font-sans")}>
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
