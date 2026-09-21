import Image from "next/image";
import Link from "next/link";
import { contact, services, site } from "@/lib/content";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-display mb-5 text-base font-bold text-on-dark">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="underline-link text-sm text-on-dark-dim hover:text-on-dark"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const socials = [
  {
    href: contact.socials.linkedin,
    label: "LinkedIn",
    path: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M7.8 10.2v6M7.8 7.6v.02M12 16.2v-3.6c0-1.4 1-2.4 2.2-2.4s2 1 2 2.4v3.6" />
      </>
    ),
  },
  {
    href: contact.socials.instagram,
    label: "Instagram",
    path: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    href: contact.socials.facebook,
    label: "Facebook",
    path: (
      <path d="M14.5 21v-7h2.4l.4-3H14.5V9c0-.9.3-1.5 1.7-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-2 0-3.3 1.2-3.3 3.4V11H10v3h2.3v7h2.2z" />
    ),
  },
];

export default function Footer() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    contact.address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <footer className="mt-8 bg-dark text-on-dark-dim">
      <div className="wrap py-20">
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface p-2 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
              <Image
                src="/logo.png"
                alt="Vithoba Outreach"
                width={56}
                height={56}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <p className="font-display mt-4 text-lg font-bold text-on-dark">
              {site.name}
            </p>
            <p className="font-mono-vo eyebrow-dark mt-2">
              Trust the Strategy · Grow with Vithoba
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-line text-on-dark transition-colors hover:border-accent-bright hover:text-accent-bright"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2.5 text-on-dark-dim hover:text-on-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                  <path d="M6.5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3c0 1-.9 1.8-1.9 1.6-6-1-10.6-5.6-11.6-11.6C5.7 6.4 5.5 5 6.5 4.5z" />
                </svg>
                {contact.phoneDisplay}
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-2.5 text-on-dark-dim hover:text-on-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
                  <path d="M4.5 7l7.5 6 7.5-6" />
                </svg>
                {contact.email}
              </a>
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              { href: "/services", label: "Services" },
              { href: "/industries/real-estate", label: "Industries" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Insights" },
              { href: "/#contact", label: "Contact Us" },
            ]}
          />

          <FooterCol
            title="Our Services"
            links={services.map((s) => ({
              href: `/services/${s.slug}`,
              label: s.navLabel,
            }))}
          />

          <div>
            <p className="font-display mb-5 text-base font-bold text-on-dark">
              Reach Us
            </p>
            <p className="text-sm font-semibold text-on-dark">
              Mysuru (Head Office)
            </p>
            <p className="mt-2 flex gap-2 text-sm leading-relaxed text-on-dark-dim">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright">
                <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.4" />
              </svg>
              <span>{contact.address}</span>
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-dark-line">
              <iframe
                src={mapSrc}
                title="Vithoba Outreach location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[140px] w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-dark-line pt-8 text-xs text-on-dark-dim">
          <p>
            Copyright © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <p>
            All prices are indicative starting rates in INR, subject to final
            scope, industry and business size. Ad spend is always billed
            separately from our service fee.
          </p>
        </div>
      </div>
    </footer>
  );
}
