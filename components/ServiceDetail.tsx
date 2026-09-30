import Link from "next/link";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import ServicesBanner from "./ServicesBanner";
import ServiceFaqAccordion from "./ServiceFaqAccordion";
import { serviceIcons } from "./icons";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { services, waLink, waMessages, type Service } from "@/lib/content";
import { jakarta } from "@/app/services/fonts";
import styles from "@/app/services/services.module.css";

// Service pages carry no pricing: sentences and FAQs about fees, costs or ad
// spend are dropped from the shared content before rendering.
const PRICING = /₹|\bprice|\bpricing|\bcost|\bfees?\b|ad spend|billed/i;

function withoutPricing(text: string) {
  return text
    .split(/(?<=\.)\s+/)
    .filter((sentence) => !PRICING.test(sentence))
    .join(" ");
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-3.97-3.03a.75.75 0 0 0-1.08.02L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05Z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

// Laid out after the template's /service/service-details page: banner,
// sticky "All Services" sidebar, content blocks, check-list and FAQ.
export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = serviceIcons[service.slug];
  const faqs = service.faqs.filter((f) => !PRICING.test(f.q) && !PRICING.test(f.a));
  const half = Math.ceil(service.included.length / 2);
  const columns = [service.included.slice(0, half), service.included.slice(half)];

  return (
    <div className={`${jakarta.variable} ${styles.page}`}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <ServicesBanner
        title={service.navLabel}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.navLabel },
        ]}
      />

      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.detailsRow}>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarWidget}>
                <div className={styles.widTitle}>
                  <h4>All Services</h4>
                </div>
                <ul className={styles.serviceCats}>
                  {services.map((s) => {
                    const active = s.slug === service.slug;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={active ? styles.catActive : undefined}
                          aria-current={active ? "page" : undefined}
                        >
                          {s.navLabel}
                          <ArrowRight />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.sidebarContact}>
                <h4>Need help choosing?</h4>
                <p>Tell us what you&rsquo;re trying to grow.</p>
                <a
                  href={waLink(waMessages.knowMore)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.mainButton} ${styles.ctaButton}`}
                >
                  <span className={styles.themeBtn}>Talk to Us</span>
                  <span className={styles.arrowBtn}>
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </aside>

            <div>
              <div className={styles.detailsContent}>
                <Reveal>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                  <p className={styles.mb5}>{service.whoFor}</p>
                </Reveal>

                <Reveal>
                  <h3>How We Work</h3>
                  <p className={styles.mb5}>{withoutPricing(service.howWeWork)}</p>
                </Reveal>

                <Reveal>
                  <div className={styles.detailsThumb}>
                    <svg className={styles.ctaWaves} viewBox="0 0 500 323" fill="none" aria-hidden="true">
                      {Array.from({ length: 14 }, (_, i) => (
                        <path
                          key={i}
                          d={`M0 ${64 - i * 2}C60 ${20 - i * 2} 160 ${10 + i} 220 ${120 + i * 3}S330 ${300 - i * 3} 480 ${150 + i * 7}`}
                          stroke="#fff"
                          strokeOpacity=".1"
                        />
                      ))}
                    </svg>
                    <div className={styles.thumbTop}>
                      <div className={styles.thumbIcon} aria-hidden="true">
                        <Icon />
                      </div>
                      <span className={styles.thumbNumber}>
                        {service.number} / {String(services.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className={styles.thumbTagline}>{service.tagline}</p>
                      <div className={styles.thumbChips}>
                        <span>{service.pillar}</span>
                        <span>{service.stage}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <h3>What&rsquo;s Included</h3>
                  <p>
                    Everything below is planned, built and managed by the Vithoba
                    Outreach team as part of this service.
                  </p>
                  <div className={styles.detailsList}>
                    {columns.map((col, i) => (
                      <ul key={i}>
                        {col.map((item) => (
                          <li key={item}>
                            <CheckCircle />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </Reveal>
              </div>

              {faqs.length > 0 && <ServiceFaqAccordion items={faqs} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
