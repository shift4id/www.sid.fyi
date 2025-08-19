import type { Metadata } from "next";
import { Container } from "@/components/container";

const containerProps = { title: "404", description: "You seem lost..." };
const metadata: Metadata = containerProps;

function NotFound(): React.ReactNode {
  return <Container {...containerProps} />;
}

export { metadata };
export default NotFound;
