import { Link } from "@/components/link";

interface HobbyProps {
  title: string;
  href: string;
}

function Hobby({ title, href }: HobbyProps): React.ReactNode {
  return (
    <Link className="group flex items-center gap-4 py-1" href={href}>
      <div className="text-muted group-hover:text-accent group-focus-visible:text-accent transition select-none group-hover:translate-x-1 group-focus-visible:translate-x-1">
        &rarr;
      </div>
      {title}
    </Link>
  );
}

export { Hobby };
