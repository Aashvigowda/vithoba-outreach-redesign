import { SocialPostMockup, SearchResultMockup, AnalyticsMockup } from "./CampaignMockups";
import Reveal from "./Reveal";

// A creative-studio pinboard, not a dashboard: one dominant piece, two
// mid-weight pieces, three small fragments — real scale variation instead of
// everything floating/rotating at the same size (that's the exact template
// look this redesign is moving away from).
export default function StudioHeroVisual() {
  return (
    <div className="relative h-[440px] w-full sm:h-[520px] md:h-[600px]">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 560"
        className="absolute inset-0 -z-10 hidden h-full w-full opacity-[0.18] md:block"
        fill="none"
      >
        <line x1={70} y1={100} x2={230} y2={230} stroke="var(--accent)" strokeWidth={1} strokeDasharray="3 6" />
        <line x1={230} y1={230} x2={110} y2={420} stroke="var(--accent)" strokeWidth={1} strokeDasharray="3 6" />
      </svg>

      {/* LARGE — the live campaign surface */}
      <Reveal className="absolute left-0 top-0 z-20">
        <div className="w-[260px] rounded-2xl border border-line bg-surface p-5 shadow-[0_30px_70px_rgba(18,24,18,0.18)] sm:w-[300px] md:w-[320px]">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="ml-1.5 h-2 flex-1 rounded-full bg-bg" />
          </div>
          <p className="font-mono-vo mt-4 text-[10px] uppercase tracking-widest text-accent">Campaign Live</p>
          <span className="mt-2 block h-4 w-4/5 rounded bg-ink" />
          <span className="mt-2.5 block h-2 w-full rounded-full bg-line-strong" />
          <span className="mt-1.5 block h-2 w-3/5 rounded-full bg-line-strong" />
          <span className="mt-4 block h-28 rounded-lg bg-gradient-to-br from-dark to-dark-2" />
          <span className="mt-4 inline-block rounded-full bg-accent px-5 py-2 text-xs font-bold text-accent-ink">
            Enquire Now
          </span>
        </div>
      </Reveal>

      {/* MEDIUM — search + social, overlapping the large surface */}
      <Reveal delay={140} className="absolute right-0 top-6 z-30 sm:top-8">
        <SearchResultMockup className="w-44 sm:w-48" />
      </Reveal>
      <Reveal delay={220} className="absolute bottom-24 right-2 z-10 sm:bottom-28 sm:right-6">
        <SocialPostMockup className="w-44 sm:w-48" />
      </Reveal>

      {/* SMALL — lead notification, analytics fragment, WhatsApp fragment */}
      <Reveal delay={320} className="absolute bottom-0 left-6 z-30 sm:left-12">
        <div className="w-40 rounded-xl border border-line bg-surface p-3.5 shadow-[0_16px_40px_rgba(18,24,18,0.12)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#25d366]" />
            <span className="font-mono-vo text-[9px] uppercase tracking-widest text-ink-dim">New Enquiry</span>
          </div>
          <span className="mt-2 block h-2 w-4/5 rounded-full bg-line-strong" />
        </div>
      </Reveal>
      <Reveal delay={400} className="absolute left-0 top-[210px] z-0 sm:top-[240px]">
        <AnalyticsMockup className="w-32 opacity-90 sm:w-36" />
      </Reveal>
      <Reveal
        delay={460}
        className="absolute bottom-20 right-16 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#25d366] shadow-[0_10px_24px_rgba(37,211,102,0.35)] sm:bottom-24 sm:right-24"
      >
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="#fff" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.14-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.44-4.38-1.2l-.31-.19-3.05.8.81-2.97-.2-.31A7.94 7.94 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </Reveal>
    </div>
  );
}
