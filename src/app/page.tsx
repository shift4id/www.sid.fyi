import type { Metadata } from "next";
import { Container } from "@/components";
import { Category } from "./components/category";
import { Hobby } from "./components/hobby";
import { Interest } from "./components/interest";

const header: React.ComponentProps<typeof Container> = {
  title: "Siddharth Adusumelli",
  description: "is a software engineer who enjoys crafting beautiful and accessible user experiences.",
};

const interests: React.ComponentProps<typeof Interest>[] = [
  { title: "psychology", description: "behavior and social" },
  { title: "philosophy", description: "metaphysics and epistemology" },
  { title: "design", description: "architecture and product design" },
  { title: "media art", description: "photography and filmography" },
];

const hobbies: React.ComponentProps<typeof Hobby>[] = [
  { title: "listening to music", href: "/jukebox" },
  { title: "taking pictures", href: "/gallery" },
  { title: "reading books", href: "/library" },
  { title: "having conversations", href: "/chat" },
];

const containerProps = {
  title: "Sid A",
  description: `${header.title} ${header.description}`,
};
const metadata: Metadata = containerProps;

function Bio(): React.ReactNode {
  return (
    <Container {...header}>
      <div className="flex flex-col justify-start gap-8 gap-x-12 sm:flex-row">
        <Category Component={Interest} items={interests} title="My Interests" />
        <Category Component={Hobby} items={hobbies} title="My Hobbies" />
      </div>
    </Container>
  );
}

export { metadata };
export default Bio;
