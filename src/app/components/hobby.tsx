import { Link } from "@/components";

interface HobbyProps {
  title: string;
  href: string;
}

function Hobby({ title, href }: HobbyProps): React.ReactNode {
  return (
    <Link className="group flex items-center py-1" href={href}>
      <div className="mr-4 select-none text-muted transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1">
        &rarr;
      </div>
      {title}
    </Link>
  );
}

export { Hobby };
