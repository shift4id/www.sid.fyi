import Image from "next/image";

type Photo = { w: number; h: number; id: number };

const PHOTOS_URL = "https://cdn.sid.fyi/photos";

const Card: React.FC<Photo> = ({ w, h, id }) => (
  <Image alt="" height={640 * (h / w)} sizes="640w" src={`${PHOTOS_URL}/${id}.jpeg`} width={640} />
);

export type { Photo };
export default Card;
