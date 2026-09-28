"use client";

import { useCallback, useEffect, useState } from "react";

// Looping index for simple sliders: auto-advances every `delay` ms unless
// paused or the viewer prefers reduced motion.
export function useAutoAdvance(count: number, delay = 4000) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(next, delay);
    return () => window.clearInterval(id);
  }, [paused, next, delay]);

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return { index, setIndex, next, prev, pauseHandlers };
}
