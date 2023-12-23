import Image from "next/image";
import { Book } from "@/lib/notion";

const Card: React.FC<Book> = ({ image, title, author }) => (
  <div className="flex space-x-4">
    <div className="relative h-24 w-16 shrink-0">{image && <Image fill alt="" sizes="4rem" src={image} />}</div>
    <div className="flex flex-col justify-center overflow-hidden">
      <p className="truncate text-sm">{title}</p>
      <p className="truncate text-xs text-gray-400">{author}</p>
    </div>
  </div>
);

export default Card;
