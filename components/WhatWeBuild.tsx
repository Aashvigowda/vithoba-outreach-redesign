import Link from "next/link";
import Reveal from "./Reveal";
import { AdMockup, BrandMockup } from "./CampaignMockups";
import { getService } from "@/lib/content";

// No case studies exist in the project, so this section shows real project
// categories and real service copy instead of fabricated clients/results —
// the honest fallback the brief asks for when there is no proof to show.
const website = getService("website-development")!;
const googleAds = getService("google-ads")!;
const metaAds = getService("meta-ads")!;
const branding = getService("branding")!;
const social = getService("social-media-marketing")!;

export default function WhatWeBuild() {
  return (
    <section className="bg-bg-2 py-20 text-on-dark md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow-dark font-mono-vo mb-6">04 / What We Build</p>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3rem)] font-bold uppercase leading-[1.1] text-on-dark">
            Good marketing
            <br />
            should be visible.
          </h2>
        </Reveal>

        {/* Featured category — 70/30 visual/info */}
        <Reveal delay={120} className="mt-16 grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14">
          <div className="overflow-hidden rounded-2xl border border-dark-line bg-[#12130d] p-6 md:p-10">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-on-dark-dim" />
              <span className="h-2.5 w-2.5 rounded-full bg-on-dark-dim" />
              <span className="h-2.5 w-2.5 rounded-full bg-on-dark-dim" />
              <span className="ml-2 h-2.5 flex-1 rounded-full bg-bg-2" />
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <span className="block h-5 w-3/4 rounded bg-on-dark" />
                <span className="mt-3 block h-2.5 w-full rounded-full bg-on-dark-dim/40" />
                <span className="mt-2 block h-2.5 w-4/5 rounded-full bg-on-dark-dim/40" />
                <span className="mt-6 inline-block rounded-full bg-accent-bright px-5 py-2 text-xs font-bold text-accent-ink">
                  Enquire Now
                </span>
              </div>
              <span className="h-32 rounded-lg bg-gradient-to-br from-accent-bright/25 to-transparent sm:h-full" />
            </div>
          </div>

          <div>
            <p className="font-mono-vo text-[11px] uppercase tracking-widest text-accent-bright">
              Featured
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold uppercase text-on-dark md:text-[1.75rem]">
              Websites &amp; Landing Pages
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-on-dark-dim">{website.intro}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-on-dark-dim">
              <span className="font-semibold text-on-dark">Who it&rsquo;s for: </span>
              {website.whoFor}
            </p>
            <Link
              href={`/services/${website.slug}`}
              className="underline-link mt-5 inline-block text-sm font-semibold text-on-dark hover:text-accent-bright"
            >
              See Website Development →
            </Link>
          </div>
        </Reveal>

        {/* Two secondary categories, asymmetric magazine spreads */}
        <div className="mt-20 grid gap-16 border-t border-dark-line pt-16 md:grid-cols-2 md:gap-14">
          <Reveal delay={80} className="flex flex-col gap-6">
            <AdMockup className="w-52" />
            <div>
              <h3 className="font-display text-2xl font-bold uppercase text-on-dark md:text-3xl">
                Ad Campaigns
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-on-dark-dim">
                {googleAds.tagline} {metaAds.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <Link href={`/services/${googleAds.slug}`} className="underline-link text-sm font-semibold text-on-dark hover:text-accent-bright">
                  Google Ads →
                </Link>
                <Link href={`/services/${metaAds.slug}`} className="underline-link text-sm font-semibold text-on-dark hover:text-accent-bright">
                  Meta Ads →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="flex flex-col gap-6 md:items-end md:text-right">
            <BrandMockup className="w-52" />
            <div className="md:max-w-sm">
              <h3 className="font-display text-2xl font-bold uppercase text-on-dark md:text-3xl">
                Brand &amp; Content Systems
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-on-dark-dim">
                {branding.tagline} {social.intro}
              </p>
              <div className="mt-4 flex flex-wrap justify-end gap-x-6 gap-y-2">
                <Link href={`/services/${branding.slug}`} className="underline-link text-sm font-semibold text-on-dark hover:text-accent-bright">
                  Branding →
                </Link>
                <Link href={`/services/${social.slug}`} className="underline-link text-sm font-semibold text-on-dark hover:text-accent-bright">
                  Social Media →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
