// Abstract, hand-built CSS "mockups" standing in for campaign channels —
// deliberately not real screenshots or stock UI, just enough visual language
// (a search snippet, an ad card, a social post, a browser, a chat bubble) to
// read as that channel at a glance. Reused by the hero collage and the
// service showcase so the two sections share one visual vocabulary.

export function SearchResultMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 rounded-xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-dark" />
        <span className="h-2 w-24 rounded-full bg-line-strong" />
      </div>
      <span className="mt-3 block h-3 w-4/5 rounded-full bg-accent" />
      <span className="mt-2 block h-2 w-full rounded-full bg-line-strong" />
      <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-line-strong" />
    </div>
  );
}

export function AdMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 rounded-xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <span className="inline-block rounded-full bg-accent px-2 py-0.5 font-mono-vo text-[9px] font-bold uppercase tracking-widest text-accent-ink">
        Ad
      </span>
      <span className="mt-3 block h-3 w-5/6 rounded-full bg-ink" />
      <span className="mt-3 block h-16 w-full rounded-lg bg-dark" />
      <span className="mt-3 inline-block rounded-full bg-accent px-4 py-1.5 text-[10px] font-bold text-accent-ink">
        Learn More
      </span>
    </div>
  );
}

export function SocialPostMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 rounded-xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-dark" />
        <span className="h-2 w-20 rounded-full bg-line-strong" />
      </div>
      <span className="mt-3 block h-24 w-full rounded-lg bg-gradient-to-br from-dark to-dark-2" />
      <div className="mt-3 flex gap-3">
        <span className="h-2 w-8 rounded-full bg-accent" />
        <span className="h-2 w-8 rounded-full bg-line-strong" />
        <span className="h-2 w-8 rounded-full bg-line-strong" />
      </div>
    </div>
  );
}

export function BrowserMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 overflow-hidden rounded-xl border border-line bg-surface shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        <span className="ml-1.5 h-2 flex-1 rounded-full bg-bg" />
      </div>
      <div className="p-4">
        <span className="block h-3 w-3/5 rounded-full bg-ink" />
        <span className="mt-2 block h-2 w-full rounded-full bg-line-strong" />
        <span className="mt-1.5 block h-2 w-4/5 rounded-full bg-line-strong" />
        <span className="mt-3 inline-block rounded-full bg-dark px-4 py-1.5 text-[10px] font-bold text-on-dark">
          Enquire Now
        </span>
      </div>
    </div>
  );
}

export function ChatMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 rounded-xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#25d366]" />
        <span className="font-mono-vo text-[10px] uppercase tracking-widest text-ink-dim">New Enquiry</span>
      </div>
      <div className="mt-3 rounded-lg rounded-tl-none bg-surface-2 p-3">
        <span className="block h-2 w-4/5 rounded-full bg-line-strong" />
        <span className="mt-1.5 block h-2 w-3/5 rounded-full bg-line-strong" />
      </div>
      <span className="mt-2 block text-right font-mono-vo text-[9px] text-ink-dim">Just now</span>
    </div>
  );
}

export function StrategyMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 rounded-xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <svg viewBox="0 0 200 90" className="h-20 w-full" aria-hidden="true">
        <line x1={20} y1={45} x2={100} y2={20} stroke="var(--line-strong)" strokeWidth={1.5} />
        <line x1={20} y1={45} x2={100} y2={70} stroke="var(--line-strong)" strokeWidth={1.5} />
        <line x1={100} y1={20} x2={180} y2={45} stroke="var(--accent)" strokeWidth={1.5} />
        <line x1={100} y1={70} x2={180} y2={45} stroke="var(--accent)" strokeWidth={1.5} />
        <circle cx={20} cy={45} r={7} fill="var(--dark)" />
        <circle cx={100} cy={20} r={5} fill="var(--surface)" stroke="var(--line-strong)" strokeWidth={1.5} />
        <circle cx={100} cy={70} r={5} fill="var(--surface)" stroke="var(--line-strong)" strokeWidth={1.5} />
        <circle cx={180} cy={45} r={7} fill="var(--accent)" />
      </svg>
    </div>
  );
}

export function BrandMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 rounded-xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <div className="flex gap-2">
        <span className="h-10 flex-1 rounded-lg bg-dark" />
        <span className="h-10 flex-1 rounded-lg bg-accent" />
        <span className="h-10 flex-1 rounded-lg bg-surface-2 border border-line" />
      </div>
      <span className="mt-4 block font-display text-2xl font-bold italic text-ink">Aa</span>
    </div>
  );
}

export function AnalyticsMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-44 rounded-xl border border-line bg-surface p-4 shadow-[0_16px_40px_rgba(18,24,18,0.12)] ${className}`}>
      <span className="font-mono-vo text-[9px] uppercase tracking-widest text-ink-dim">
        Enquiries
      </span>
      <svg viewBox="0 0 140 50" className="mt-2 h-10 w-full" aria-hidden="true">
        <polyline
          points="0,42 25,30 50,34 75,16 100,20 140,4"
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export const serviceMockups: Record<string, (props: { className?: string }) => React.ReactElement> = {
  "digital-marketing": StrategyMockup,
  seo: SearchResultMockup,
  "google-ads": AdMockup,
  "meta-ads": AdMockup,
  "social-media-marketing": SocialPostMockup,
  "website-development": BrowserMockup,
  "lead-generation": ChatMockup,
  branding: BrandMockup,
};
