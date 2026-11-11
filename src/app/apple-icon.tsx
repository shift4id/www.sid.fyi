import type { ImageResponse } from "next/og";
import { renderMonogram } from "@/utils/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon(): Promise<ImageResponse> {
  return renderMonogram({ ...size, fontSize: 84 });
}
