import Link from "../link";
import type { Social } from "@/constants/socials";

const Item: React.FC<Social> = ({ name, value }) => (
  <Link external className="group flex items-center gap-2 overflow-hidden" href={`/socials/${name}`}>
    <p className="truncate text-sm">{name}</p>
    <hr className="border-subtle min-w-8 grow" />
    <p className="text-muted group-hover:text-accent group-focus-visible:text-accent truncate text-xs transition">
      {value}
    </p>
  </Link>
);

export default Item;
