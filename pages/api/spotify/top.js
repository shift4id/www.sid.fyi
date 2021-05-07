import redis from "@/lib/redis";
import { getTopSongs } from "@/lib/spotify";

const handler = async (_, res) => {
  const storedTopSongs = JSON.parse(await redis.get("top_songs"));

  if (storedTopSongs) return res.status(200).json(storedTopSongs);

  const response = await getTopSongs();
  const { items } = await response.json();

  const topSongs = items.slice(0, 10).map((item) => ({
    artists: item.artists.map((artist) => artist.name).join(", "),
    image: item.album.images[0].url,
    title: item.name,
    url: item.external_urls.spotify,
  }));

  await redis.set("top_songs", JSON.stringify(topSongs), "EX", 24 * 60 * 60);

  return res.status(200).json(topSongs);
};

export default handler;
