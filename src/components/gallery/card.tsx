import Image from "next/image";

type Photo = {
  w: number;
  h: number;
  id: number;
};

type CardProps = { item: Photo };

const Card: React.FC<CardProps> = function ({ item }) {
  return (
    <Image
      alt=""
      height={640 * (item.h / item.w)}
      sizes="640w"
      src={`https://cdn.sid.fyi/photos/${item.id}.jpeg`}
      width={640}
    />
  );
};

export type { Photo };
export default Card;
