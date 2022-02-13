import redis from "@/lib/redis";
import { getTopSongs } from "@/lib/spotify";

export default async function handler(_, res) {
  try {
    const storedTopSongs = JSON.parse(await redis.get("top_songs"));

    if (storedTopSongs) return res.status(200).json(storedTopSongs);

    const { items } = await getTopSongs().then((r) => r.json());

    const topSongs = items.slice(0, 10).map((item) => ({
      artist: item.artists.map(({ name }) => name).join(", "),
      image: item.album.images[0].url,
      title: item.name,
      url: item.external_urls.spotify,
    }));

    await redis.set("top_songs", JSON.stringify(topSongs), "EX", 24 * 60 * 60);

    return res.status(200).json(topSongs);
  } catch (err) {
    return res.status(500).json(err);
  }
}
