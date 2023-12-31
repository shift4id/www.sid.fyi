import Image from "next/image";

const PHOTOS_URL = "https://cdn.sid.fyi/photos";

type Photo = { w: number; h: number; id: number };

const Item: React.FC<Photo> = ({ w, h, id }) => (
  <Image alt="" height={640 * (h / w)} sizes="640w" src={`${PHOTOS_URL}/${id}.jpeg`} width={640} />
);

export type { Photo };
export default Item;
