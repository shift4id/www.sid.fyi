import type { Metadata } from "next";
import { Container } from "@/components/container";
import { pageMetadata, pages } from "@/utils/metadata";
import { Photos } from "./components/photos";

const containerProps = pages.gallery;

export const metadata: Metadata = pageMetadata({ ...containerProps, path: "/gallery" });

export default function Gallery(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Photos />
    </Container>
  );
}
