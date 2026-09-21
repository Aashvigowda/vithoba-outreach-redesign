import Button from "./Button";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import { contact, waLink, waMessages } from "@/lib/content";

export default function CTASection() {
  return (
    <section id="contact" className="wrap py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-10 rounded-3xl bg-dark px-8 py-14 text-on-dark sm:px-14 sm:py-16 md:flex-row md:items-center">
          <div>
            <p className="font-mono-vo eyebrow-dark mb-5">Start Here</p>
            <h2 className="font-display text-[clamp(2rem,5.5vw,3.4rem)] font-bold leading-[1.02] text-on-dark">
              Ready to build
              <br />
              what&rsquo;s next?
            </h2>
            <p className="mt-5 max-w-sm text-on-dark-dim">
              Tell us what you&rsquo;re trying to grow.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Magnetic>
              <Button href={waLink(waMessages.bookCall)} external variant="accent">
                Start a Conversation →
              </Button>
            </Magnetic>
            <div className="flex flex-col gap-1.5 text-sm text-on-dark-dim">
              <a href={contact.phoneHref} className="underline-link w-fit hover:text-on-dark">
                {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="underline-link w-fit hover:text-on-dark">
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
