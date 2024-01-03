import Link from "../link";
import type { Social } from "@/constants/socials";

const Item: React.FC<Social> = ({ name, value }) => (
  <Link external className="group flex items-center space-x-2 overflow-hidden" href={`/socials/${name}`}>
    <p className="text-sm transition">{name}</p>
    <hr className="min-w-8 grow border-lightGray" />
    <p className="text-gra truncate text-xs transition group-hover:text-pink">{value}</p>
  </Link>
);

export default Item;
