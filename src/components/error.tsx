import { NextPage } from "next";
import Container, { Metadata } from "./container";

type ErrorProps = { statusCode: number };

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  const md: Metadata = {
    title: statusCode ? `Error: ${String(statusCode)}` : "Client Error",
    description: "You seem lost, use the navbar to get back on track.",
  };

  return <Container {...md} />;
};

export default Error;
