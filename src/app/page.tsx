import type { Metadata } from "next";
import { Container } from "@/components";
import { Category, Hobby, Interest } from "./components";

const header: React.ComponentProps<typeof Container> = {
  title: "Siddharth Adusumelli",
  description: "is a software engineer who enjoys crafting unique user experiences.",
};

const interests: React.ComponentProps<typeof Interest>[] = [
  { title: "psychology", description: "behavior and social" },
  { title: "philosophy", description: "metaphysics and epistemology" },
  { title: "design", description: "architecture and product design" },
  { title: "art", description: "music and photography" },
];

const hobbies: React.ComponentProps<typeof Hobby>[] = [
  { title: "listening to music", href: "/jukebox" },
  { title: "taking pictures", href: "/gallery" },
  { title: "reading books", href: "/library" },
  { title: "having conversations", href: "/chat" },
];

const metadata = {
  title: "About",
  description: [header.title, header.description].join(" "),
} satisfies Metadata;

function Bio(): React.ReactNode {
  return (
    <Container {...header}>
      <div className="grid gap-8 sm:grid-cols-2">
        <Category Component={Interest} items={interests} title="My Interests" />
        <Category Component={Hobby} items={hobbies} title="My Hobbies" />
      </div>
    </Container>
  );
}

export { metadata };
export default Bio;
