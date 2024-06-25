import Image from "next/image";
import { Book } from "@/lib/notion";

const Item: React.FC<Book> = ({ image, title, author }) => (
  <div className="flex gap-4">
    <div className="relative h-24 w-16 shrink-0">
      {image && <Image fill alt="" sizes="4rem" src={image} />}
    </div>
    <div className="flex flex-col justify-center gap-2 overflow-hidden">
      <p className="truncate text-sm">{title}</p>
      <hr className="w-8 border-lightGray" />
      <p className="truncate text-xs text-gray">{author}</p>
    </div>
  </div>
);

export default Item;
