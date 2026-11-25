import Image from "next/image";
import { Rail } from "@/components/rail";
import { clientEnv } from "@/constants/env";
import type { Photo } from "@/constants/photos";
import styles from "./film-strip.module.css";

const PHOTOS_URL = `${clientEnv.CDN_URL}/photos`;

/** Unexposed frames at the end of the roll. */
const LEADER = 2;

interface FilmStripProps {
  photos: Photo[];
}

function EdgeNumber({ n }: { n: number }): React.ReactNode {
  return (
    <figcaption aria-hidden className={styles.edge}>
      {n} <span className={styles.arrow}>▸</span> {n}A
    </figcaption>
  );
}

/**
 * The gallery as one continuous strip of negatives that scrolls sideways. Frames keep their
 * photo's proportions at a fixed height, each numbered along the film edge like a real roll.
 */
export function FilmStrip({ photos }: FilmStripProps): React.ReactNode {
  return (
    <Rail className={styles.film} label="Photos">
      {photos.map((photo, i) => (
        <figure key={photo.id} className={styles.frame}>
          <div className={styles.image} style={{ aspectRatio: photo.w / photo.h }}>
            <Image
              fill
              alt=""
              className="object-cover"
              sizes="320px"
              src={`${PHOTOS_URL}/${String(photo.id)}.jpeg`}
            />
          </div>
          <EdgeNumber n={i + 1} />
        </figure>
      ))}
      {Array.from({ length: LEADER }, (_, i) => (
        <figure key={`blank-${String(i)}`} aria-hidden className={styles.frame}>
          <div className={`${styles.image} ${styles.blank}`} />
          <EdgeNumber n={photos.length + i + 1} />
        </figure>
      ))}
    </Rail>
  );
}
