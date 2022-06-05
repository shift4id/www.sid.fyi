import { NextPage } from "next";
import Container from "@/components/container";
import Grid from "@/components/music/grid";
import { getGradient } from "@/lib/gradients";

const Music: NextPage = function () {
  return (
    <Container description="A few of my favorite songs!" title="Music">
      <section className="flex w-full grow flex-col justify-center py-10">
        <div className="flex flex-col justify-center space-y-4 md:h-full">
          <div className="font-serif text-4xl md:text-6xl">
            <p className={`bg-gradient-to-r bg-clip-text leading-normal text-transparent ${getGradient()}`}>
              <em>Music</em>
            </p>
          </div>
          <Grid title="Playlists" url={`/api/spotify/playlists`} />
          <Grid title="Top Songs" url={`/api/spotify/top`} />
        </div>
      </section>
    </Container>
  );
};

export default Music;
