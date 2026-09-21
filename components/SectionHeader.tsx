import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  heading,
  description,
  className = "",
  center = false,
  dark = false,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  description?: string;
  className?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : ""} ${className}`}>
      <p
        className={`mb-5 ${dark ? "eyebrow-dark" : "eyebrow"} ${
          center ? "justify-center" : ""
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-[clamp(1.9rem,4vw,3.15rem)] font-bold ${
          dark ? "text-on-dark" : "text-ink"
        } ${center ? "max-w-3xl mx-auto" : "max-w-3xl"}`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            dark ? "text-on-dark-dim" : "text-ink-2"
          } ${center ? "max-w-xl mx-auto" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
