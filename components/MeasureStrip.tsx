import Reveal from "./Reveal";

const measures = [
  { label: "Visibility", text: "How often your brand is seen and searched for." },
  { label: "Traffic", text: "Visits to your website and landing pages." },
  { label: "Leads", text: "Enquiries captured through forms, calls and WhatsApp." },
  { label: "Conversions", text: "Leads that turn into paying customers." },
  { label: "Customer Acquisition", text: "The full path from first visibility to a signed customer." },
];

export default function MeasureStrip() {
  return (
    <div className="mt-4 flex flex-col divide-y divide-dark-line md:flex-row md:divide-x md:divide-y-0">
      {measures.map((m, i) => (
        <Reveal key={m.label} delay={i * 70} className="flex-1 py-8 md:px-6 md:py-2 first:md:pl-0 last:md:pr-0">
          <span className="font-mono-vo text-xs text-accent-bright">0{i + 1}</span>
          <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-on-dark md:text-3xl">
            {m.label}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-on-dark-dim">{m.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
