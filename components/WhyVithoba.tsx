import Reveal from "./Reveal";

const principles = [
  { name: "Clarity", text: "Know what we're trying to achieve." },
  { name: "Creativity", text: "Make the business impossible to ignore." },
  { name: "Conversion", text: "Turn attention into action." },
  { name: "Learning", text: "Use performance to improve the next move." },
];

export default function WhyVithoba() {
  return (
    <div className="mt-4">
      {principles.map((p, i) => (
        <Reveal key={p.name} delay={i * 80}>
          <div className="flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 md:py-8">
            <h3 className="font-display text-2xl font-bold uppercase text-ink sm:text-3xl">
              {p.name}
            </h3>
            <p className="max-w-sm text-base text-ink-2 sm:text-right">{p.text}</p>
          </div>
        </Reveal>
      ))}
      <div className="border-t border-line" />
    </div>
  );
}
