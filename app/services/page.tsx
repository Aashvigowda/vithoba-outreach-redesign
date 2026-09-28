import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import JsonLd from "@/components/JsonLd";
import ServicesBanner from "@/components/ServicesBanner";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesProcessSlider from "@/components/ServicesProcessSlider";
import { breadcrumbSchema } from "@/lib/schema";
import { services, site, waLink, waMessages } from "@/lib/content";
import { jakarta } from "./fonts";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Mysuru | Vithoba Outreach",
  description:
    "Digital marketing services in Mysuru: strategy, social media, Google & Meta Ads, websites, branding and lead generation, run as one system by Vithoba Outreach.",
  alternates: { canonical: "/services" },
};

const whyPoints = [
  ["Strategy, content, ads and automation as one system", "Managed end-to-end"],
  ["Monthly reporting and strategy calls", "Based in Mysuru, working across India"],
];

function Check() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M7.384 14.18a.33.33 0 0 1-.226-.1L1.066 7.49a.33.33 0 0 1 .226-.516h2.932c.088 0 .174.037.232.106l2.036 2.342c.22-.47.646-1.253 1.393-2.208 1.105-1.41 3.16-3.486 6.677-5.359a.33.33 0 0 1 .334.515c-.013.01-1.37 1.078-2.93 3.034-1.436 1.8-3.345 4.742-4.284 8.541a.33.33 0 0 1-.298.235Z"
        fill="#12341f"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className={`${jakarta.variable} ${styles.page}`}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <ServicesBanner
        title="Our Services"
        crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />

      {/* 2. Service grid */}
      <section className={`${styles.serviceSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <ServicesGrid />
        </div>
      </section>

      {/* 3. Results split */}
      <section className={`${styles.resultsSection} ${styles.sectionPadding}`}>
        <div className={styles.floatShape} aria-hidden="true">
          <svg width="150" height="200" viewBox="0 0 150 200" fill="none">
            <path d="M75 10c28 20 40 58 34 100H41C35 68 47 30 75 10Z" fill="#12341f" />
            <circle cx="75" cy="70" r="14" fill="#f8f4e8" />
            <circle cx="75" cy="70" r="8" fill="#c9971f" />
            <path d="M41 110 22 140l26-8M109 110l19 30-26-8" fill="#c9971f" />
            <path d="M60 116h30l-6 26c-3 12-15 12-18 0Z" fill="#e0b23a" fillOpacity=".8" />
          </svg>
        </div>
        <div className={styles.floatShape2} aria-hidden="true">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            <rect x="14" y="40" width="92" height="104" rx="14" fill="#fff" stroke="#e5e5e5" />
            <rect x="30" y="100" width="12" height="28" rx="3" fill="#c9971f" />
            <rect x="54" y="84" width="12" height="44" rx="3" fill="#12341f" />
            <rect x="78" y="64" width="12" height="64" rx="3" fill="#c9971f" />
          </svg>
        </div>
        <div className={styles.container}>
          <div className={styles.resultsWrapper}>
            <Reveal>
              <div className={styles.resultsLeft}>
                <div className={styles.resultsCard}>
                  <CountUp value={services.length} className={styles.count} />
                  <h3>Growth Disciplines</h3>
                  <p>Strategy, creative, performance and technology, planned to work together.</p>
                </div>
                <div className={styles.resultsThumb} aria-hidden="true">
                  <svg viewBox="0 0 200 163" fill="none">
                    <rect width="200" height="163" rx="10" fill="#fff" />
                    <text x="16" y="28" fontSize="13" fill="#4d5445" fontFamily="inherit">Growth</text>
                    <rect x="124" y="14" width="62" height="22" rx="6" fill="#f7f3e6" />
                    <text x="134" y="29" fontSize="10" fill="#12341f" fontFamily="inherit">Monthly ▾</text>
                    <text x="16" y="66" fontSize="30" fontWeight="800" fill="#12180f" fontFamily="inherit">Leads</text>
                    <path d="M14 118c16-2 22-30 40-30s22 22 40 20 22-34 40-34 22 34 52 44" stroke="#c9971f" strokeWidth="2.5" fill="none" />
                    <path d="M14 122c20 0 26-12 40-14s18-28 40-30 26 26 44 30 26 6 48 8" stroke="#12341f" strokeWidth="2.5" fill="none" />
                    <rect x="14" y="134" width="172" height="16" rx="3" fill="#f7f3e6" />
                    <rect x="22" y="139" width="150" height="6" rx="3" fill="#12341f" />
                  </svg>
                </div>
              </div>
            </Reveal>
            <div className={styles.teamContent}>
              <div className={styles.sectionTitle}>
                <Reveal>
                  <div className={styles.subTitle}>
                    <span>Why Vithoba Outreach</span>
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <h2>{site.tagline}</h2>
                </Reveal>
              </div>
              <Reveal delay={250}>
                <p>{site.positioning}</p>
              </Reveal>
              <Reveal delay={150}>
                <div className={styles.listItems}>
                  {whyPoints.map((col) => (
                    <ul key={col[0]}>
                      {col.map((item) => (
                        <li key={item}>
                          <Check />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={250}>
                <Link href="/about" className={styles.mainButton}>
                  <span className={styles.themeBtn}>Explore More</span>
                  <span className={styles.arrowBtn}>
                    <ArrowUpRight />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact CTA band */}
      <section className={`${styles.ctaSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.ctaWrapper}>
              <svg className={styles.ctaWaves} viewBox="0 0 500 323" fill="none" aria-hidden="true">
                {Array.from({ length: 14 }, (_, i) => (
                  <path
                    key={i}
                    d={`M0 ${64 - i * 2}C60 ${20 - i * 2} 160 ${10 + i} 220 ${120 + i * 3}S330 ${300 - i * 3} 480 ${150 + i * 7}`}
                    stroke="#fff"
                    strokeOpacity=".12"
                  />
                ))}
              </svg>
              <div className={styles.ctaImage}>
                <Image src="/logo.png" alt="" width={210} height={210} />
              </div>
              <div className={`${styles.sectionTitle} ${styles.ctaTitle}`}>
                <div className={`${styles.subTitle} ${styles.subTitleLight}`}>
                  <span>Contact Us</span>
                </div>
                <h2>
                  Ready to build what&rsquo;s next?
                  <br /> Tell us what you&rsquo;re trying to grow.
                </h2>
              </div>
              <a
                href={waLink(waMessages.bookCall)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.mainButton} ${styles.ctaButton}`}
              >
                <span className={styles.themeBtn}>Talk to a Specialist</span>
                <span className={styles.arrowBtn}>
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Testimonial-style slider, carrying the real 4-step process */}
      <section className={`${styles.testimonialSection} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialImage}>
              <Reveal>
                <Image
                  src="/hero-visual.png"
                  alt="Laptop and phone showing marketing performance dashboards, surrounded by social, ads and email icons"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 992px) 480px, 100vw"
                />
              </Reveal>
              <div className={styles.rocketShape} aria-hidden="true">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 4c10 7 14 20 12 34H18C16 24 20 11 30 4Z" fill="#12341f" />
                  <circle cx="30" cy="24" r="5" fill="#e0b23a" />
                  <path d="M18 38l-8 12 10-3M42 38l8 12-10-3M24 40h12l-2 10c-1 5-7 5-8 0Z" fill="#c9971f" />
                </svg>
              </div>
              <div className={styles.msgShape} aria-hidden="true">
                <svg width="70" height="56" viewBox="0 0 70 56" fill="none">
                  <path d="M8 2h54a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H26L12 54V44H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Z" fill="#fff" stroke="#e5e5e5" />
                  <circle cx="22" cy="23" r="4" fill="#c9971f" />
                  <circle cx="35" cy="23" r="4" fill="#12341f" />
                  <circle cx="48" cy="23" r="4" fill="#c9971f" />
                </svg>
              </div>
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.sectionTitle}>
                <Reveal>
                  <div className={styles.subTitle}>
                    <span>How We Work</span>
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <h2>Four stages behind every service we run</h2>
                </Reveal>
              </div>
              <ServicesProcessSlider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
