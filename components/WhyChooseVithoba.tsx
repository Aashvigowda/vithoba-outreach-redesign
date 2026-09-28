import Button from "./Button";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import {
  IconCalendarCheck,
  IconCompass,
  IconFilter,
  IconSearch,
  IconSprout,
} from "./icons";
import { waLink, waMessages } from "@/lib/content";

function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

// Every point is drawn from existing site copy (process, standFor, services).
const reasons = [
  {
    Icon: IconCompass,
    title: "One accountable partner",
    text: "Strategy, content, ads and follow-up handled by one team, instead of juggling several freelancers.",
  },
  {
    Icon: IconSearch,
    title: "Strategy before anything else",
    text: "We audit your brand, channels and competitors before recommending anything. No guesswork.",
  },
  {
    Icon: IconCalendarCheck,
    title: "Reported every month",
    text: "Monthly reporting and strategy calls keep the plan honest, and evolving with the results.",
  },
  {
    Icon: IconFilter,
    title: "Leads that don't go cold",
    text: "Landing pages plus WhatsApp and email follow-up, so every enquiry gets a timely response.",
  },
  {
    Icon: IconSprout,
    title: "A clear four-step process",
    text: "Discover, Plan, Launch, Grow. The same stages every time, so nothing gets lost between strategy and execution.",
  },
  {
    Icon: IconPin,
    title: "Local team, national reach",
    text: "Based in Kuvempu Nagara, Mysuru, and working with businesses across India.",
  },
];

export default function WhyChooseVithoba() {
  return (
    <section className="wrap py-10 md:py-12">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-height)+32px)] lg:self-start">
          <SectionHeader
            eyebrow="Why Choose Vithoba"
            heading={
              <>
                Marketing that has{" "}
                <span style={{ fontFamily: "var(--font-accent-serif)" }} className="italic text-accent">
                  a job to do.
                </span>
              </>
            }
            description="Businesses work with Vithoba Outreach for one connected growth system, run by a team that stays accountable for it."
          />
          <Reveal delay={150} className="mt-8">
            <Button href={waLink(waMessages.bookCall)} external>
              Book a Free Call →
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 2) * 100}>
              <div className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_44px_rgba(18,24,18,0.10)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dark text-accent-bright transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono-vo text-xs text-ink-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
