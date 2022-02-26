import { NextApiHandler } from "next";
import { getTopSongs } from "@/lib/spotify";

const handler: NextApiHandler = async function (_req, res) {
  try {
    const topSongs = await getTopSongs();
    return res.status(200).json(topSongs);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default handler;
