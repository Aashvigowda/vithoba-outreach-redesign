"use client";

import { waLink, waMessages } from "@/lib/content";
import styles from "@/app/contact/contact.module.css";

// The site has no mail backend, so — like CallbackForm — the enquiry is
// handed to WhatsApp as a pre-filled message.
export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    const text = [
      waMessages.knowMore,
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <form className={styles.formItems} onSubmit={handleSubmit}>
      <div className={styles.formClt}>
        <label htmlFor="contact-name">Your name*</label>
        <input id="contact-name" type="text" name="name" placeholder="Your Name" autoComplete="name" required />
      </div>
      <div className={styles.formClt}>
        <label htmlFor="contact-email">Your email*</label>
        <input id="contact-email" type="email" name="email" placeholder="Your Email" autoComplete="email" required />
      </div>
      <div className={`${styles.formClt} ${styles.full}`}>
        <label htmlFor="contact-message">Write message*</label>
        <textarea id="contact-message" name="message" placeholder="Tell us what you're trying to grow" required />
      </div>
      <div className={styles.full}>
        <button type="submit" className={styles.submitBtn}>
          Send Message
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
          </svg>
        </button>
        <p className={styles.formNote}>Opens WhatsApp with your message ready to send.</p>
      </div>
    </form>
  );
}
