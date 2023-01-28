import { NextPage } from "next";
import Container from "@/components/container";
import Heading from "@/components/heading";
import PrettyLink from "@/components/pretty-link";

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
        My areas of interest include the fields of: <em>psychology</em>, <em>philosophy</em>, <em>architecture</em>, and{" "}
        <em>product design</em>. Drawing from all of these fields, I aim to create products that are not only
        functional, but also <em>unique</em> and <em>elegant</em>. I believe that good design should be intuitive,
        visually pleasing, and accessible to all users.
      </p>
      <div>
        <p>In my free time, you can find me</p>
        <ul className="list-inside list-disc">
          <li>
            <PrettyLink href={"/jukebox"}>listening to music</PrettyLink>
          </li>
          <li>
            <PrettyLink href={"/journal"}>writing essays</PrettyLink>
          </li>
          <li>
            <PrettyLink href={"/gallery"}>taking photos</PrettyLink>
          </li>
          <li>
            <PrettyLink href={"/library"}>reading books</PrettyLink>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Home;
