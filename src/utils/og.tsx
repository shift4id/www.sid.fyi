import { ImageResponse } from "next/og";
import { colors } from "@/constants/theme";

const monogram = "SA";

async function loadFont(text: string): Promise<ArrayBuffer | undefined> {
  try {
    const params = new URLSearchParams({ family: "Syne:wght@400", text });
    const css = await fetch(`https://fonts.googleapis.com/css2?${params.toString()}`).then((r) =>
      r.text(),
    );
    const url = /src: url\((.+?)\) format\('(?:truetype|opentype)'\)/.exec(css)?.[1];
    if (!url) return undefined;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return undefined;
  }
}

interface MonogramOptions {
  width: number;
  height: number;
  fontSize: number;
  path?: string;
}

export async function renderMonogram({
  width,
  height,
  fontSize,
  path,
}: MonogramOptions): Promise<ImageResponse> {
  const font = await loadFont(`${monogram}${path ?? ""}`);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: fontSize * 0.15,
        width: "100%",
        height: "100%",
        background: colors.background,
        color: colors.foreground,
        fontFamily: font ? "Syne" : undefined,
        fontSize,
        lineHeight: 1,
      }}
    >
      <div style={{ display: "flex" }}>{monogram}</div>
      {path ? (
        <div style={{ display: "flex", fontSize: fontSize * 0.25, color: colors.muted }}>
          {path}
        </div>
      ) : null}
    </div>,
    {
      width,
      height,
      fonts: font ? [{ name: "Syne", data: font, weight: 400, style: "normal" }] : undefined,
    },
  );
}
