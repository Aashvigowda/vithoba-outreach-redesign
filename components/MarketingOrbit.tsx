"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { growthNodes } from "@/lib/content";
import ServiceVisual from "./ServiceVisual";

const TOTAL = growthNodes.length;
const RING_R = 38; // percent of the (square) orbit box
const HUB_GRAPH_D = "M2,20 L13,13 L24,16 L35,7 L46,10 L58,3";

function angleFor(index: number) {
  return -90 + (360 / TOTAL) * index;
}

function pointOn(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
}

// Shorter of the two arcs around the ring between two node angles — connections
// always trace the orbit's own circumference, never cut through the center hub.
function ringArcPath(a1: number, a2: number, r: number) {
  const p1 = pointOn(a1, r);
  const p2 = pointOn(a2, r);
  let diff = (((a2 - a1) % 360) + 360) % 360;
  if (diff > 180) diff -= 360;
  const sweep = diff >= 0 ? 1 : 0;
  return `M ${p1.x} ${p1.y} A ${r} ${r} 0 0 ${sweep} ${p2.x} ${p2.y}`;
}

function ServiceChain({ chain }: { chain: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono-vo text-[10px] uppercase tracking-widest text-ink-dim sm:text-[11px]">
      {chain.map((label, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-ink-dim/60">→</span>}
          <span className={i === 0 ? "text-accent" : ""}>{label}</span>
        </span>
      ))}
    </div>
  );
}

export default function MarketingOrbit() {
  const [active, setActive] = useState<string | null>(null);
  const supportsHover = useRef(true);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeIndex = growthNodes.findIndex((n) => n.id === active);
  const activeNode = activeIndex >= 0 ? growthNodes[activeIndex] : null;
  const relatedIds: string[] = activeNode ? [...activeNode.related] : [];

  function focus(id: string) {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setActive(id);
  }

  function toggle(id: string) {
    setActive((current) => (current === id ? null : id));
  }

  function hoverEnter(id: string) {
    if (typeof window !== "undefined") {
      supportsHover.current = window.matchMedia("(hover: hover)").matches;
    }
    if (supportsHover.current) focus(id);
  }

  function hoverLeaveContainer() {
    if (!supportsHover.current) return;
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setActive(null), 1000);
  }

  return (
    <div>
      {/* ORBIT — tablet & desktop */}
      <div className="hidden md:block" onMouseLeave={hoverLeaveContainer}>
        <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[560px]">
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <circle cx="50" cy="50" r={RING_R} fill="none" stroke="var(--line-strong)" strokeWidth="0.5" opacity="0.7" />
            {activeNode &&
              relatedIds.map((relId) => {
                const otherIndex = growthNodes.findIndex((n) => n.id === relId);
                if (otherIndex < 0) return null;
                const d = ringArcPath(angleFor(activeIndex), angleFor(otherIndex), RING_R);
                return (
                  <path
                    key={`${activeNode.id}-${relId}`}
                    className="rail-arc"
                    d={d}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    pathLength={1}
                    style={{ strokeDasharray: 1, animation: "rail-draw 0.6s var(--ease) forwards" }}
                  />
                );
              })}
          </svg>

          {/* Ambient dots drifting slowly around the base ring — always present,
              independent of hover state, so the orbit reads as "alive" at rest. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="orbit-particle absolute h-1.5 w-1.5 rounded-full bg-[var(--line-strong)] opacity-70"
                style={{
                  offsetPath: `circle(${RING_R}% at 50% 50%)`,
                  animationName: "orbit-drift",
                  animationDuration: "48s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay: `${-i * 16}s`,
                }}
              />
            ))}
          </div>

          {/* CENTER HUB */}
          <div
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/25 bg-surface text-center shadow-[0_16px_40px_rgba(18,24,18,0.10)]"
            style={{ width: "34%", height: "34%" }}
          >
            <svg viewBox="0 0 60 24" aria-hidden="true" className="h-5 w-14 text-accent sm:h-6 sm:w-16">
              <path d={HUB_GRAPH_D} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
              <circle
                className="hub-dot"
                r="1.6"
                fill="currentColor"
                style={{
                  offsetPath: `path("${HUB_GRAPH_D}")`,
                  animationName: "hub-travel",
                  animationDuration: "4s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                }}
              />
            </svg>
            <span className="mt-1 font-display text-base font-bold text-ink sm:text-lg lg:text-xl">
              {activeNode ? activeNode.label : "Growth"}
            </span>
            <div className="mt-1 flex max-w-[85%] flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 font-mono-vo text-[8px] uppercase tracking-widest text-ink-dim sm:text-[9px]">
              {(activeNode ? activeNode.keywords : ["Strategy", "Creative", "Performance", "Technology"]).map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
          </div>

          {/* SERVICE NODES */}
          {growthNodes.map((node, i) => {
            const angle = angleFor(i);
            const p = pointOn(angle, RING_R);
            const isActive = active === node.id;
            const isRelated = Boolean(active) && relatedIds.includes(node.id);
            const isDimmed = Boolean(active) && !isActive && !isRelated;

            return (
              <button
                key={node.id}
                type="button"
                aria-label={`${node.label}: ${node.headline}`}
                aria-expanded={isActive}
                onMouseEnter={() => hoverEnter(node.id)}
                onFocus={() => focus(node.id)}
                onClick={() => toggle(node.id)}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                  isActive
                    ? "z-10 h-[76px] w-[76px] scale-105 border-accent bg-surface shadow-[0_10px_26px_rgba(201,151,31,0.28)] lg:h-24 lg:w-24"
                    : isRelated
                    ? "h-16 w-16 border-accent/50 bg-surface lg:h-20 lg:w-20"
                    : "h-16 w-16 border-line bg-surface-2 lg:h-20 lg:w-20"
                } ${isDimmed ? "opacity-40" : "opacity-100"}`}
              >
                <span className="num-mono font-mono-vo text-[9px] text-ink-dim">{node.number}</span>
                <span className="px-1 font-display text-[10.5px] font-bold leading-tight text-ink lg:text-xs">
                  {node.label}
                </span>
                <span aria-hidden="true" className="text-[10px] text-accent">
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        {/* INFO PANEL — integrated below the orbit, not a modal */}
        <div
          className={`mx-auto mt-8 max-w-xl overflow-hidden transition-all duration-500 ${
            activeNode ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {activeNode && (
            <div className="rounded-3xl border border-line bg-surface p-6 shadow-[0_20px_44px_rgba(18,24,18,0.08)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono-vo text-xs text-ink-dim">{activeNode.number}</span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-ink">{activeNode.label}</h3>
                </div>
                <ServiceVisual id={activeNode.id} className="h-10 w-16 text-accent" />
              </div>
              <p className="mt-3 text-base font-semibold leading-snug text-ink">{activeNode.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{activeNode.description}</p>
              <div className="mt-4">
                <ServiceChain chain={activeNode.chain} />
              </div>
              <Link
                href={activeNode.slug ? `/services/${activeNode.slug}` : "/services"}
                className="underline-link mt-5 inline-flex items-center gap-2 font-mono-vo text-xs font-semibold uppercase tracking-widest text-accent"
              >
                Explore {activeNode.label} →
              </Link>
            </div>
          )}
        </div>
        {!activeNode && (
          <p className="mt-6 text-center font-mono-vo text-xs uppercase tracking-widest text-ink-dim">
            Hover to explore
          </p>
        )}
      </div>

      {/* VERTICAL ECOSYSTEM — mobile */}
      <div className="md:hidden">
        {growthNodes.map((node) => {
          const isActive = active === node.id;
          return (
            <div key={node.id} className="border-b border-line">
              <button
                type="button"
                aria-expanded={isActive}
                aria-label={`${node.label}: ${node.headline}`}
                onClick={() => toggle(node.id)}
                className="flex w-full items-center justify-between gap-3 py-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="num-mono font-mono-vo text-xs text-ink-dim">{node.number}</span>
                  <span className="font-display text-base font-bold text-ink">{node.label}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`text-accent transition-transform duration-300 ${isActive ? "rotate-90" : ""}`}
                >
                  ↗
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  isActive ? "max-h-[24rem] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm font-semibold leading-snug text-ink">{node.headline}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{node.description}</p>
                <div className="mt-3">
                  <ServiceChain chain={node.chain} />
                </div>
                <Link
                  href={node.slug ? `/services/${node.slug}` : "/services"}
                  className="underline-link mt-4 inline-flex items-center gap-2 font-mono-vo text-xs font-semibold uppercase tracking-widest text-accent"
                >
                  Explore {node.label} →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
