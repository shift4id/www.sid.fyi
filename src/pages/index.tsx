import { NextPage } from "next";
import Category from "@/components/bio/category";
import Hobby from "@/components/bio/hobby";
import Interest from "@/components/bio/interest";
import Container, { Metadata } from "@/components/container";

const hobbies: Hobby[] = [
  { title: "listening to music", href: "/jukebox" },
  { title: "taking pictures", href: "/gallery" },
  { title: "reading books", href: "/library" },
  { title: "having conversations", href: "/contact" },
];

const interests: Interest[] = [
  { title: "psychology", description: "behavior and social" },
  { title: "philosophy", description: "metaphysics and epistemology" },
  { title: "design", description: "architecture and product design" },
  { title: "art", description: "music and photography" },
];

const header: Metadata = {
  title: "Siddharth Adusumelli",
  description: "is a software engineer who enjoys crafting unique user experiences.",
};

const md: Metadata = { title: "Bio", description: `${header.title} ${header.description}` };

const Bio: NextPage = () => (
  <Container {...header} md={md}>
    <div className="grid gap-8 sm:grid-cols-2">
      <Category Component={Interest} items={interests} title="My Interests" />
      <Category Component={Hobby} items={hobbies} title="My Hobbies" />
    </div>
  </Container>
);

export default Bio;
