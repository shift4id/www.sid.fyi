import { NextPage } from "next";
import Container from "@/components/container";
import TopPhotos from "@/components/photography/top-photos";
import { getGradient } from "@/lib/gradients";

const Photography: NextPage = function () {
  return (
    <Container description="A few of my favorite pictures!" title="Photography">
      <section className="flex w-full grow flex-col justify-center py-10">
        <div className="flex flex-col justify-center space-y-4 md:h-full">
          <div className="space-y-2 font-serif text-4xl md:text-6xl">
            <p className={`bg-gradient-to-r bg-clip-text leading-normal text-transparent ${getGradient()}`}>
              <em>Photography</em>
            </p>
          </div>
          <TopPhotos />
        </div>
      </section>
    </Container>
  );
};

export default Photography;
