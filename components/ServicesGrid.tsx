"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { serviceIcons } from "./icons";
import { services, waLink } from "@/lib/content";
import styles from "@/app/services/services.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-3.97-3.03a.75.75 0 0 0-1.08.02L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05Z" />
    </svg>
  );
}

// Service cards open a quick-view popup first; the popup links on to the
// full service page.
export default function ServicesGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = services.find((s) => s.slug === activeSlug);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    document.documentElement.style.overflow = active ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [active]);

  const close = () => dialogRef.current?.close();

  const ActiveIcon = active ? serviceIcons[active.slug] : null;

  return (
    <>
      <div className={styles.serviceGrid}>
        {services.map((s, i) => {
          const Icon = serviceIcons[s.slug];
          return (
            <Reveal key={s.slug} delay={(i % 3) * 100}>
              <div className={`${styles.serviceBox} ${styles.serviceBoxClickable}`}>
                <div className={styles.serviceIcon} aria-hidden="true">
                  <Icon />
                </div>
                <div className={styles.serviceContent}>
                  <h4>{s.navLabel}</h4>
                  <p>{s.tagline}</p>
                  <button
                    type="button"
                    className={`${styles.linkBtn} ${styles.cardTrigger}`}
                    onClick={() => setActiveSlug(s.slug)}
                    aria-haspopup="dialog"
                    aria-label={`Read more about ${s.navLabel}`}
                  >
                    Read More
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.modal}
        aria-labelledby="service-modal-title"
        onClose={() => setActiveSlug(null)}
        onClick={(e) => {
          // A click on the backdrop lands on the <dialog> element itself.
          if (e.target === e.currentTarget) close();
        }}
      >
        {active && ActiveIcon && (
          <div className={styles.modalInner}>
            <button type="button" className={styles.modalClose} onClick={close} aria-label="Close">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
              </svg>
            </button>

            <div className={styles.modalHead}>
              <div className={styles.modalIcon} aria-hidden="true">
                <ActiveIcon />
              </div>
              <div>
                <span className={styles.modalNumber}>
                  {active.number} / {String(services.length).padStart(2, "0")}
                </span>
                <h3 id="service-modal-title">{active.navLabel}</h3>
              </div>
            </div>

            <p className={styles.modalTagline}>{active.tagline}</p>
            <p>{active.intro}</p>

            <h5 className={styles.modalSubhead}>What&rsquo;s included</h5>
            <ul className={styles.modalList}>
              {active.included.slice(0, 4).map((item) => (
                <li key={item}>
                  <CheckCircle />
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.modalActions}>
              <Link href={`/services/${active.slug}`} className={styles.mainButton} onClick={close}>
                <span className={styles.themeBtn}>View Full Details</span>
                <span className={styles.arrowBtn}>
                  <ArrowRight />
                </span>
              </Link>
              <a
                href={waLink(`Hi Vithoba Outreach, I'd like to know more about ${active.navLabel}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalTextLink}
              >
                Talk to Us
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

