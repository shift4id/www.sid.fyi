import Error from "@/components/error";

Error.getInitialProps = function ({ res, err }) {
  return { statusCode: res?.statusCode ?? err?.statusCode ?? 404 };
};

export default Error;
