import redis from "@/lib/redis";
import { getCurrentlyPlaying } from "@/lib/spotify";

export default async function handler(_, res) {
  try {
    const storedSong = JSON.parse(await redis.get("song"));

    if (storedSong) return res.status(200).json(storedSong);

    const response = await getCurrentlyPlaying();

    if (response.status === 204 || response.status > 400) {
      const song = { isPlaying: false };
      await redis.set("song", JSON.stringify(song), "EX", 60);
      return res.status(200).json({ isPlaying: false });
    }

    const { item, is_playing: isPlaying } = await response.json();

    const song = {
      isPlaying,
      artist: item.artists.map(({ name }) => name).join(", "),
      image: item.album.images[0].url,
      title: item.name,
      url: item.external_urls.spotify,
    };

    await redis.set("song", JSON.stringify(song), "EX", 60);
    return res.status(200).json(song);
  } catch (err) {
    return res.status(500).json(err);
  }
}
