import { NextApiHandler } from "next";
import { getPlaylists } from "@/lib/spotify";

const handler: NextApiHandler = async function (_req, res) {
  try {
    const playlists = await getPlaylists();
    return res.status(200).json(playlists);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default handler;
