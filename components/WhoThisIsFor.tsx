"use client";

import { useState } from "react";

// Grounded in the real whoFor lines already in lib/content.ts (digital-marketing,
// lead-generation, seo) — restated as three large typographic categories.
const categories = [
  { label: "Local Business", text: "Need more visibility, enquiries and customers." },
  { label: "Growing Brand", text: "Need a stronger digital acquisition engine." },
  { label: "Business Team", text: "Need one accountable marketing partner." },
];

export default function WhoThisIsFor() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-4 flex flex-col">
      {categories.map((cat) => {
        const isActive = active === cat.label;
        return (
          <button
            key={cat.label}
            type="button"
            onMouseEnter={() => setActive(cat.label)}
            onFocus={() => setActive(cat.label)}
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
            className="group flex flex-col items-start border-t border-line py-6 text-left last:border-b md:py-8"
          >
            <span
              className={`font-display text-xl font-bold uppercase transition-colors duration-300 sm:text-2xl md:text-3xl ${
                isActive ? "text-accent-deep" : "text-ink group-hover:text-accent-deep"
              }`}
            >
              {cat.label}
            </span>
            <span
              className={`mt-2 max-w-md text-base text-ink-2 transition-all duration-300 ${
                isActive ? "max-h-12 opacity-100" : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              {cat.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}
