import type { Metadata } from "next";
import { Container } from "@/components";
import { Photos } from "./components/photos";

const metadata = {
  title: "Gallery",
  description: "Experience the world through my lens.",
} satisfies Metadata;

function Gallery(): React.ReactNode {
  return (
    <Container {...metadata}>
      <Photos />
    </Container>
  );
}

export { metadata };
export default Gallery;
