import type { Metadata } from "next";
import { Container } from "@/components/container";

const containerProps = { title: "404", description: "You seem lost..." };

export const metadata: Metadata = containerProps;

export default function NotFound(): React.ReactNode {
  return <Container {...containerProps} />;
}
