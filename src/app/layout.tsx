import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Syne as Font } from "next/font/google";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { clientEnv } from "@/constants/env";
import { colors } from "@/constants/theme";
import { cn } from "@/utils/cn";
import {
  fullName as name,
  siteDescription as description,
  siteName as title,
} from "@/utils/metadata";
import "@/styles/globals.css";

const { WEBSITE_URL } = clientEnv;

const font = Font({
  weight: "400",
  style: ["normal"],
  variable: "--font-syne",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: colors.background,
};

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: { default: title, template: `%s | ${title}` },
  description,
  applicationName: "Sid A",
  authors: [{ name, url: WEBSITE_URL }],
  generator: "Next.js",
  referrer: "origin",
  creator: name,
  publisher: name,
  openGraph: { type: "website", url: WEBSITE_URL, siteName: title, title, description },
  twitter: {
    card: "summary_large_image",
    site: "@shift4id",
    creator: "@shift4id",
    title,
    description,
  },
  category: "personal",
};

export default function Layout({ children }: React.PropsWithChildren): React.ReactNode {
  return (
    <html className={cn("scroll-smooth antialiased", font.variable)} lang="en">
      <body className="bg-background text-foreground selection:bg-highlight mx-auto w-full max-w-3xl p-6 sm:pt-20">
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
