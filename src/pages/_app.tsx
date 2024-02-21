import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { AppProps } from "next/app";
import { Inter, Lora } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import clns from "@/lib/clns";
import "@/styles/main.css";

const sans = Inter({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const serif = Lora({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin-ext"],
});

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <LazyMotion features={domAnimation}>
    <main className={clns(sans.variable, serif.variable, "font-sans flex min-h-screen w-full flex-col p-6")}>
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
