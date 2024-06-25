import Link from "../link";

interface Hobby {
  title: string;
  href: string;
}

const Hobby: React.FC<Hobby> = ({ title, href }) => (
  <Link className="group flex items-center py-1" href={href}>
    {title}
    <div className="ml-4 transition group-hover:-translate-x-2">&larr;</div>
  </Link>
);

export default Hobby;
