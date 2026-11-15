import type { Metadata } from "next";
import { Page } from "@/components/page";
import { Section } from "@/components/section";
import { fullName, pageMetadata, siteDescription, tagline } from "@/utils/metadata";
import { BusinessCard } from "./components/business-card";
import { Contents, type Glosses } from "./components/contents";

const interests = [
  { title: "Psychology", description: "behavior and social" },
  { title: "Philosophy", description: "metaphysics and epistemology" },
  { title: "Design", description: "architecture and product design" },
  { title: "Visual arts", description: "photography and cinematography" },
];

const glosses: Glosses = {
  "/": "a bit about me",
  "/jukebox": "what i'm listening to",
  "/gallery": "places i've been and things id've seen",
  "/library": "books that have influenced my thinking",
};

export const metadata: Metadata = pageMetadata({
  title: fullName,
  description: siteDescription,
  path: "/",
});

export default function Home(): React.ReactNode {
  return (
    <Page>
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-5xl sm:text-6xl">{fullName}</h1>
        <p className="text-muted font-display max-w-xl text-2xl leading-snug italic sm:text-3xl">
          {tagline}
        </p>
      </header>

      <Section title="Contents">
        <Contents glosses={glosses} />
      </Section>

      <Section title="Interests">
        <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {interests.map(({ title, description }) => (
            <div key={title}>
              <dt className="text-xl tracking-wide [font-variant:small-caps]">{title}</dt>
              <dd className="text-muted italic">{description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="contact" title="Contact">
        <BusinessCard />
      </Section>
    </Page>
  );
}
