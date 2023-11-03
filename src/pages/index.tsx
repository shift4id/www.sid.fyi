import { NextPage } from "next";
import Container from "@/components/container";
import Heading from "@/components/heading";
import PrettyLink from "@/components/pretty-link";

type Link = {
  text: string;
  href: string;
};

const links: Link[] = [
  { text: "listening to music", href: "/jukebox" },
  { text: "taking pictures", href: "/gallery" },
  { text: "reading books", href: "/library" },
];

const Home: NextPage = function () {
  const age = new Date(Date.now() - new Date("2003-10-06").getTime()).getFullYear() - 1970;

  const md = { title: "Home", description: "code + design" };

  return (
    <Container {...md}>
      <Heading {...md} title="Hey, I'm Sid!" />
      <p>
        I&apos;m a {age} year old software engineer from <strong>Silicon Valley, California</strong>. I currently study
        Computer Science at San José State University.
      </p>
      <p>
        I am very interested in <strong>psychology</strong> (behavioral + social), <strong>philosophy</strong>{" "}
        (metaphysics + epistemology), and <strong>design</strong> (architecture + product design). I aim to create
        aesthetically pleasing and functional products drawing from these fields. I am also interested in{" "}
        <strong>art</strong> (photography + music) because of its ability to express complex emotions and ideas.
      </p>
      <div>
        <p>In my free time, you can find me</p>
        <ul className="mt-4 list-inside list-disc space-y-1">
          {links.map(({ text, href }) => (
            <li key={href}>
              <PrettyLink href={href}>{text}</PrettyLink>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Home;
