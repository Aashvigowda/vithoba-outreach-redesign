import Link from "next/link";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  number,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  number?: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb?: { name: string; href?: string }[];
}) {
  return (
    <section className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
      {breadcrumb && (
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="font-mono-vo flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-ink-dim">
            {breadcrumb.map((item, i) => (
              <li key={item.name} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:text-accent">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-ink-2">{item.name}</span>
                )}
                {i < breadcrumb.length - 1 && <span>/</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <Reveal>
        <div className="mb-6 flex items-baseline gap-4">
          {number && (
            <span className="font-mono-vo text-sm text-accent">{number}</span>
          )}
          <p className="eyebrow">{eyebrow}</p>
        </div>
        <h1 className="max-w-4xl font-display text-[clamp(2.3rem,6vw,4.4rem)] font-bold leading-[1.03] text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
