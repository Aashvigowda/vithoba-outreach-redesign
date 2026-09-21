export default function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <details
          key={item.q}
          open={i === 0}
          className="group rounded-2xl border border-line bg-surface px-6 transition-colors duration-300 open:border-accent open:bg-accent-dim md:px-8"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
            <span className="font-display text-base font-semibold text-ink md:text-lg">
              {item.q}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-lg leading-none text-accent-ink">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="max-w-2xl pb-6 leading-relaxed text-ink-2">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
