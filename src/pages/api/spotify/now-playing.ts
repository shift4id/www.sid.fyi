import { NextApiHandler } from "next";
import { getNowPlaying } from "@/lib/spotify";

const handler: NextApiHandler = async function (_req, res) {
  try {
    const nowPlaying = await getNowPlaying();
    res.status(200).json(nowPlaying); return;
  } catch (err) {
    res.status(500).json(err); return;
  }
};

export default handler;
