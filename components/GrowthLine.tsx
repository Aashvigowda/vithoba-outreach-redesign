"use client";

import { useEffect, useRef } from "react";

const paths: Record<string, string> = {
  chart: "M0,68 C40,68 55,18 95,36 C135,54 155,8 195,22 C235,34 255,2 300,10",
  network: "M0,35 L36,35 L54,12 L96,12 L114,35 L156,35 L174,58 L216,58 L234,35 L300,35",
  funnel: "M10,4 L110,4 L84,30 L36,30 Z M40,40 L80,40 L70,58 L50,58 Z",
  timeline: "M20,0 L20,600",
  straight: "M0,4 L300,4",
};

export default function GrowthLine({
  variant = "chart",
  className = "",
}: {
  variant?: "chart" | "network" | "funnel" | "timeline" | "straight";
  className?: string;
}) {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.strokeDashoffset = "0";
          io.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const viewBox = variant === "timeline" ? "0 0 40 600" : "0 0 300 70";

  return (
    <svg
      viewBox={viewBox}
      className={className}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        ref={ref}
        d={paths[variant]}
        stroke="var(--accent)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: 1,
          transition: "stroke-dashoffset 1.8s var(--ease)",
        }}
      />
    </svg>
  );
}
