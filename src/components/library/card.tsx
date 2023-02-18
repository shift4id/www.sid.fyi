import Image from "next/image";
import { Book } from "@/lib/notion";

type CardProps = {
  item: Book;
};

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <div className="flex space-x-4">
      <div className="relative h-24 w-16 shrink-0">
        {item.image && <Image fill alt="" sizes="4rem" src={item.image} />}
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        <p className="truncate text-sm">{item.title}</p>
        <p className="truncate text-xs text-gray-300">{item.author}</p>
      </div>
    </div>
  );
};

export default Card;
