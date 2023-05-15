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
  const age = new Date(new Date().getTime() - new Date("October 6, 2003").getTime()).getFullYear() - 1970;

  const md = { title: "Home", description: "Hey I'm Sid!" };

  return (
    <Container {...md}>
      <Heading description="code + design" title="Hey, I'm Sid!" />
      <p>
        I&apos;m, a {age} year old software engineer from <em>Silicon Valley, California</em>. I currently study
        Computer Science at San José State University.
      </p>
      <p>
        I am very interested in <em>psychology</em> (behavioral + social), <em>philosophy</em> (metaphysics +
        epistemology), and <em>design</em> (architecture + product design). I aim to create aesthetically pleasing and
        functional products drawing from these fields. I am also interested in <em>art</em> (photography + music)
        because of its ability to express complex emotions and ideas.
      </p>
      <div>
        <p>In my free time, you can find me</p>
        <ul className="mt-2 list-inside list-disc space-y-1.5">
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
