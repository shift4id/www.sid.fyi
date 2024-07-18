import { Link } from "@/components";

interface HobbyProps {
  title: string;
  href: string;
}

function Hobby({ title, href }: HobbyProps): React.ReactNode {
  return (
    <Link className="group flex items-center py-1" href={href}>
      {title}
      <div className="ml-4 text-muted transition group-hover:-translate-x-2 group-focus-visible:-translate-x-2">
        &larr;
      </div>
    </Link>
  );
}

export { Hobby };
