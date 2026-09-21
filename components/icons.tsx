type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11z" />
    </svg>
  );
}

export function IconShare({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="17" cy="6" r="2.5" />
      <circle cx="17" cy="18" r="2.5" />
      <path d="M8.3 10.8 14.7 7.2M8.3 13.2l6.4 3.6" />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15 15" />
    </svg>
  );
}

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 10v4a1 1 0 0 0 1 1h2l9 4V5l-9 4H4a1 1 0 0 0-1 1z" />
      <path d="M18 9.5a4 4 0 0 1 0 5" />
    </svg>
  );
}

export function IconTrendingUp({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 16.5 9.5 10l4 4L21 6.5" />
      <path d="M21 11V6.5h-4.5" />
    </svg>
  );
}

export function IconFilter({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 5h16l-6.5 7.5V19l-3 1.5v-8z" />
    </svg>
  );
}

export function IconCode({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M9 10.5 6.8 12.5 9 14.5M15 10.5l2.2 2-2.2 2" />
    </svg>
  );
}

export function IconPalette({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3.5a8.5 8 0 1 0 0 16c1 0 1.6-.6 1.6-1.4 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.8.6-1.4 1.4-1.4H16a4 3.8 0 0 0 4-3.8c0-4-3.6-7-8-7z" />
      <circle cx="8.2" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="7.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCalendarCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3M16 3v3" />
      <path d="M8.5 14l2 2 4.5-4.5" />
    </svg>
  );
}

export function IconSprout({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 3-6 6-6 0 4-2 6-6 6z" />
      <path d="M12 13c0-3-2.5-5-5.5-5 0 3.5 2 5 5.5 5z" />
    </svg>
  );
}

export function IconSparkle({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
      <path d="M6.5 6.5l1.8 1.8M15.7 15.7l1.8 1.8M17.5 6.5l-1.8 1.8M8.3 15.7l-1.8 1.8" />
    </svg>
  );
}

export const serviceIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  "digital-marketing": IconCompass,
  "social-media-marketing": IconShare,
  "google-ads": IconSearch,
  "meta-ads": IconMegaphone,
  seo: IconTrendingUp,
  "lead-generation": IconFilter,
  "website-development": IconCode,
  branding: IconPalette,
};
