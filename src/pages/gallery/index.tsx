import { NextPage } from "next";
import Container from "@/components/container";
import Photos from "@/components/gallery/photos";
import Heading from "@/components/heading";

const Gallery: NextPage = function () {
  const md = {
    title: "Gallery",
    description: "Experience the world through my lens.",
  };

  return (
    <Container {...md}>
      <Heading {...md} />
      <Photos />
    </Container>
  );
};

export default Gallery;
