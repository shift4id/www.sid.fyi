import { Item } from "./item";

const photos: React.ComponentProps<typeof Item>[] = [
  { w: 3168, h: 4752, id: 1 },
  { w: 3168, h: 4752, id: 2 },
  { w: 4293, h: 2862, id: 3 },
  { w: 4752, h: 3168, id: 4 },
  { w: 4752, h: 3168, id: 5 },
  { w: 4752, h: 3168, id: 6 },
  { w: 4752, h: 3168, id: 7 },
  { w: 4752, h: 3168, id: 8 },
  { w: 4752, h: 3168, id: 9 },
  { w: 4032, h: 3024, id: 10 },
  { w: 4752, h: 3168, id: 11 },
  { w: 4752, h: 3168, id: 12 },
  { w: 4752, h: 3168, id: 13 },
  { w: 4752, h: 3168, id: 14 },
  { w: 4752, h: 3168, id: 15 },
  { w: 3168, h: 4752, id: 16 },
  { w: 4032, h: 3024, id: 17 },
  { w: 4752, h: 3168, id: 18 },
  { w: 4752, h: 3168, id: 19 },
];

function Photos(): React.ReactNode {
  return (
    <div className="gap-8 space-y-8 sm:columns-2">
      {photos.map((photo) => (
        <Item key={photo.id} {...photo} />
      ))}
    </div>
  );
}

export { Photos };
