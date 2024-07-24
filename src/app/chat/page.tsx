import type { Metadata } from "next";
import { Container, Grid } from "@/components";
import { socials } from "@/constants/socials";
import { Item } from "./components";

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
