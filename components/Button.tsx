import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "accent" | "ghost";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300";
  const styles: Record<string, string> = {
    solid:
      "bg-dark text-on-dark hover:-translate-y-0.5 hover:bg-dark-2 hover:shadow-[0_14px_32px_rgba(10,33,23,0.28)]",
    outline:
      "border border-line-strong text-ink hover:border-accent hover:-translate-y-0.5",
    accent:
      "bg-accent text-accent-ink hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-[0_14px_32px_rgba(212,175,55,0.3)]",
    ghost: "rounded-none px-0 py-0 text-ink hover:text-accent",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
