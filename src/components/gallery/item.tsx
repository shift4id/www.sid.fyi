import Image from "next/image";

const PHOTOS_URL = `${process.env.NEXT_PUBLIC_CDN_URL}/photos`;

interface Photo {
  w: number;
  h: number;
  id: number;
}

const Item: React.FC<Photo> = ({ w, h, id }) => (
  <Image alt="" height={640 * (h / w)} sizes="640w" src={`${PHOTOS_URL}/${String(id)}.jpeg`} width={640} />
);

export type { Photo };
export default Item;
