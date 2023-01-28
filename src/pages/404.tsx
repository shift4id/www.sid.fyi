import { NextPage } from "next";
import Error from "@/components/error";

const FourOhFour: NextPage = () => <Error statusCode={404} />;

export default FourOhFour;
