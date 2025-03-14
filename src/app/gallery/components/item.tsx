import { clientEnv } from "@/constants/env";
import Image from "next/image";

const PHOTOS_URL = `${clientEnv.CDN_URL}/photos`;

interface ItemProps {
  w: number;
  h: number;
  id: number;
}

function Item(props: ItemProps): React.ReactNode {
  const { id, w, h } = props;

  return (
    <Image alt="" height={640 * (h / w)} sizes="640w" src={`${PHOTOS_URL}/${String(id)}.jpeg`} width={640} />
  );
}

export { Item };
