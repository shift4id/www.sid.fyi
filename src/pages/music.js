import Layout from "@/components/layout";
import TopTracks from "@/components/music/top-tracks";

export default function Music() {
  return (
    <Layout title="Music" description="Here are a few songs that I've had on repeat!">
      <TopTracks />
    </Layout>
  );
}
