import { NextPage } from "next";
import Item from "@/components/chat/item";
import Container, { Metadata } from "@/components/container";
import Grid from "@/components/grid";
import socials from "@/constants/socials";

const md: Metadata = { title: "Chat", description: "Let's have a conversation." };

const Gallery: NextPage = () => (
  <Container {...md}>
    <Grid Of={Item} items={socials} />
  </Container>
);

export default Gallery;
