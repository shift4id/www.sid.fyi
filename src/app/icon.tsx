import type { ImageResponse } from "next/og";
import { renderMonogram } from "@/utils/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon(): Promise<ImageResponse> {
  return renderMonogram({ ...size, fontSize: 240 });
}
