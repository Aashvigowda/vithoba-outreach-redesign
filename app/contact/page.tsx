import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ServicesBanner from "@/components/ServicesBanner";
import ContactForm from "@/components/ContactForm";
import { breadcrumbSchema } from "@/lib/schema";
import { contact } from "@/lib/content";
import { jakarta } from "../services/fonts";
import shared from "../services/services.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Vithoba Outreach | Digital Marketing Agency in Mysuru",
  description:
    "Contact Vithoba Outreach in Kuvempu Nagara, Mysuru. Call, email or WhatsApp us to talk about strategy, social media, ads, websites and lead generation.",
  alternates: { canonical: "/contact" },
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    contact.address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const cards = [
    {
      icon: (
        <svg {...iconProps}>
          <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.3 6.4 11.6 6.7 11.9a1.1 1.1 0 0 0 1.6 0c.3-.3 6.7-6.6 6.7-11.9A7.5 7.5 0 0 0 12 2Zm0 10.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
        </svg>
      ),
      title: <>Our Address</>,
      text: (
        <>
          {contact.addressLine1},
          <br /> {contact.city} – {contact.postalCode}
        </>
      ),
    },
    {
      icon: (
        <svg {...iconProps}>
          <path d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v.3l-10 6.3L2 6.8v-.3A1.5 1.5 0 0 1 3.5 5ZM2 9.1V17.5A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5V9.1l-9.5 6a1 1 0 0 1-1 0L2 9.1Z" />
        </svg>
      ),
      title: <a href={contact.emailHref}>{contact.email}</a>,
      text: (
        <>
          Email us anytime with
          <br /> any kind of query.
        </>
      ),
    },
    {
      icon: (
        <svg {...iconProps}>
          <path d="M6.6 2.5c.5-.4 1.3-.3 1.7.2l2.3 3a1.3 1.3 0 0 1-.1 1.7L9 8.9a.8.8 0 0 0-.2.9 13 13 0 0 0 5.4 5.4c.3.2.7.1.9-.2l1.5-1.5c.5-.5 1.2-.5 1.7-.1l3 2.3c.5.4.6 1.2.2 1.7l-1.4 1.9c-.8 1-2.1 1.5-3.4 1.2C9.9 19.3 4.7 14.1 3.4 7.3c-.3-1.3.2-2.6 1.2-3.4l2-1.4Z" />
        </svg>
      ),
      title: (
        <>
          Call: <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
        </>
      ),
      text: (
        <>
          Call us for any kind of support,
          <br /> we&rsquo;re happy to talk.
        </>
      ),
    },
  ];

  return (
    <div className={`${jakarta.variable} ${shared.page}`}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />

      <ServicesBanner
        title="Contact Us"
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact Us" }]}
      />

      {/* 1. Info cards */}
      <section className={shared.sectionPadding}>
        <div className={shared.container}>
          <div className={styles.infoGrid}>
            {cards.map((card, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>{card.icon}</div>
                  <div className={styles.infoContent}>
                    <h3>{card.title}</h3>
                    <p className={styles.infoText}>{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Map + enquiry form */}
      <section className={`${styles.contactSection} ${shared.sectionPadding}`}>
        <div className={shared.container}>
          <div className={styles.contactRow}>
            <Reveal>
              <iframe
                src={mapSrc}
                title="Vithoba Outreach office location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapFrame}
              />
            </Reveal>
            <div className={styles.contactContent}>
              <Reveal>
                <h2>Ready to Get Started?</h2>
                <p>
                  Tell us about your business and what you&rsquo;re trying to grow.
                  We&rsquo;ll get back to you with a clear next step.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
