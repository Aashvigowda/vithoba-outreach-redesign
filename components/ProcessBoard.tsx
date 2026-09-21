"use client";

import { useState } from "react";

// Real stages from lib/content.ts `process`, restructured from 4 to 5 —
// Launch's own real text ("Content, ads, pages and automations go live –
// built and managed end-to-end") splits naturally into Create (built) and
// Launch (go live). Nothing here is invented, just re-paced for the board.
const stages = [
  { number: "01", name: "Understand", text: "We audit what exists — your brand, channels and competitors — before recommending anything." },
  { number: "02", name: "Strategize", text: "A clear strategy and calendar, matched to your budget and the package that fits." },
  { number: "03", name: "Create", text: "Content, ads, pages and automations are built and prepared to go live." },
  { number: "04", name: "Launch", text: "Everything goes into market and starts running, managed end-to-end." },
  { number: "05", name: "Improve", text: "Monthly reporting and strategy calls keep the plan honest, and evolving with results." },
];

export default function ProcessBoard() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 md:h-[440px] md:flex-row">
      {stages.map((stage, i) => {
        const isActive = i === active;
        return (
          <div
            key={stage.number}
            role="button"
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{ flexGrow: isActive ? 3 : 1 }}
            className="flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-dark-line p-6 transition-[flex-grow,background-color] duration-500 md:h-full md:p-8"
          >
            <div className="flex items-baseline justify-between gap-4 md:flex-col md:items-start md:gap-3">
              <span
                className={`font-display text-4xl font-bold transition-colors duration-500 sm:text-5xl ${
                  isActive ? "text-accent-bright" : "text-dark-line"
                }`}
              >
                {stage.number}
              </span>
              <h3
                className={`font-display text-xl font-bold uppercase transition-colors duration-500 sm:text-2xl ${
                  isActive ? "text-on-dark" : "text-on-dark-dim"
                }`}
              >
                {stage.name}
              </h3>
            </div>
            <p
              className={`max-w-xs text-sm leading-relaxed text-on-dark-dim transition-all duration-500 ${
                isActive ? "mt-6 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0 md:mt-6"
              }`}
            >
              {stage.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
