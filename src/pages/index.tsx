import { NextPage } from "next";
import Container from "@/components/container";
import CurrentlyPlaying from "@/components/home/currently-playing";
import PrettyLink from "@/components/pretty-link";
import { getGradient } from "@/lib/gradients";

const Home: NextPage = function () {
  const age = new Date(new Date().getTime() - new Date("October 6, 2003").getTime()).getFullYear() - 1970;

  return (
    <Container description="A bit about me!" title="Home">
      <section className="flex w-full grow flex-col justify-center py-10">
        <div className="flex flex-col justify-center space-y-4 md:h-full">
          <div className="space-y-2 font-serif text-4xl md:text-6xl">
            <p>Hello I&apos;m</p>
            <p className={`bg-gradient-to-r bg-clip-text leading-normal text-transparent ${getGradient()}`}>
              <em>Sid Adusumelli</em>
            </p>
          </div>
          <p className="text-lg md:text-2xl">
            I&apos;m, an {age} year old software engineer from <em>Silicon Valley, California</em>. I enjoy creating{" "}
            <em>unique</em> and <em>elegant</em> user experiences. My passions are{" "}
            <PrettyLink href="/music">music</PrettyLink> and <PrettyLink href="/photography">photography</PrettyLink>.
          </p>
          <CurrentlyPlaying />
        </div>
      </section>
    </Container>
  );
};

export default Home;
