import { NextApiHandler } from "next";
import { getCurrentlyPlaying } from "@/lib/spotify";

const handler: NextApiHandler = async function (_req, res) {
  try {
    const currentlyPlaying = await getCurrentlyPlaying();
    return res.status(200).json(currentlyPlaying);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default handler;
