import { NextPage } from "next";
import Container, { Metadata } from "@/components/container";
import Photos from "@/components/gallery/photos";
import Heading from "@/components/heading";

const md: Metadata = { title: "Gallery", description: "Experience the world through my lens." };

const Gallery: NextPage = function () {
  return (
    <Container {...md}>
      <Heading {...md} />
      <Photos />
    </Container>
  );
};

export default Gallery;
