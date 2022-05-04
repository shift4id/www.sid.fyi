import { NextPage } from "next";
import Container from "@/components/container";
import TopSongs from "@/components/music/top-songs";
import { getGradient } from "@/lib/gradients";

const Music: NextPage = function () {
  return (
    <Container description="A few of my favorite songs!" title="Music">
      <section className="flex w-full grow flex-col justify-center py-10">
        <div className="flex flex-col justify-center space-y-4 md:h-full">
          <div className="space-y-2 font-serif text-4xl md:text-6xl">
            <p className={`bg-gradient-to-r bg-clip-text text-transparent ${getGradient()}`}>
              <em>Music</em>
            </p>
          </div>
          <TopSongs />
        </div>
      </section>
    </Container>
  );
};

export default Music;
