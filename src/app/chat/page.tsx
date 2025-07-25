import type { Metadata } from "next";
import { Container, Grid } from "@/components";
import socials from "@/constants/socials.json";
import { Item } from "./components/item";

const containerProps = { title: "Chat", description: "Let's have a conversation." };
const metadata: Metadata = containerProps;

function Chat(): React.ReactNode {
  return (
    <Container {...containerProps}>
      <Grid Of={Item} items={socials} />
    </Container>
  );
}

export { metadata };
export default Chat;
