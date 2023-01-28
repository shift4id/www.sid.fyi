import Image from "next/image";
import { Book } from "@/lib/notion";

type CardProps = {
  item: Book;
};

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <div className="flex w-full">
      <div className="relative h-24 w-16 shrink-0">{item.image && <Image fill alt="" src={item.image} />}</div>
      <div className="ml-2 flex w-full flex-col justify-center overflow-hidden py-1 px-2">
        <p className="truncate text-sm">{item.title}</p>
        <p className="truncate text-xs text-gray-400">{item.author}</p>
      </div>
    </div>
  );
};

export default Card;
