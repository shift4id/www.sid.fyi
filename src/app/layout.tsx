import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Syne as Sans } from "next/font/google";
import { Footer, NavBar } from "@/components";
import { clientEnv } from "@/constants/env";
import { cn } from "@/utils";
import "@/styles/globals.css";

const { WEBSITE_URL } = clientEnv;

const sans = Sans({
  weight: "400",
  style: "normal",
  variable: "--font-sans",
  subsets: ["latin"],
});

const name = "Siddharth Adusumelli";
const title = "Sid A";
const description = "A bit about Sid.";

const metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: { default: title, template: `%s | ${title}` },
  description,
  applicationName: "Sid A",
  authors: [{ name, url: WEBSITE_URL }],
  generator: "Next.js",
  referrer: "origin",
  creator: name,
  publisher: name,
  alternates: { canonical: WEBSITE_URL },
  openGraph: { type: "website", url: WEBSITE_URL, title, description },
  twitter: { card: "summary_large_image", site: "@shift4id", creator: "@shift4id", title, description },
  category: "personal",
} satisfies Metadata;

function Layout({ children }: React.PropsWithChildren): React.ReactNode {
  return (
    <html className="scroll-smooth antialiased" lang="en">
      <body
        className={cn(
          "bg-background text-foreground selection:bg-highlight mx-auto w-full max-w-3xl p-6 font-sans sm:pt-20",
          sans.variable,
        )}
      >
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export { metadata };
export default Layout;
