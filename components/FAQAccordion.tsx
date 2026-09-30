"use client";

import { useId, useState } from "react";

// One question open at a time: opening another closes the current one.
// The first starts open; clicking an open question closes it.
export default function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border px-6 transition-colors duration-300 md:px-8 ${
              isOpen ? "border-accent bg-accent-dim" : "border-line bg-surface"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-base font-semibold text-ink md:text-lg">
                  {item.q}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-lg leading-none text-accent-ink">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink-2">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
