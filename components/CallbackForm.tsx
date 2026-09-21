"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { waLink, waMessages } from "@/lib/content";

const inputClass =
  "w-full rounded-xl border border-dark-line bg-dark px-5 py-4 text-sm text-on-dark placeholder:text-on-dark-dim focus:border-accent-bright focus:outline-none";

export default function CallbackForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const phone = data.get("phone")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const goal = data.get("goal")?.toString().trim();

    const message = [
      waMessages.callback,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      email && `Email: ${email}`,
      goal && `Looking to grow: ${goal}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <section className="bg-dark text-on-dark">
      <div className="grid md:grid-cols-2">
        {/* LEFT: intro panel */}
        <Reveal className="relative isolate flex min-h-[320px] flex-col justify-between p-10 sm:p-12 md:min-h-[620px] md:p-16 lg:p-20">
          <Image src="/hero-visual.png" alt="" fill className="-z-20 object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(18,52,31,0.96)_0%,rgba(18,52,31,0.88)_45%,rgba(18,52,31,0.55)_100%)]"
          />
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-bold leading-tight text-on-dark sm:text-4xl">
              Want to know more about Vithoba Outreach?
            </h2>
            <p className="mt-4 text-on-dark-dim">We&apos;re here to talk — enquire now.</p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-mono-vo text-xs uppercase tracking-widest text-on-dark">
              Vithoba Outreach
            </span>
          </div>
        </Reveal>

        {/* RIGHT: form panel */}
        <Reveal delay={100} className="bg-dark-2/60 p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="max-w-lg">
            <div className="mb-8 flex items-center gap-4" aria-hidden="true">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-mono-vo text-sm font-bold text-accent-ink">
                1
              </span>
              <span className="h-px flex-1 bg-dark-line" />
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-dark-line font-mono-vo text-sm text-on-dark-dim">
                2
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold leading-snug text-on-dark sm:text-3xl">
              Submit your details &amp; get a{" "}
              <span
                style={{ fontFamily: "var(--font-accent-serif)" }}
                className="italic text-accent-bright"
              >
                callback
              </span>{" "}
              shortly
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input name="name" type="text" placeholder="Your name" required className={inputClass} />
              <input name="phone" type="tel" placeholder="Phone number" required className={inputClass} />
              <input name="email" type="email" placeholder="Email address" className={inputClass} />
              <textarea
                name="goal"
                placeholder="What are you looking to grow?"
                rows={3}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-accent to-accent-bright py-4 text-center font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Send message →
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
