import Image from "next/image";
import { clientEnv } from "@/constants/env";
import type { Photo } from "@/constants/photos";
import styles from "./contact-sheet.module.css";

const PHOTOS_URL = `${clientEnv.CDN_URL}/photos`;
const FRAMES_PER_STRIP = 3;

/** Width-to-height ratio of a frame; unexposed frames are a standard 3:2 negative. */
function ratioOf(photo: Photo | null): number {
  return photo ? photo.w / photo.h : 3 / 2;
}

interface ContactSheetProps {
  photos: Photo[];
}

/**
 * The gallery as a photographer's contact sheet: the roll cut into strips of negatives,
 * each frame numbered along the film edge. Frames keep their photo's proportions, so every
 * frame in a strip shares one height; a short last strip is filled with unexposed frames.
 */
export function ContactSheet({ photos }: ContactSheetProps): React.ReactNode {
  const strips: (Photo | null)[][] = [];
  for (let i = 0; i < photos.length; i += FRAMES_PER_STRIP) {
    const strip: (Photo | null)[] = photos.slice(i, i + FRAMES_PER_STRIP);
    while (strip.length < FRAMES_PER_STRIP) strip.push(null);
    strips.push(strip);
  }

  return (
    <div className={styles.sheet}>
      {strips.map((strip, s) => (
        <div key={strip[0]?.id ?? `strip-${String(s)}`} className={styles.strip}>
          <div className={styles.frames}>
            {strip.map((photo, f) => {
              const style = { "--ratio": ratioOf(photo) } as React.CSSProperties;
              return photo ? (
                <figure key={photo.id} className={styles.frame} style={style}>
                  <Image
                    fill
                    alt=""
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, 200px"
                    src={`${PHOTOS_URL}/${String(photo.id)}.jpeg`}
                  />
                </figure>
              ) : (
                <div
                  key={`blank-${String(f)}`}
                  aria-hidden
                  className={`${styles.frame} ${styles.blank}`}
                  style={style}
                />
              );
            })}
          </div>
          {/* edge printing: frame numbers line up under their frames */}
          <div aria-hidden className={styles.edge}>
            {strip.map((photo, f) => {
              const n = s * FRAMES_PER_STRIP + f + 1;
              return (
                <span
                  key={`edge-${String(n)}`}
                  style={{ "--ratio": ratioOf(photo) } as React.CSSProperties}
                >
                  {n} <span className={styles.arrow}>▸</span> {n}A
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
