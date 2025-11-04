import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export async function GET(): Promise<NextResponse> {
  try {
    const nowPlaying = await getNowPlaying();

    return NextResponse.json(nowPlaying ?? null, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
