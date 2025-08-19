import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Photos } from "./components/photos";

const containerProps = {
  title: "Gallery",
  description: "Experience the world through my lens.",
};
const metadata: Metadata = containerProps;

function Gallery(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Photos />
    </Container>
  );
}

export { metadata };
export default Gallery;
