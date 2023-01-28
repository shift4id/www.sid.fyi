import { NextPage } from "next";
import PrettyLink from "@/components/pretty-link";
import Container, { Metadata } from "./container";

type ErrorProps = { statusCode: number };

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  const md: Metadata = {
    title: statusCode ? `Error: ${statusCode}` : "Client Error",
    description: "You seem lost, here's a link to get you back on track.",
  };

  return (
    <Container {...md}>
      <div>
        <PrettyLink href="/">&larr; Return home</PrettyLink>
      </div>
    </Container>
  );
};

export default Error;
