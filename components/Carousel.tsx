"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function Carousel({
  items,
  autoplayMs = 4200,
  dark = false,
  ariaLabel,
}: {
  items: React.ReactNode[];
  autoplayMs?: number;
  dark?: boolean;
  ariaLabel: string;
}) {
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const computePerView = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 3;
      if (w >= 640) return 2;
      return 1;
    };
    const onResize = () => setPerView(computePerView());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pageCount = Math.max(1, Math.ceil(items.length / perView));

  useEffect(() => {
    if (page > pageCount - 1) setPage(0);
  }, [pageCount, page]);

  useEffect(() => {
    if (paused || reducedMotion.current || pageCount <= 1) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [paused, pageCount, autoplayMs]);

  const pages = useMemo(() => {
    const chunks: React.ReactNode[][] = [];
    for (let i = 0; i < items.length; i += perView) {
      chunks.push(items.slice(i, i + perView));
    }
    return chunks;
  }, [items, perView]);

  const arrowCls = dark
    ? "border-dark-line text-on-dark hover:border-accent-bright hover:text-accent-bright"
    : "border-line-strong text-ink hover:border-accent hover:text-accent";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${page * 100}%)`,
            transitionTimingFunction: "var(--ease)",
          }}
        >
          {pages.map((chunk, i) => (
            <div
              key={i}
              className="grid w-full shrink-0 gap-5"
              style={{ gridTemplateColumns: `repeat(${perView}, minmax(0,1fr))` }}
              aria-hidden={i !== page}
            >
              {chunk}
            </div>
          ))}
        </div>
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === page}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-7 bg-accent"
                    : dark
                    ? "w-3 bg-dark-line"
                    : "w-3 bg-line-strong"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${arrowCls}`}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setPage((p) => (p + 1) % pageCount)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${arrowCls}`}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
