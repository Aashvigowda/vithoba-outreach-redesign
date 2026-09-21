"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { waLink, waMessages } from "@/lib/content";
import Button from "./Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries/real-estate", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            width={34}
            height={34}
            priority
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="hidden font-display text-sm font-bold tracking-tight text-ink sm:inline">
            Vithoba Outreach
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-link transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
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
        <div className="wrap flex flex-col gap-6 border-t border-line bg-surface py-8 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-bold text-ink"
            >
              {item.label}
            </Link>
          ))}
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
