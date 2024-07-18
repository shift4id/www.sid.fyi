import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter as Sans, Lora as Serif } from "next/font/google";
import { Footer, NavBar } from "@/components";
import { cn } from "@/utils";
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

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

const name = "Siddharth Adusumelli";
const title = "Sid A";
const description = "A bit about Sid.";

const metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: title, template: `%s | ${title}` },
  description,
  applicationName: "Sid A",
  authors: [{ name, url: BASE_URL }],
  generator: "Next.js",
  referrer: "origin",
  creator: name,
  publisher: name,
  alternates: { canonical: BASE_URL },
  openGraph: { type: "website", url: BASE_URL, title, description },
  twitter: { card: "summary_large_image", site: "@shift4id", creator: "@shift4id", title, description },
  category: "personal",
} satisfies Metadata;

function Layout({ children }: React.PropsWithChildren): React.ReactNode {
  return (
    <html className="antialiased" lang="en">
      <body
        className={cn(
          "mx-auto flex min-h-screen w-full flex-col scroll-smooth bg-background p-6 font-sans text-foreground selection:bg-highlight",
          sans.variable,
          serif.variable,
        )}
      >
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

export { metadata };
export default Layout;
