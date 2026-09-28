"use client";

import { process } from "@/lib/content";
import { IconCalendarCheck, IconSearch, IconSparkle, IconSprout } from "./icons";
import { useAutoAdvance } from "./useAutoAdvance";
import shared from "@/app/services/services.module.css";
import styles from "@/app/about/about.module.css";

const stepIcons = [IconSearch, IconCalendarCheck, IconSparkle, IconSprout];

function Arrow({ up }: { up?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={up ? "M8 13V3M3.5 7.5 8 3l4.5 4.5" : "M8 3v10M3.5 8.5 8 13l4.5-4.5"} />
    </svg>
  );
}

// Template's team slider (sticky title + up/down arrows + two cards), filled
// with the real four-step process rather than invented team members.
export default function AboutApproachSlider({ title }: { title: React.ReactNode }) {
  const { index, next, prev, pauseHandlers } = useAutoAdvance(process.length);
  // Cards are rendered twice so the second visible slot can wrap to step 01.
  const loop = [...process, ...process];

  return (
    <div className={styles.teamRow} {...pauseHandlers}>
      <div className={styles.teamLeft}>
        {title}
        <div className={styles.leftArrows}>
          <button type="button" onClick={prev} className={shared.arrayPrev} aria-label="Previous step">
            <Arrow up />
          </button>
          <button type="button" onClick={next} className={shared.arrayNext} aria-label="Next step">
            <Arrow />
          </button>
        </div>
      </div>

      <div className={styles.teamViewport} aria-live="polite">
        <div
          className={styles.teamTrack}
          style={{ transform: `translateX(calc(-${index} * var(--slide-w, 50%)))` }}
        >
          {loop.map((step, i) => {
            const Icon = stepIcons[i % process.length];
            const visible = i === index || i === index + 1;
            return (
              <div
                key={`${step.step}-${i}`}
                className={styles.teamSlide}
                aria-hidden={!visible}
                role="group"
                aria-label={`Step ${step.step}: ${step.name}`}
              >
                <div className={styles.teamCard}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamVisual}>
                      <div className={styles.teamVisualIcon}>
                        <Icon />
                      </div>
                      <span className={styles.bigNumber}>{step.step}</span>
                    </div>
                  </div>
                  <div className={styles.teamContent}>
                    <h3>{step.name}</h3>
                    <p>{step.text}</p>
                  </div>
                  <span className={styles.teamTag}>{step.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
