import Image from "next/image";
import { clientEnv } from "@/constants/env";

const PHOTOS_URL = `${clientEnv.CDN_URL}/photos`;

interface ItemProps {
  w: number;
  h: number;
  id: number;
}

export function Item(props: ItemProps): React.ReactNode {
  const { id, w, h } = props;

  return (
    <Image alt="" height={640 * (h / w)} src={`${PHOTOS_URL}/${String(id)}.jpeg`} width={640} />
  );
}
