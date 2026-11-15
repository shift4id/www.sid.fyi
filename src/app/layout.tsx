import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { clientEnv } from "@/constants/env";
import { colors } from "@/constants/theme";
import { cn } from "@/utils/cn";
import {
  fullName as name,
  siteDescription as description,
  fullName as title,
} from "@/utils/metadata";
import "@/styles/globals.css";

const { WEBSITE_URL } = clientEnv;

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const body = EB_Garamond({
  variable: "--font-eb-garamond",
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const mono = IBM_Plex_Mono({ variable: "--font-plex-mono", weight: "400", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: colors.background },
    { media: "(prefers-color-scheme: dark)", color: colors.backgroundDark },
  ],
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
    <html
      data-scroll-behavior="smooth"
      className={cn("scroll-smooth antialiased", display.variable, body.variable, mono.variable)}
      lang="en"
    >
      <body className="bg-background text-foreground selection:bg-accent selection:text-background mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-4 font-sans text-lg sm:px-6">
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
