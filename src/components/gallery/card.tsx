import Image from "next/image";

type Photo = { w: number; h: number; id: number };

const Card: React.FC<Photo> = function ({ w, h, id }) {
  return <Image alt="" height={640 * (h / w)} sizes="640w" src={`https://cdn.sid.fyi/photos/${id}.jpeg`} width={640} />;
};

export default Card;
