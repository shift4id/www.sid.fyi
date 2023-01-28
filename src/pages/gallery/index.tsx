import { NextPage } from "next";
import Container, { Metadata } from "@/components/container";
import Photos from "@/components/gallery/photos";

const md: Metadata = { title: "Gallery", description: "Experience the world through my lens." };

const Gallery: NextPage = () => (
  <Container {...md}>
    <Photos />
  </Container>
);

export default Gallery;
