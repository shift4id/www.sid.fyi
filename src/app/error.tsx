"use client";

import type { Metadata } from "next";
import { Container } from "@/components";

const metadata = { title: "Error", description: "Something went wrong..." } satisfies Metadata;

function Error(): React.ReactNode {
  return <Container {...metadata} />;
}

export { metadata };
export default Error;
