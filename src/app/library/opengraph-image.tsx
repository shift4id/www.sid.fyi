import type { ImageResponse } from "next/og";
import { fullName } from "@/utils/metadata";
import { renderMonogram } from "@/utils/og";

export const alt = `${fullName}: /library`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage(): Promise<ImageResponse> {
  return renderMonogram({ ...size, fontSize: 240, path: "/library" });
}
