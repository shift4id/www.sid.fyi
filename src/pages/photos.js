import Image from "next/image";

import Layout from "@/components/layout";

const photos = [
  { w: 3168, h: 4752, url: 1 },
  { w: 3168, h: 4752, url: 2 },
  { w: 4293, h: 2862, url: 3 },
  { w: 4752, h: 3168, url: 4 },
  { w: 4752, h: 3168, url: 5 },
  { w: 4752, h: 3168, url: 6 },
  { w: 4752, h: 3168, url: 7 },
  { w: 4752, h: 3168, url: 8 },
  { w: 3168, h: 4752, url: 9 },
  { w: 4032, h: 3024, url: 10 },
  { w: 4752, h: 3168, url: 11 },
  { w: 4752, h: 3168, url: 12 },
  { w: 4752, h: 3168, url: 13 },
  { w: 4752, h: 3168, url: 14 },
  { w: 4752, h: 3168, url: 16 },
  { w: 3168, h: 4752, url: 15 },
  { w: 4752, h: 3168, url: 17 },
];

export default function Photos() {
  return (
    <Layout title="Photos" description="Here are a few of my favorite pictures that I've taken">
      {photos.map(({ w, h, url }) => (
        <div key={url} className="mt-6">
          <Image alt="" src={`https://cdn.sid.fyi/photos/${url}.jpeg`} width={640} height={640 * (h / w)} />
        </div>
      ))}
    </Layout>
  );
}
