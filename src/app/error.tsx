"use client";

import type { Metadata } from "next";
import { Container } from "@/components/container";

const containerProps = { title: "Error", description: "Something went wrong..." };
const metadata: Metadata = containerProps;

function Error(): React.ReactNode {
  return <Container {...containerProps} />;
}

export { metadata };
export default Error;
