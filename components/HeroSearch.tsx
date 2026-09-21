"use client";

import { useState } from "react";
import Button from "./Button";
import { waLink, waMessages } from "@/lib/content";

export default function HeroSearch() {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    const message = trimmed
      ? `Hi Vithoba Outreach, I'd like to grow: ${trimmed}`
      : waMessages.bookCall;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
    >
      <div className="flex w-full max-w-sm items-center rounded-full border border-dark-line bg-dark/80 pl-6 pr-2 backdrop-blur-sm focus-within:border-accent">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What are you looking to grow?"
          className="w-full bg-transparent py-3.5 text-sm text-on-dark placeholder:text-on-dark-dim focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Send on WhatsApp"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink transition-colors hover:bg-accent-bright"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-4 w-4">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M19.5 19.5 15 15" />
          </svg>
        </button>
      </div>
      <span className="font-mono-vo text-xs uppercase tracking-widest text-on-dark-dim">
        Or
      </span>
      <Button href={waLink(waMessages.bookCall)} external variant="accent">
        Book a Free Call →
      </Button>
    </form>
  );
}
