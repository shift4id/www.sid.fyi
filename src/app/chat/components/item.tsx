import { Link } from "@/components";
import type socials from "@/constants/socials.json";

type Social = (typeof socials)[number];

function Item({ name, label, link }: Social): React.ReactNode {
  return (
    <Link className="group flex items-center gap-2 overflow-hidden text-sm" href={link} target="_blank">
      <p className="truncate">{name}</p>
      <hr className="min-w-8 grow border-subtle" />
      <p className="truncate text-muted transition group-hover:text-accent group-focus-visible:text-accent">
        {label}
      </p>
    </Link>
  );
}

export { Item };
