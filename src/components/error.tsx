import { NextPage } from "next";
import Heading from "@/components/heading";
import PrettyLink from "@/components/pretty-link";
import Container from "./container";

type ErrorProps = { statusCode: number };

const Error: NextPage<ErrorProps> = function ({ statusCode }) {
  const md = { title: "404", description: "You seem lost." };

  return (
    <Container {...md}>
      <Heading
        description="You seem lost, here's a link to get you back on track."
        title={statusCode ? `Error: ${statusCode}` : "Client Error"}
      />
      <div>
        <PrettyLink href="/">&larr; Return home</PrettyLink>
      </div>
    </Container>
  );
};

export default Error;
