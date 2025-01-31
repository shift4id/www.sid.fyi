import type { Metadata } from "next";
import { Container, Grid } from "@/components";
import socials from "@/constants/socials.json";
import { Item } from "./components/item";

const metadata = { title: "Chat", description: "Let's have a conversation." } satisfies Metadata;

function Chat(): React.ReactNode {
  return (
    <Container {...metadata}>
      <Grid Of={Item} items={socials} />
    </Container>
  );
}

export { metadata };
export default Chat;
