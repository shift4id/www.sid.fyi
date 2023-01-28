import { NextPage } from "next";
import Container, { Metadata } from "@/components/container";
import PrettyLink from "@/components/pretty-link";

type Hobby = { text: string; href: string };

const hobbies: Hobby[] = [
  { text: "listening to music", href: "/jukebox" },
  { text: "taking pictures", href: "/gallery" },
  { text: "reading books", href: "/library" },
];

type Interest = { title: string; description: string };

const interests: Interest[] = [
  { title: "psychology", description: "behavior and social" },
  { title: "philosophy", description: "metaphysics and epistemology" },
  { title: "design", description: "architecture and product design" },
  { title: "art", description: "music and photography" },
];

const md: Metadata = { title: "About", description: "Here's a little bit about me." };

const About: NextPage = () => {
  const age = new Date(Date.now() - new Date("2003-10-06").getTime()).getFullYear() - 1970;

  return (
    <Container {...md}>
      <p>
        Hey I&apos;m&nbsp;
        <strong>
          <span className="text-primary-200">Sid</span>dharth Adusumelli
        </strong>
        !
      </p>
      <p>
        I&apos;m a {age} year old software engineer from <strong>Silicon Valley, California</strong>. I currently study
        Computer Science at San José State University.
      </p>
      <div className="space-y-2">
        <p>I am very interested in </p>
        <ul className="mt-4 list-inside list-disc space-y-1.5">
          {interests.map(({ title, description }) => (
            <li key={title}>
              <strong>{title}</strong> ({description})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>In my free time, you can find me</p>
        <ul className="mt-4 list-inside list-disc space-y-1.5">
          {hobbies.map(({ text, href }) => (
            <li key={href}>
              <PrettyLink href={href}>{text}</PrettyLink>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default About;
