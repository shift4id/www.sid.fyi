import { NextPage } from "next";
import { getGradient } from "@/lib/gradients";
import Container from "./container";
import Link from "./link";

type ErrorProps = { statusCode: number };

const Error: NextPage<ErrorProps> = function ({ statusCode }) {
  const gradient = getGradient();

  return (
    <Container description="You seem lost." title="404">
      <section className="flex grow flex-col items-start justify-center space-y-8">
        <p className="font-serif text-6xl leading-normal md:text-9xl">
          {statusCode ? (
            <>
              Error: <em className={`bg-gradient-to-r bg-clip-text text-transparent ${gradient}`}>{statusCode}</em>
            </>
          ) : (
            "Client Error"
          )}
        </p>
        <p className="md:text-xl">Not sure how you managed to get lost, but here&apos;s a link to take you home.</p>
        <div className="rounded-sm bg-white !bg-opacity-10 p-2 px-4">
          <Link
            className={`bg-gradient-to-r bg-[length:150%] bg-clip-text font-serif text-4xl text-transparent transition-all duration-500 hover:bg-right ${gradient}`}
            href="/"
          >
            Return Home
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Error;
