import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { AppProps } from "next/app";
import { Inter as Sans, Lora as Serif } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import cn from "@/utils/cn";
import "@/styles/main.css";

const sans = Sans({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const serif = Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin-ext"],
});

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <LazyMotion features={domAnimation}>
    <main className={cn("flex min-h-screen w-full flex-col p-6 font-sans", sans.variable, serif.variable)}>
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
