import Link from "next/link";
import Reveal from "./Reveal";
import styles from "@/app/services/services.module.css";

// Rounded breadcrumb banner from the template, shared by /services and each
// service page. The last crumb is the current page.
export default function ServicesBanner({
  title,
  crumbs,
}: {
  title: string;
  crumbs: { name: string; href?: string }[];
}) {
  return (
    <section className={styles.breadcrumb}>
      <div className={styles.bcLeftShape} aria-hidden="true">
        <svg width="140" height="330" viewBox="0 0 140 330" fill="none">
          <path d="M0 0c80 40 120 110 90 170S60 290 0 330Z" fill="#d4af37" fillOpacity=".12" />
          <circle cx="40" cy="120" r="7" fill="#d4af37" fillOpacity=".55" />
          <circle cx="70" cy="215" r="4" fill="#12341f" fillOpacity=".35" />
        </svg>
      </div>
      <div className={styles.bcRightShape} aria-hidden="true">
        <svg width="250" height="448" viewBox="0 0 250 448" fill="none">
          <path d="M250 0C150 60 40 110 70 200s90 130 30 248h150Z" fill="#12341f" fillOpacity=".05" />
          <path d="M250 60c-80 50-150 110-110 190s60 120 30 198h80Z" fill="#12341f" fillOpacity=".05" />
          <circle cx="140" cy="205" r="36" fill="#12341f" />
          <circle cx="140" cy="205" r="26" fill="#fff" />
          <circle cx="140" cy="205" r="17" fill="#d4af37" />
          <circle cx="140" cy="205" r="7" fill="#fff" />
          <path d="M142 203 196 181" stroke="#4d5445" strokeWidth="4" strokeLinecap="round" />
          <path d="m190 172 16 4-6 12-12-4Z" fill="#d4af37" />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.pageHeading}>
          <Reveal>
            <h1>{title}</h1>
          </Reveal>
          <Reveal delay={150}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumbItems}>
                {crumbs.map((c, i) => (
                  <li key={c.name} className={styles.crumb}>
                    {i > 0 && (
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 3 5 5-5 5" />
                      </svg>
                    )}
                    {c.href ? (
                      <Link href={c.href}>{c.name}</Link>
                    ) : (
                      <span aria-current="page">{c.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
