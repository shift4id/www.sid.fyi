import Error from "@/components/error";

export default Error;

Error.getInitialProps = function ({ res, err }) {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 };
};
