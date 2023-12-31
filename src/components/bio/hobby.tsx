import Link from "../link";

type Hobby = { title: string; href: string };

const Hobby: React.FC<Hobby> = ({ title, href }) => (
  <Link className="group flex items-center py-1" href={href}>
    {title} <div className="translate-x-2 transition group-hover:translate-x-4">&rarr;</div>
  </Link>
);

export type { Hobby };
export default Hobby;
