import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { value: 8, label: "Growth Disciplines" },
  { value: 4, label: "Stage Process" },
  { value: 3, label: "Package Tiers" },
];

export default function StatsStrip() {
  return (
    <div className="wrap relative z-10 -mt-10 md:-mt-14">
      <Reveal>
        <div className="grid divide-y divide-line rounded-3xl border border-line bg-surface shadow-[0_20px_50px_rgba(18,24,18,0.10)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-4 px-8 py-7"
            >
              <CountUp
                value={stat.value}
                className="font-display text-4xl font-bold text-accent"
              />
              <span className="text-sm font-semibold leading-tight text-ink">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
