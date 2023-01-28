import { NextApiHandler } from "next";
import { getNowPlaying } from "@/lib/spotify";

const handler: NextApiHandler = async function (_req, res) {
  try {
    const nowPlaying = await getNowPlaying();
    return res.status(200).json(nowPlaying);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default handler;
