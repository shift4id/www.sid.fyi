"use client";

import type { Metadata } from "next";
import { Container } from "@/components/container";

const containerProps = {
  title: "Error",
  description: "Something went wrong...",
};

export const metadata: Metadata = containerProps;

export default function ErrorPage(): React.ReactNode {
  return <Container {...containerProps} />;
}
