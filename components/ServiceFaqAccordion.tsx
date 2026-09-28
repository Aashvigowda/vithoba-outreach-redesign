"use client";

import { useId, useState } from "react";
import styles from "@/app/services/services.module.css";

// Template-style accordion: one item open at a time, first open by default.
export default function ServiceFaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className={styles.faqWrapper}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.q} className={styles.faqItem}>
            <h5>
              <button
                id={buttonId}
                type="button"
                className={styles.faqButton}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span className={styles.faqSign} aria-hidden="true" />
              </button>
            </h5>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={styles.faqBody}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
