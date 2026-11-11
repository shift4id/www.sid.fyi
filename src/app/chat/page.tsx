import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Grid } from "@/components/grid";
import socials from "@/constants/socials.json";
import { pageMetadata, pages } from "@/utils/metadata";
import { Item } from "./components/item";

const containerProps = pages.chat;

export const metadata: Metadata = pageMetadata({ ...containerProps, path: "/chat" });

export default function Chat(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Grid Of={Item} items={socials} />
    </Container>
  );
}
