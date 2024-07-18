"use client";

import type { Metadata } from "next";
import { Container } from "@/components";

const metadata = { title: "404", description: "You seem lost..." } satisfies Metadata;

function NotFound(): React.ReactNode {
  return <Container {...metadata} />;
}

export { metadata };
export default NotFound;
