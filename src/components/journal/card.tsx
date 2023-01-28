import Link from "@/components/link";
import formatDate from "@/lib/format-date";
import { Essay } from "@/lib/notion";

type CardProps = {
  item: Essay;
};

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <Link className="transition duration-300 hover:text-pink-200" href={"/journal/" + item.slug}>
      <p className="mb-2 font-mono text-xs text-gray-500">{formatDate(item.date)}</p>
      <p>{item.title}</p>
      <p className="text-sm text-gray-400">{item.description}</p>
    </Link>
  );
};

export default Card;
