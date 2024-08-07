import { Link } from "@/components";

interface HobbyProps {
  title: string;
  href: string;
}

function Hobby({ title, href }: HobbyProps): React.ReactNode {
  return (
    <Link className="group flex items-center py-1" href={href}>
      <div className="mr-4 select-none text-muted transition group-hover:translate-x-1 group-hover:text-accent group-focus-visible:translate-x-1 group-focus-visible:text-accent">
        &rarr;
      </div>
      {title}
    </Link>
  );
}

export { Hobby };
