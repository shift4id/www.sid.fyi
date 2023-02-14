import Link from "@/components/link";
import formatDate from "@/lib/format-date";
import { Essay } from "@/lib/notion";

type CardProps = {
  item: Essay;
};

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <Link className="transition duration-300 hover:text-pink-200" href={"/journal/" + item.slug}>
      <p className="font-mono text-xs text-gray-400">{formatDate(item.date)}</p>
      <p className="mt-2 mb-1">{item.title}</p>
      <p className="text-sm text-gray-300">{item.description}</p>
    </Link>
  );
};

export default Card;
