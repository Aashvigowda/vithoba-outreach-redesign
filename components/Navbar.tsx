"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services, waLink, waMessages } from "@/lib/content";
import Button from "./Button";
import styles from "./Navbar.module.css";

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m3.5 6 4.5 4.5L12.5 6" />
    </svg>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // null = follow hover/focus; true/false = toggled by click (touch) or Esc.
  const [dropOpen, setDropOpen] = useState<boolean | null>(null);
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileListOpen, setMobileListOpen] = useState(false);
  const pathname = usePathname();

  // A clicked link keeps focus, and :focus-within would hold the menu open.
  const closeDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
    setDropOpen(false);
    setFlyoutOpen(false);
  };

  // Close menus when the route changes (reset during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setDropOpen(null);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="wrap flex items-center justify-between py-3.5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Vithoba Outreach"
            width={96}
            height={96}
            priority
            className="h-12 w-12 rounded-full object-cover"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-2 md:flex">
          {navItems.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                className={styles.dropItem}
                data-open={dropOpen === null ? undefined : String(dropOpen)}
                // true = opened by click, false = closed by Esc/click; both
                // override hover/focus until the pointer or focus moves on.
                onMouseEnter={() => setDropOpen((v) => (v === false ? null : v))}
                onMouseLeave={() => {
                  setDropOpen((v) => (v === true ? null : v));
                  setFlyoutOpen(false);
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setDropOpen((v) => (v === false ? null : v));
                    setFlyoutOpen(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setDropOpen(false);
                    setFlyoutOpen(false);
                    (e.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus();
                  }
                }}
              >
                <span className={styles.dropToggle}>
                  <Link href={item.href} className="underline-link transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-label="Show services menu"
                    aria-expanded={dropOpen === true}
                    aria-controls="services-submenu"
                    onClick={() => setDropOpen((v) => (v === true ? false : true))}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-ink-2 hover:text-ink"
                  >
                    <Chevron className={styles.chevron} />
                  </button>
                </span>
                <ul id="services-submenu" className={styles.submenu}>
                  <li>
                    <Link href="/services" aria-current={pathname === "/services" ? "page" : undefined} onClick={closeDropdown}>
                      Services
                    </Link>
                  </li>
                  <li className={styles.hasFlyout} data-open={flyoutOpen ? "true" : undefined}>
                    <button
                      type="button"
                      className={styles.flyoutTrigger}
                      aria-expanded={flyoutOpen}
                      aria-controls="services-flyout"
                      onClick={() => setFlyoutOpen((v) => !v)}
                    >
                      Service List
                      <Chevron className={styles.flyoutChevron} />
                    </button>
                    <ul id="services-flyout" className={`${styles.submenu} ${styles.flyout}`}>
                      {services.map((s) => {
                        const href = `/services/${s.slug}`;
                        return (
                          <li key={s.slug}>
                            <Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={closeDropdown}>
                              {s.navLabel}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="underline-link transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button
            href={waLink(waMessages.bookCall)}
            external
            variant="solid"
            className="px-5 py-2.5 text-xs"
          >
            Get Started →
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className={`wrap flex flex-col gap-6 border-t border-line bg-surface py-8 md:hidden ${styles.mobilePanel}`}>
          {navItems.map((item) =>
            item.href === "/services" ? (
              <div key={item.href}>
                <div className={styles.mobileRow}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-bold text-ink"
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className={styles.mobileToggle}
                    aria-label="Show services"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    <Chevron />
                  </button>
                </div>
                <div id="mobile-services" className={styles.mobileSub} data-open={String(mobileServicesOpen)}>
                  <div className={styles.mobileSubInner}>
                    <ul>
                      <li>
                        <Link
                          href="/services"
                          tabIndex={mobileServicesOpen ? undefined : -1}
                          aria-current={pathname === "/services" ? "page" : undefined}
                          onClick={() => setOpen(false)}
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={styles.mobileListToggle}
                          tabIndex={mobileServicesOpen ? undefined : -1}
                          aria-expanded={mobileListOpen}
                          aria-controls="mobile-service-list"
                          onClick={() => setMobileListOpen((v) => !v)}
                        >
                          Service List
                          <Chevron />
                        </button>
                        <div id="mobile-service-list" className={styles.mobileSub} data-open={String(mobileListOpen)}>
                          <div className={styles.mobileSubInner}>
                            <ul className={styles.mobileNested}>
                              {services.map((s) => {
                                const href = `/services/${s.slug}`;
                                return (
                                  <li key={s.slug}>
                                    <Link
                                      href={href}
                                      tabIndex={mobileServicesOpen && mobileListOpen ? undefined : -1}
                                      aria-current={pathname === href ? "page" : undefined}
                                      onClick={() => setOpen(false)}
                                    >
                                      {s.navLabel}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-ink"
              >
                {item.label}
              </Link>
            )
          )}
          <Button
            href={waLink(waMessages.bookCall)}
            external
            variant="solid"
            className="mt-1 justify-center"
          >
            Get Started →
          </Button>
        </div>
      )}
    </header>
  );
}
