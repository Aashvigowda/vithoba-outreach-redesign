// Small hand-built mockups standing in for each service — no stock icons.
// Every path is drawn in a shared 64x40 box so the set reads as one system.
export default function ServiceVisual({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const shared = {
    viewBox: "0 0 64 40",
    className,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "strategy":
      return (
        <svg {...shared}>
          <path
            d="M4 32 L20 14 L36 26 L60 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            strokeOpacity="0.4"
            fill="none"
          />
          <circle cx="4" cy="32" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="36" cy="26" r="2.5" fill="currentColor" />
          <circle cx="60" cy="8" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "seo":
      return (
        <svg {...shared}>
          <rect x="6" y="24" width="6" height="10" fill="currentColor" opacity="0.35" />
          <rect x="16" y="16" width="6" height="18" fill="currentColor" opacity="0.55" />
          <rect x="26" y="8" width="6" height="26" fill="currentColor" opacity="0.85" />
          <circle cx="48" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="54.5" y1="22.5" x2="60" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "content":
      return (
        <svg {...shared}>
          <rect x="4" y="6" width="30" height="6" rx="1" fill="currentColor" opacity="0.85" />
          <rect x="4" y="18" width="56" height="3" rx="1" fill="currentColor" opacity="0.4" />
          <rect x="4" y="25" width="48" height="3" rx="1" fill="currentColor" opacity="0.4" />
          <rect x="4" y="32" width="38" height="3" rx="1" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case "social":
      return (
        <svg {...shared}>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="24" y="4" width="16" height="16" rx="2" fill="currentColor" />
          <rect x="44" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="4" y="22" width="16" height="14" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="24" y="22" width="16" height="14" rx="2" fill="currentColor" opacity="0.45" />
          <rect x="44" y="22" width="16" height="14" rx="2" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "google-ads":
      return (
        <svg {...shared}>
          <rect x="4" y="6" width="56" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="12" cy="11" r="2" fill="currentColor" opacity="0.6" />
          <rect x="4" y="22" width="15" height="6" rx="1.5" fill="currentColor" opacity="0.9" />
          <text x="6.5" y="26.6" fontSize="5" fill="var(--bg)" fontWeight="700">
            Ad
          </text>
          <rect x="22" y="23.5" width="26" height="3" rx="1" fill="currentColor" opacity="0.4" />
          <rect x="4" y="31" width="40" height="3" rx="1" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "meta-ads":
      return (
        <svg {...shared}>
          <circle cx="10" cy="9" r="5" fill="currentColor" opacity="0.6" />
          <rect x="19" y="6" width="24" height="3" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="19" y="11" width="16" height="3" rx="1" fill="currentColor" opacity="0.3" />
          <rect x="4" y="18" width="56" height="14" rx="2" fill="currentColor" opacity="0.18" />
          <path
            d="M10 30c-3-2-5-4-5-6.5A3.5 3.5 0 0 1 10 21a3.5 3.5 0 0 1 5 2.5c0 2.5-2 4.5-5 6.5z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      );
    case "website":
      return (
        <svg {...shared}>
          <rect x="2" y="4" width="60" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <line x1="2" y1="12" x2="62" y2="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <circle cx="7" cy="8" r="1.3" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="8" r="1.3" fill="currentColor" opacity="0.6" />
          <circle cx="17" cy="8" r="1.3" fill="currentColor" opacity="0.6" />
          <rect x="8" y="18" width="30" height="4" rx="1" fill="currentColor" opacity="0.7" />
          <rect x="8" y="25" width="48" height="3" rx="1" fill="currentColor" opacity="0.35" />
          <rect x="8" y="30" width="20" height="3" rx="1" fill="currentColor" opacity="0.9" />
        </svg>
      );
    case "leads":
      return (
        <svg {...shared}>
          <path d="M6 6 H58 L40 22 H24 Z" fill="currentColor" opacity="0.25" />
          <path d="M24 22 H40 L34 34 H30 Z" fill="currentColor" opacity="0.65" />
          <circle cx="32" cy="10" r="1.6" fill="currentColor" />
          <circle cx="26" cy="10" r="1.6" fill="currentColor" opacity="0.6" />
          <circle cx="38" cy="10" r="1.6" fill="currentColor" opacity="0.6" />
        </svg>
      );
    case "automation":
      return (
        <svg {...shared}>
          <path
            d="M12 20 L28 9 M12 20 L28 31 M36 8 L52 19 M36 32 L52 21"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
            fill="none"
          />
          <circle cx="8" cy="20" r="4" fill="currentColor" opacity="0.85" />
          <circle cx="32" cy="8" r="4" fill="currentColor" opacity="0.85" />
          <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.85" />
          <circle cx="56" cy="20" r="4" fill="currentColor" opacity="0.85" />
        </svg>
      );
    default:
      return (
        <svg {...shared}>
          <circle cx="12" cy="20" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="32" cy="20" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="52" cy="20" r="3" fill="currentColor" opacity="0.6" />
        </svg>
      );
  }
}
