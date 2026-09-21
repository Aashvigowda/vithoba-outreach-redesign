export default function SectionDivider({
  toColor = "var(--bg)",
  flip = false,
}: {
  toColor?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full md:h-14 ${flip ? "-scale-x-100" : ""}`}
    >
      <path d="M0,60 L1440,0 L1440,60 Z" fill={toColor} />
    </svg>
  );
}
