export default function Marquee({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  const content = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className="marquee-track py-1">
        {content.map((item, i) => (
          <span
            key={i}
            className={`font-mono-vo flex items-center gap-3 text-xs font-semibold uppercase tracking-widest ${
              dark ? "text-on-dark-dim" : "text-ink-dim"
            }`}
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
