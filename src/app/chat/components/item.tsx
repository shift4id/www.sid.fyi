import { Link } from "@/components";
import type { Social } from "@/constants/socials";

function Item({ name, value }: Social): React.ReactNode {
  return (
    <Link external className="group flex items-center gap-2 overflow-hidden" href={`/socials/${name}`}>
      <p className="truncate text-sm">{name}</p>
      <hr className="min-w-8 grow border-subtle" />
      <p className="truncate text-xs text-muted transition group-hover:text-accent group-focus-visible:text-accent">
        {value}
      </p>
    </Link>
  );
}

export { Item };
