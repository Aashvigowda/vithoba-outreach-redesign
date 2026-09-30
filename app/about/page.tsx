import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import JsonLd from "@/components/JsonLd";
import ServicesBanner from "@/components/ServicesBanner";
import AboutApproachSlider from "@/components/AboutApproachSlider";
import AboutPromiseSlider from "@/components/AboutPromiseSlider";
import {
  IconCalendarCheck,
  IconCompass,
  IconFilter,
  IconMegaphone,
  IconSearch,
  IconShare,
  IconSparkle,
  IconTrendingUp,
} from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { industries, process, services, waLink, waMessages } from "@/lib/content";
import { jakarta } from "../services/fonts";
import shared from "../services/services.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Vithoba Outreach | Digital Marketing Agency in Mysuru",
  description:
    "About Vithoba Outreach, a Mysuru digital marketing studio offering strategy, social media, ads, websites and automation for growing Indian businesses.",
  alternates: { canonical: "/about" },
};

const standFor = [
  {
    title: "Trust the strategy",
    text: "We audit before we recommend, and match plans to your budget rather than a generic package.",
  },
  {
    title: "Report every month",
    text: "So the plan stays honest, and evolves with what the data actually shows.",
  },
  {
    title: "One accountable partner",
    text: "Instead of juggling several freelancers across strategy, content, ads and follow-up.",
  },
];

const values = [
  { title: "Clarity", text: "Know what we're trying to achieve.", Icon: IconCompass },
  { title: "Creativity", text: "Make the business impossible to ignore.", Icon: IconSparkle },
  { title: "Conversion", text: "Turn attention into action.", Icon: IconFilter },
  { title: "Learning", text: "Use performance to improve the next move.", Icon: IconTrendingUp },
];

const counters = [
  { value: services.length, label: "Growth Disciplines" },
  { value: process.length, label: "Stage Process" },
  { value: industries.length, label: "Industry Specialisms" },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  );
}

function Waves({ className, count = 16 }: { className: string; count?: number }) {
  return (
    <svg className={className} viewBox="0 0 1920 340" preserveAspectRatio="none" fill="none" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 8}C300 ${20 + i * 6} 600 ${360 - i * 6} 900 ${200 - i * 4}S1500 ${-20 + i * 9} 1920 ${140 + i * 10}`}
          stroke="#fff"
          strokeOpacity=".07"
        />
      ))}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className={`${jakarta.variable} ${shared.page}`}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <ServicesBanner
        title="About Us"
        crumbs={[{ name: "Home", href: "/" }, { name: "About Us" }]}
      />

      {/* 1. About split */}
      <section className={`${styles.aboutSection} ${shared.sectionPadding}`}>
        <div className={shared.container}>
          <div className={styles.aboutRow}>
            <Reveal>
              <div className={styles.aboutImage}>
                <div className={styles.archPhoto}>
                  <Image
                    src="/about-team.png"
                    alt="The Vithoba Outreach team reviewing campaign results together on a laptop"
                    fill
                    priority
                    sizes="(min-width: 992px) 700px, 100vw"
                  />
                </div>
                <div className={styles.boxShape} aria-hidden="true">
                  <svg width="150" height="118" viewBox="0 0 150 118" fill="none">
                    <rect x=".5" y=".5" width="149" height="117" rx="14" fill="#fff" stroke="#e5e5e5" />
                    <text x="18" y="32" fontSize="12" fill="#4d5445" fontFamily="inherit">Monthly report</text>
                    <rect x="18" y="74" width="14" height="26" rx="3" fill="#c9971f" fillOpacity=".5" />
                    <rect x="42" y="62" width="14" height="38" rx="3" fill="#c9971f" fillOpacity=".75" />
                    <rect x="66" y="50" width="14" height="50" rx="3" fill="#12341f" />
                    <rect x="90" y="58" width="14" height="42" rx="3" fill="#c9971f" />
                    <rect x="114" y="44" width="14" height="56" rx="3" fill="#12341f" />
                  </svg>
                </div>
                <div className={styles.gapShape} aria-hidden="true">
                  <svg width="190" height="120" viewBox="0 0 190 120" fill="none">
                    <rect x=".5" y=".5" width="189" height="119" rx="14" fill="#fff" stroke="#e5e5e5" />
                    <text x="18" y="30" fontSize="12" fill="#4d5445" fontFamily="inherit">Enquiries</text>
                    <path d="M18 92c20-2 26-26 46-26s24 16 44 14 22-38 64-40" stroke="#12341f" strokeWidth="3" strokeLinecap="round" />
                    <path d="M18 100c24 0 34-12 52-14s26 6 46 2 30-22 56-26" stroke="#c9971f" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <Link href="/services" className={styles.circleButton} aria-label="See our services">
                  <ArrowUpRight />
                  <span className={styles.textCircle} aria-hidden="true">
                    <svg viewBox="0 0 110 110">
                      <defs>
                        <path id="about-text-circle" d="M55 55m-43 0a43 43 0 1 1 86 0a43 43 0 1 1-86 0" />
                      </defs>
                      <text fontSize="10.5" fontWeight="700" letterSpacing="2.4" fill="#14150e">
                        <textPath href="#about-text-circle">VITHOBA OUTREACH • MYSURU • </textPath>
                      </text>
                    </svg>
                  </span>
                </Link>
              </div>
            </Reveal>

            <div className={styles.aboutContent}>
              <div className={shared.sectionTitle}>
                <Reveal>
                  <div className={shared.subTitle}>
                    <span>About Vithoba Outreach</span>
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <h2>We believe marketing should move business.</h2>
                </Reveal>
              </div>
              <Reveal delay={250}>
                <p>
                  Vithoba Outreach is a digital marketing studio based in Mysuru, Karnataka.
                  We plan, build and run the marketing engine for ambitious Indian businesses:
                  strategy, content, ads and automation working as one system. We work with{" "}
                  <Link href="/industries/real-estate">real estate</Link>,{" "}
                  <Link href="/industries/construction">construction</Link> and local businesses
                  across Mysuru and India.
                </p>
              </Reveal>
              <div className={styles.iconItemsArea}>
                {[
                  { ...standFor[0], Icon: IconSearch },
                  { ...standFor[1], Icon: IconCalendarCheck },
                ].map(({ title, text, Icon }, i) => (
                  <Reveal key={title} delay={i * 150}>
                    <div className={styles.iconItems}>
                      <div className={styles.iconBox} aria-hidden="true">
                        <Icon />
                      </div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <div className={styles.aboutButton}>
                  <Link href="/services" className={shared.mainButton}>
                    <span className={shared.themeBtn}>Our Services</span>
                    <span className={shared.arrowBtn}>
                      <ArrowUpRight />
                    </span>
                  </Link>
                  <a
                    href={waLink(waMessages.bookCall)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textLink}
                  >
                    Book a Free Call
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Counter band */}
      <section className={`${styles.counterSection} ${shared.sectionPadding}`}>
        <Waves className={styles.counterWaves} />
        <div className={shared.container}>
          <div className={styles.titleArea}>
            <div className={shared.sectionTitle}>
              <Reveal>
                <div className={`${shared.subTitle} ${shared.subTitleLight}`}>
                  <span>At a Glance</span>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <h2>
                  Strategy, creative and
                  <br /> performance, as one system
                </h2>
              </Reveal>
            </div>
            <div className={styles.counterBoxArea}>
              {counters.map((c, i) => (
                <Reveal key={c.label} delay={i * 150}>
                  <div className={styles.counterText}>
                    <CountUp value={c.value} className={styles.counterNumber} />
                    <p>{c.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className={styles.videoImage}>
              <Image
                src="/about-glance.png"
                alt="Desk with a laptop showing a performance dashboard, a target and Strategy, Growth and Industry Specialisms icons, and a notebook reading Plan, Execute, Grow"
                fill
                sizes="(min-width: 1320px) 1290px, 100vw"
              />
              <a
                href={waLink(waMessages.knowMore)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoIcon}
                aria-label="Start a conversation with Vithoba Outreach on WhatsApp"
              >
                <ArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Values */}
      <section className={`${styles.valueSection} ${shared.sectionPadding}`}>
        <div className={shared.container}>
          <div className={`${shared.sectionTitle} ${styles.valueTitle}`}>
            <Reveal>
              <h2>Our values</h2>
            </Reveal>
          </div>
          <div className={styles.valueGrid}>
            {values.map(({ title, text, Icon }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className={styles.valueBox}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team-style slider, carrying the real 4-step approach */}
      <section className={shared.sectionPadding}>
        <div className={shared.container}>
          <AboutApproachSlider
            title={
              <>
                <div className={shared.sectionTitle}>
                  <div className={shared.subTitle}>
                    <span>Our Approach</span>
                  </div>
                  <h2>
                    Discover. Plan.
                    <br /> Launch. Grow.
                  </h2>
                </div>
                <p>
                  The same four stages every time, so nothing gets lost between
                  strategy and execution.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* 5. Centred quote slider, carrying what we stand for */}
      <section className={`${styles.quoteSection} ${shared.sectionPadding}`}>
        <div className={shared.container}>
          <div className={styles.quoteWrapper}>
            <div className={styles.client1} aria-hidden="true"><IconShare /></div>
            <div className={styles.client2} aria-hidden="true"><IconMegaphone /></div>
            <div className={styles.client3} aria-hidden="true"><IconSearch /></div>
            <div className={styles.client4} aria-hidden="true"><IconTrendingUp /></div>
            <div className={styles.quoteContent}>
              <div className={shared.subTitle}>
                <span>What We Stand For</span>
              </div>
              <div className={styles.quoteIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="currentColor">
                  <path d="M10 36c-3-3-4-6-4-10 0-7 5-13 12-16l2 3c-5 3-7 6-7 9 1 0 2-1 3-1 4 0 7 3 7 7s-3 8-7 8c-3 0-5-1-6 0Zm20 0c-3-3-4-6-4-10 0-7 5-13 12-16l2 3c-5 3-7 6-7 9 1 0 2-1 3-1 4 0 7 3 7 7s-3 8-7 8c-3 0-5-1-6 0Z" />
                </svg>
              </div>
              <AboutPromiseSlider items={standFor} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
