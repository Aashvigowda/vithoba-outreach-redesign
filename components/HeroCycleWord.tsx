"use client";

import { useEffect, useState } from "react";

// Same cycle as the live vithobaoutreach.com hero: one word every 2.5s,
// faded and slid over 0.35s. Viewers who prefer reduced motion see the
// first word only.
const words = ["revenue", "brand", "sales", "leads", "reach"];

export default function HeroCycleWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let swap: number | undefined;
    const id = window.setInterval(() => {
      setVisible(false);
      swap = window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2500);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(swap);
    };
  }, []);

  return (
    <span
      style={{
        fontFamily: "var(--font-accent-serif)",
        color: "#f2ce6e",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(0.25em)",
        transition: "opacity 0.35s, transform 0.35s",
      }}
      className="inline-block font-medium italic"
    >
      {words[index]}
    </span>
  );
}
