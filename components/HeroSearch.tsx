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
      <div className="flex w-full max-w-[550px] items-center gap-3 rounded-full border border-on-dark/20 bg-dark/70 pl-5 pr-2 sm:pl-7 backdrop-blur-sm focus-within:border-accent sm:w-[550px]">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What are you looking to grow?"
          className="w-full min-w-0 text-ellipsis bg-transparent py-5 text-[15px] text-on-dark sm:text-base placeholder:text-on-dark-dim focus:outline-none md:text-lg"
        />
        <button
          type="submit"
          aria-label="Send on WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink transition-colors hover:bg-accent-bright"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M19.5 19.5 15 15" />
          </svg>
        </button>
      </div>
      <span className="font-mono-vo text-xs uppercase tracking-[0.2em] text-on-dark/60">
        Or
      </span>
      <Button href={waLink(waMessages.bookCall)} external variant="accent" className="px-8 py-5 text-base md:text-lg">
        Book a free call
      </Button>
    </form>
  );
}
