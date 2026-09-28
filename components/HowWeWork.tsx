import { process } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { IconSearch, IconCalendarCheck, IconCompass, IconSprout, IconSparkle } from "./icons";

const stepIcons = [IconSearch, IconCalendarCheck, IconCompass, IconSprout];

export default function HowWeWork() {
  return (
    <section className="bg-dark py-12 text-on-dark md:py-16">
      <div className="wrap">
        <SectionHeader
          center
          dark
          eyebrow="How We Work"
          heading={
            <>
              From root to{" "}
              <span style={{ fontFamily: "var(--font-accent-serif)" }} className="italic text-accent-bright">
                bloom
              </span>
              .
            </>
          }
          description="The same four stages, every time — so nothing gets lost between strategy and execution."
          className="mb-10"
        />

        <div className="relative mb-10 flex items-center justify-between px-1 sm:px-2">
          <div
            aria-hidden="true"
            className="absolute left-7 right-7 top-1/2 h-px -translate-y-1/2 bg-accent-bright/50 sm:left-8 sm:right-8"
          />
          {process.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={step.step} delay={i * 100} className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent-bright bg-dark text-accent-bright sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
              </Reveal>
            );
          })}
          <span
            aria-hidden="true"
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-accent-bright/50 bg-dark text-accent-bright/70"
          >
            <IconSparkle className="h-4 w-4" />
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal
              key={step.step}
              delay={i * 100}
              className="rounded-3xl border border-dark-line bg-dark-2/50 p-7"
            >
              <p className="font-mono-vo text-xs uppercase tracking-widest text-on-dark-dim">
                Step {step.step}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-on-dark">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-dark-dim">{step.text}</p>
              <span className="mt-5 inline-flex rounded-full border border-dark-line bg-dark px-3 py-1 font-mono-vo text-[11px] uppercase tracking-widest text-on-dark-dim">
                {step.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
