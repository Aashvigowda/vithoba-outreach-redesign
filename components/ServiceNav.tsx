import Link from "next/link";
import { services } from "@/lib/content";
import Reveal from "./Reveal";

export default function ServiceNav() {
  return (
    <div className="border-t border-b border-line divide-y divide-line">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={Math.min(i * 40, 240)}>
          <Link
            href={`/services/${s.slug}`}
            className="group grid items-baseline gap-3 py-7 md:grid-cols-[80px_1fr_auto] md:gap-8 md:py-9"
          >
            <span className="font-mono-vo text-sm text-ink-dim transition-colors group-hover:text-accent">
              {s.number}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                {s.navLabel}
              </h3>
              <p className="mt-2 max-w-md text-sm text-ink-2 md:text-base">
                {s.tagline}
              </p>
            </div>
            <span className="font-mono-vo hidden text-xs uppercase tracking-widest text-ink-dim transition-colors group-hover:text-accent md:block">
              {s.stage} →
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
