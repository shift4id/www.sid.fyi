import Card from "./card";
import useAPI from "@/lib/hooks/useAPI";

export default function TopTracks() {
  const { data } = useAPI("/api/spotify/top");

  return (
    <>
      {data?.map((song) => (
        <Card key={song.title} {...song} />
      ))}
    </>
  );
}
