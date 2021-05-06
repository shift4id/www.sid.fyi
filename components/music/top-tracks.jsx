import useSWR from "swr";

import Card from "@/components/music/card";
import fetcher from "@/lib/hooks/fetcher";

const TopTracks = () => {
  const { data } = useSWR("api/spotify/top", fetcher);

  return (
    <>
      {data?.map((song) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={song.title} {...song} />
      ))}
    </>
  );
};

export default TopTracks;
