import Image from "next/image";

import Layout from "@/components/layout";
import photos from "@/data/photos";

const Photos = () => {
  return (
    <Layout title="Photos" description="Here are a few of my favorite pictures that I've taken">
      {photos.map(({ w, h, url }) => (
        <div key={url} className="mt-6">
          <Image alt="" src={`/photos/${url}.png`} width={640} height={640 * (h / w)} />
        </div>
      ))}
    </Layout>
  );
};

export default Photos;
