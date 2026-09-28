"use client";

import { useCallback, useEffect, useState } from "react";
import { process } from "@/lib/content";
import {
  IconCalendarCheck,
  IconSearch,
  IconSparkle,
  IconSprout,
} from "./icons";
import styles from "@/app/services/services.module.css";

const stepIcons = [IconSearch, IconCalendarCheck, IconSparkle, IconSprout];

// One-card slider in the template's testimonial layout, cycling through the
// real four-step process instead of invented client quotes.
export default function ServicesProcessSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = process.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(next, 4000);
    return () => window.clearInterval(id);
  }, [paused, next]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.sliderViewport} aria-live="polite">
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {process.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={step.step}
                className={styles.slide}
                aria-hidden={i !== index}
                role="group"
                aria-label={`Step ${i + 1} of ${count}`}
              >
                <div className={styles.testimonialCard}>
                  <div className={styles.clientInfo}>
                    <div className={styles.clientImg}>{step.step}</div>
                    <div className={styles.clientContent}>
                      <h5>{step.name}</h5>
                      <span>{step.tag}</span>
                    </div>
                  </div>
                  <p>{step.text}</p>
                  <div className={styles.cardIcon}>
                    <Icon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.arrayButton}>
        <button type="button" onClick={prev} className={styles.arrayPrev} aria-label="Previous step">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
          </svg>
        </button>
        <button type="button" onClick={next} className={styles.arrayNext} aria-label="Next step">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
