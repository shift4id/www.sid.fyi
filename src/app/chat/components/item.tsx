import type socials from "@/constants/socials.json";
import { Link } from "@/components/link";

type Social = (typeof socials)[number];

function Item({ name, label, link }: Social): React.ReactNode {
  return (
    <Link className="group flex items-center gap-2 text-sm" href={link} target="_blank">
      <p className="truncate">{name}</p>
      <hr className="border-subtle min-w-8 grow" />
      <p className="text-muted group-hover:text-accent group-focus-visible:text-accent shrink-0 transition">
        {label}
      </p>
    </Link>
  );
}

export { Item };
