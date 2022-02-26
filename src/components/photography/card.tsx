import Image from "next/image";

type Photo = {
  w: number;
  h: number;
  id: number;
};

type CardProps = { photo: Photo };

const Card: React.FC<CardProps> = function ({ photo }) {
  return (
    <Image alt="" height={640 * (photo.h / photo.w)} src={`https://cdn.sid.fyi/photos/${photo.id}.jpeg`} width={640} />
  );
};

export type { Photo };
export default Card;
