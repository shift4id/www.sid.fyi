import { getPlaylists, getTopSongs } from "@/lib/spotify";

const getStaticProps = async () => ({
  props: { playlists: await getPlaylists(true), songs: await getTopSongs() },
  revalidate: 60 * 60,
});

export { getStaticProps };
export { default } from ".";
