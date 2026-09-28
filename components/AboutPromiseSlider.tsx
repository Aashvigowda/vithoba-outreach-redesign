"use client";

import Image from "next/image";
import { useAutoAdvance } from "./useAutoAdvance";
import styles from "@/app/about/about.module.css";

// Template's centred testimonial slider, carrying Vithoba's own stated
// principles (there are no published client testimonials to show).
export default function AboutPromiseSlider({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  const { index, setIndex, pauseHandlers } = useAutoAdvance(items.length, 5000);

  return (
    <div {...pauseHandlers}>
      <div className={styles.quoteViewport} aria-live="polite">
        <div className={styles.quoteTrack} style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={styles.quoteSlide}
              aria-hidden={i !== index}
              role="group"
              aria-label={`${i + 1} of ${items.length}`}
            >
              <p>{item.text}</p>
              <div className={styles.quoteClient}>
                <div className={styles.quoteClientImg}>
                  <Image src="/logo.png" alt="" width={56} height={56} />
                </div>
                <div>
                  <h6>{item.title}</h6>
                  <span>Vithoba Outreach, Mysuru</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.quoteDots}>
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className={styles.quoteDot}
            aria-label={`Show "${item.title}"`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
