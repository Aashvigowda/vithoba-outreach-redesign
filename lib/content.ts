// Single source of truth for all business content.
// Every fact here is carried over from the existing Vithoba Outreach site — nothing invented.

export const site = {
  name: "Vithoba Outreach",
  domain: "https://www.vithobaoutreach.com",
  tagline: "Trust the strategy, grow with Vithoba.",
  positioning:
    "Vithoba Outreach plans, builds and runs the marketing engine for ambitious Indian businesses — strategy, content, ads and automation working as one system.",
  city: "Mysuru",
  region: "Karnataka",
  country: "India",
};

export const contact = {
  address: "1st Floor, 661, M Block, Kuvempu Nagara, Mysuru – 570023",
  addressLine1: "1st Floor, 661, M Block, Kuvempu Nagara",
  city: "Mysuru",
  postalCode: "570023",
  region: "Karnataka",
  phoneDisplay: "+91 63607 16904",
  phoneHref: "tel:+916360716904",
  email: "vithobaoutreach@gmail.com",
  emailHref: "mailto:vithobaoutreach@gmail.com",
  whatsappNumber: "916360716904",
  socials: {
    linkedin: "https://www.linkedin.com/in/vithoba-outreach-3a1531430",
    instagram: "https://www.instagram.com/vithoba.outreach",
    facebook: "https://www.facebook.com/vithoba.outreach",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  bookCall: "Hi Vithoba Outreach, I'd like to book a free call.",
  knowMore: "Hi Vithoba Outreach, I'd like to know more.",
  quote: "Hi Vithoba Outreach, I'd like to get a quote for your services.",
  callback: "Hi Vithoba Outreach, I'd like a callback.",
};

export const process = [
  {
    step: "01",
    name: "Discover",
    text: "We audit what exists – your brand, channels and competitors – before recommending anything.",
    tag: "No guesswork",
  },
  {
    step: "02",
    name: "Plan",
    text: "A clear strategy and calendar, matched to your budget and the package that fits.",
    tag: "Matched to budget",
  },
  {
    step: "03",
    name: "Launch",
    text: "Content, ads, pages and automations go live – built and managed end-to-end.",
    tag: "Managed end-to-end",
  },
  {
    step: "04",
    name: "Grow",
    text: "Monthly reporting and strategy calls keep the plan honest, and evolving with results.",
    tag: "Reported monthly",
  },
] as const;

export type Package = {
  id: string;
  name: string;
  badge?: string;
  audience: string;
  priceLow: string;
  priceHigh: string;
  items: string[];
  featured: boolean;
};

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "For small businesses testing marketing for the first time.",
    priceLow: "₹15,000",
    priceHigh: "₹20,000/mo",
    items: [
      "Social media management",
      "Basic content – posts + 1 reel/week",
      "Basic ads management",
      "Monthly report",
    ],
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most sold",
    audience: "For businesses that want consistent leads, not just visibility.",
    priceLow: "₹25,000",
    priceHigh: "₹40,000/mo",
    items: [
      "Social media + content",
      "Google & Meta ads",
      "Lead generation setup",
      "Monthly strategy call",
      "Performance reporting",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    audience: "For businesses that want complete, hands-off marketing support.",
    priceLow: "₹50,000",
    priceHigh: "+/mo",
    items: [
      "Strategy + social media",
      "Google Ads + Meta Ads",
      "Content production",
      "Lead generation",
      "WhatsApp / email automation",
      "Full monthly reporting",
    ],
    featured: false,
  },
] as const;

export const adSpendNote =
  "Ad spend is always billed separately from our service fee.";

export const pillars = ["Strategy", "Creative", "Performance", "Technology"] as const;
export type Pillar = (typeof pillars)[number];

export type Service = {
  number: string;
  slug: string;
  title: string; // full SEO H1 / page title stem
  navLabel: string; // short label for editorial nav
  tagline: string; // punchy positioning line, compressed from real copy
  stage: string; // conceptual growth-stage label
  pillar: Pillar;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  included: string[];
  whoFor: string;
  howWeWork: string;
  faqs: { q: string; a: string }[];
  related: string[]; // service slugs
};

export const services: Service[] = [
  {
    number: "01",
    slug: "digital-marketing",
    title: "Digital Marketing Services in Mysuru",
    navLabel: "Digital Marketing",
    tagline: "Your entire growth system, planned as one.",
    stage: "The System",
    pillar: "Strategy",
    seoTitle: "Digital Marketing Services in Mysuru | Vithoba Outreach",
    seoDescription:
      "Digital marketing services in Mysuru: strategy, social media, Google & Meta Ads, websites and automation, run as one system by Vithoba Outreach.",
    intro:
      "Vithoba Outreach is a digital marketing agency in Mysuru. We plan, build and run the whole marketing engine for your business, so strategy, content, ads and follow-up work together instead of in silos.",
    included: [
      "Marketing strategy and brand strategy",
      "Competitor analysis and marketing audit",
      "Social media, content and creative",
      "Google Ads and Meta Ads",
      "Landing pages and website conversion work",
      "Lead generation and WhatsApp / email automation",
      "Monthly reporting and strategy calls",
    ],
    whoFor:
      "Local and growing businesses in Mysuru and across India that want consistent leads rather than just visibility, and prefer one accountable partner over several freelancers.",
    howWeWork:
      "We follow four stages every time: Discover (audit your brand, channels and competitors), Plan (strategy and calendar matched to budget), Launch (content, ads, pages and automations go live) and Grow (monthly reporting and strategy calls).",
    faqs: [
      {
        q: "Do you provide digital marketing services in Mysuru?",
        a: "Yes. Vithoba Outreach is headquartered in Kuvempu Nagara, Mysuru, and works with businesses in Mysuru and across India.",
      },
      {
        q: "How soon will I see results?",
        a: "Most clients see visibility and engagement improve within the first 3 to 6 weeks. Lead and sales growth usually builds over 60 to 90 days as campaigns are tested and optimised.",
      },
    ],
    related: ["social-media-marketing", "google-ads", "lead-generation"],
  },
  {
    number: "02",
    slug: "social-media-marketing",
    title: "Social Media Marketing Agency in Mysuru",
    navLabel: "Social Media",
    tagline: "A brand that shows up, on purpose.",
    stage: "Attention",
    pillar: "Creative",
    seoTitle: "Social Media Marketing Agency in Mysuru | Vithoba Outreach",
    seoDescription:
      "Social media marketing in Mysuru: Instagram, Facebook and LinkedIn management with a planned content calendar of posts, reels and stories.",
    intro:
      "We manage your Instagram, Facebook and LinkedIn presence with a planned content calendar, so your brand shows up consistently and gives people a reason to enquire.",
    included: [
      "Instagram, Facebook and LinkedIn management",
      "Monthly content calendar",
      "Posts, reels and stories",
      "Graphic design and reel editing",
      "Community-facing brand voice",
      "Monthly performance report",
    ],
    whoFor:
      "Businesses that need a steady, on-brand social presence without hiring an in-house team.",
    howWeWork:
      "We audit your current profiles, plan a calendar around your offers and audience, produce and publish the content, and review what worked each month.",
    faqs: [
      {
        q: "Do you also create the content?",
        a: "Yes. Posts, reels, stories and ad creatives are designed and edited by our team as part of the plan or as add-ons.",
      },
      {
        q: "Can social media management include ads?",
        a: "Yes. Our Growth and Premium packages combine social media with Google and Meta Ads.",
      },
    ],
    related: ["branding", "meta-ads", "digital-marketing"],
  },
  {
    number: "03",
    slug: "google-ads",
    title: "Google Ads Agency in Mysuru",
    navLabel: "Google Ads",
    tagline: "Meet people the moment they search.",
    stage: "Interest → Leads",
    pillar: "Performance",
    seoTitle: "Google Ads Agency in Mysuru | Vithoba Outreach",
    seoDescription:
      "Google Ads management in Mysuru: search, display and remarketing campaigns with proper conversion tracking, managed and optimised by Vithoba Outreach.",
    intro:
      "We set up and manage Google Ads campaigns that put your business in front of people already searching for what you offer, and track what those clicks turn into.",
    included: [
      "Search, display and remarketing campaigns",
      "Account structure and conversion tracking setup",
      "Keyword and audience research",
      "Ad copy and landing page recommendations",
      "Ongoing optimisation",
      "Monthly reporting",
    ],
    whoFor:
      "Businesses that want enquiries from high-intent searches, such as local services, real estate and construction.",
    howWeWork:
      "We start with tracking and account structure, launch focused campaigns, then test and optimise on real data. Ad spend goes directly to Google and is billed separately from our fee.",
    faqs: [
      {
        q: "Is ad spend included in your fees?",
        a: "No. Our fee covers strategy, management and execution. Ad spend is paid separately and goes directly to your campaigns.",
      },
      {
        q: "Do you offer a one-time Google Ads setup?",
        a: "Yes. A Google Ads setup covers account structure, conversion tracking and first campaigns.",
      },
    ],
    related: ["meta-ads", "lead-generation", "website-development"],
  },
  {
    number: "04",
    slug: "meta-ads",
    title: "Meta Ads Agency in Mysuru (Facebook & Instagram)",
    navLabel: "Meta Ads",
    tagline: "Reach the right audience before they even search.",
    stage: "Attention → Interest",
    pillar: "Performance",
    seoTitle: "Meta Ads Agency in Mysuru | Vithoba Outreach",
    seoDescription:
      "Facebook and Instagram (Meta) Ads management in Mysuru: pixel setup, audiences, creative rotation and optimisation by Vithoba Outreach.",
    intro:
      "We run Facebook and Instagram ad campaigns built around your audience and offer, from pixel and audience setup to creative rotation and optimisation.",
    included: [
      "Pixel and audience setup",
      "Campaign structure and targeting",
      "Ad creatives and creative rotation",
      "Lead ads and WhatsApp click ads",
      "Remarketing",
      "Optimisation and reporting",
    ],
    whoFor:
      "Businesses that want to reach new audiences and generate leads on Facebook and Instagram.",
    howWeWork:
      "We set up tracking and audiences first, launch tested creatives, and shift budget toward what produces leads. Ad spend is billed separately.",
    faqs: [
      {
        q: "What is the difference between Google Ads and Meta Ads?",
        a: "Google Ads reach people actively searching, while Meta Ads reach people browsing Facebook and Instagram based on interests and behaviour. Many businesses use both.",
      },
      {
        q: "Do you make the ad creatives?",
        a: "Yes. Ad creatives and video ads can be part of your plan or added on.",
      },
    ],
    related: ["google-ads", "lead-generation", "social-media-marketing"],
  },
  {
    number: "05",
    slug: "seo",
    title: "SEO Services in Mysuru",
    navLabel: "SEO",
    tagline: "Get found before your competitors do.",
    stage: "Attention",
    pillar: "Technology",
    seoTitle: "SEO Services in Mysuru | Vithoba Outreach",
    seoDescription:
      "SEO services in Mysuru: local SEO, on-page optimisation, content and Google Business Profile support to help local businesses get found on Google.",
    intro:
      "We help businesses get found on Google through clear on-page structure, helpful content and consistent local business information.",
    included: [
      "Local SEO and Google Business Profile support",
      "On-page optimisation: titles, headings, meta descriptions",
      "Service and location page planning",
      "Blog and content planning",
      "Search Console, sitemap and indexing setup",
      "Legitimate local citations and review guidance",
    ],
    whoFor:
      "Local businesses and service companies that want steady enquiries from Google, alongside or instead of paid ads.",
    howWeWork:
      "We audit your site and local presence, fix the basics, build pages around what customers search for, and track progress in Google Search Console. SEO takes time and we do not promise rankings.",
    faqs: [
      {
        q: "How long does SEO take?",
        a: "SEO builds gradually, typically over several months, depending on competition and how much your site needs.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No. Nobody can honestly guarantee rankings. We focus on the work that improves your chances and report on progress.",
      },
    ],
    related: ["website-development", "digital-marketing", "google-ads"],
  },
  {
    number: "06",
    slug: "lead-generation",
    title: "Lead Generation Agency in Mysuru",
    navLabel: "Lead Generation",
    tagline: "From ad click to enquiry to follow-up.",
    stage: "Leads → Conversion",
    pillar: "Performance",
    seoTitle: "Lead Generation Agency in Mysuru | Vithoba Outreach",
    seoDescription:
      "Lead generation in Mysuru: lead gen campaigns, landing page funnels, WhatsApp lead generation and follow-up automation by Vithoba Outreach.",
    intro:
      "We build the path from ad click to enquiry to follow-up, so leads are captured properly and do not go cold.",
    included: [
      "Lead generation campaigns on Google and Meta",
      "Landing page funnels",
      "WhatsApp lead generation",
      "Email marketing",
      "Lead follow-up automation",
      "CRM setup",
    ],
    whoFor:
      "Businesses that sell through enquiries, calls and site visits and need a reliable flow of qualified leads.",
    howWeWork:
      "We combine targeted ads, a focused landing page and automated WhatsApp or email follow-up, then review lead quality with you every month.",
    faqs: [
      {
        q: "How do you generate leads for businesses?",
        a: "By combining targeted Google and Meta campaigns with landing pages built to capture enquiries and automated follow-up.",
      },
      {
        q: "Can you set up WhatsApp follow-up?",
        a: "Yes. WhatsApp automation for replies and follow-ups is available as an add-on or within the Premium package.",
      },
    ],
    related: ["google-ads", "meta-ads", "website-development"],
  },
  {
    number: "07",
    slug: "website-development",
    title: "Website Development in Mysuru",
    navLabel: "Website Development",
    tagline: "Built to turn visitors into enquiries.",
    stage: "Interest → Conversion",
    pillar: "Technology",
    seoTitle: "Website Development in Mysuru | Vithoba Outreach",
    seoDescription:
      "Website design and development in Mysuru: responsive websites, landing pages and WordPress sites built for conversions by Vithoba Outreach.",
    intro:
      "We design and build responsive websites and landing pages that are clear, fast to use and built to turn visitors into enquiries.",
    included: [
      "Website design (including up to 4-page business sites)",
      "Landing pages for campaigns",
      "WordPress websites",
      "Conversion optimisation",
      "On-page SEO basics built in",
      "Mobile-first layouts",
    ],
    whoFor:
      "Businesses launching a new site, replacing an outdated one, or needing a focused page for an ad campaign.",
    howWeWork:
      "We agree the structure and goals, design the pages, build and test on mobile and desktop, and connect enquiry forms and WhatsApp click-to-chat.",
    faqs: [
      {
        q: "How much does a website cost?",
        a: "It depends on scope. Our pricing section lists indicative starting rates, and final pricing depends on pages, features and business size.",
      },
      {
        q: "Do you build landing pages separately?",
        a: "Yes. A single-purpose landing page can be built for any campaign, offer or product.",
      },
    ],
    related: ["seo", "branding", "lead-generation"],
  },
  {
    number: "08",
    slug: "branding",
    title: "Branding & Logo Design in Mysuru",
    navLabel: "Branding",
    tagline: "One identity, every channel.",
    stage: "Attention",
    pillar: "Creative",
    seoTitle: "Branding & Logo Design in Mysuru | Vithoba Outreach",
    seoDescription:
      "Branding and logo design in Mysuru: brand strategy, logo and brand identity so your business looks consistent everywhere. By Vithoba Outreach.",
    intro:
      "We create logos and core brand identity elements, backed by brand strategy, so your business looks and sounds consistent across every channel.",
    included: [
      "Brand strategy",
      "Logo design",
      "Core brand identity elements",
      "Social media and ad creative alignment",
      "Brand consistency across website and channels",
    ],
    whoFor:
      "New businesses starting out and established businesses that want a more consistent identity.",
    howWeWork:
      "We start by understanding your business, audience and competitors, then develop the identity and apply it across your channels.",
    faqs: [
      {
        q: "Do you do only logos?",
        a: "No. Logo and brand identity can be taken alone or combined with strategy, social media and ads.",
      },
      {
        q: "Can branding be combined with a monthly package?",
        a: "Yes. Branding can be a one-time project alongside a retainer.",
      },
    ],
    related: ["website-development", "social-media-marketing", "digital-marketing"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Industry = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  journey: string[];
  whatWeDo: string[];
  extra?: { heading: string; items: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    title: "Digital Marketing for Real Estate in Mysuru",
    seoTitle: "Real Estate Marketing Agency in Mysuru | Vithoba Outreach",
    seoDescription:
      "Digital marketing for real estate in Mysuru: property lead generation, Google & Meta Ads, landing pages and WhatsApp follow-up for builders and developers.",
    intro:
      "Vithoba Outreach helps builders, developers and property businesses generate and follow up on enquiries with Google Ads, Meta Ads, landing pages and WhatsApp automation.",
    journey: ["Search", "Discovery", "Enquiry", "Follow-up", "Site Visit", "Conversion"],
    whatWeDo: [
      "Property lead generation campaigns on Google and Meta",
      "Project landing pages built for enquiries and site-visit bookings",
      "WhatsApp lead follow-up so no enquiry goes cold",
      "Social media content for launches, progress updates and walkthroughs",
      "Reels, video and ad creatives for projects",
      "CRM setup and monthly lead reporting",
    ],
    extra: {
      heading: "Searches we help you show up for",
      items: [
        "Real estate marketing in Mysuru",
        "Property lead generation in Mysuru",
        "Real estate digital marketing",
        "Digital marketing for builders and developers",
      ],
    },
    faqs: [
      {
        q: "Do you work with real estate companies?",
        a: "Yes. We plan lead generation, ads, landing pages and follow-up for builders, developers and property businesses.",
      },
      {
        q: "Is ad spend included?",
        a: "No. Our fee covers strategy, management and execution. Ad spend goes directly to Google and Meta and is billed separately.",
      },
    ],
    related: ["lead-generation", "google-ads", "meta-ads"],
  },
  {
    slug: "construction",
    title: "Digital Marketing for Construction Companies",
    seoTitle: "Construction Marketing Agency in Mysuru | Vithoba Outreach",
    seoDescription:
      "Digital marketing for construction companies and contractors in Mysuru: lead generation, Google Ads, website and social media by Vithoba Outreach.",
    intro:
      "We help construction firms, contractors and builders get discovered by the right clients through search ads, a credible website and consistent social content.",
    journey: ["Visibility", "Trust", "Enquiries", "Project Opportunities"],
    whatWeDo: [
      "Google Ads for high-intent project enquiries",
      "A clear business website and project landing pages",
      "Project showcase content on Instagram, Facebook and LinkedIn",
      "LinkedIn campaigns for B2B and commercial clients",
      "Lead follow-up automation on WhatsApp and email",
      "Monthly reporting on enquiries and campaign performance",
    ],
    faqs: [
      {
        q: "Do you offer construction marketing in Mysuru?",
        a: "Yes. Vithoba Outreach is based in Mysuru and works with construction and building businesses locally and across India.",
      },
      {
        q: "Can you market to commercial clients?",
        a: "Yes. LinkedIn management and LinkedIn Ads support B2B and commercial audiences.",
      },
    ],
    related: ["lead-generation", "google-ads", "meta-ads"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
  date: string;
  excerpt: string;
  sections: { heading?: string; paragraphs?: string[]; list?: string[] }[];
  closing?: string;
  related: string[]; // mix of service/industry slugs referenced
};

export const blogPosts: BlogPost[] = [
  {
    slug: "digital-marketing-cost-mysuru",
    title: "How Much Does Digital Marketing Cost in Mysuru?",
    seoTitle: "How Much Does Digital Marketing Cost in Mysuru? | Vithoba Outreach",
    seoDescription:
      "What digital marketing costs in Mysuru: typical monthly retainer ranges, what is included, and why ad spend is separate.",
    category: "Pricing",
    date: "2026-09-18",
    excerpt:
      "The honest answer is: it depends on scope, industry and business size. Here is how agency pricing typically breaks down.",
    sections: [
      {
        paragraphs: [
          "The honest answer is: it depends on scope, industry and business size. Here is how agency pricing typically breaks down, using Vithoba Outreach's published starting rates as a reference.",
        ],
      },
      {
        heading: "Monthly retainers",
        list: [
          "Starter, ₹15,000 to ₹20,000 per month: social media management, basic content (posts plus one reel a week), basic ads management and a monthly report.",
          "Growth, ₹25,000 to ₹40,000 per month: social media and content, Google and Meta Ads, lead generation setup, a monthly strategy call and performance reporting.",
          "Premium, ₹50,000 and above per month: strategy, social media, Google and Meta Ads, content production, lead generation, automation and full reporting.",
        ],
      },
      {
        heading: "Ad spend is separate",
        paragraphs: [
          "Agency fees cover strategy, management and execution. The money you spend on Google or Meta goes directly to those platforms and is billed separately, so budget for both.",
        ],
      },
      {
        heading: "One-time projects",
        paragraphs: [
          "Websites, landing pages, logo and brand identity, marketing strategy and ad account setups are usually priced per project. Add-ons such as extra reels, creatives or landing pages are priced per item.",
        ],
      },
      {
        heading: "What to compare between agencies",
        list: [
          "What is included in the fee, and what is billed extra",
          "Contract length (marketing needs a few months to show results)",
          "How reporting and strategy calls work",
        ],
      },
    ],
    closing: "Prices are indicative starting rates and change with scope.",
    related: ["digital-marketing", "lead-generation"],
  },
  {
    slug: "google-ads-vs-meta-ads-real-estate",
    title: "Google Ads vs Meta Ads for Real Estate Businesses",
    seoTitle: "Google Ads vs Meta Ads for Real Estate | Vithoba Outreach",
    seoDescription:
      "Google Ads or Meta Ads for real estate businesses? How each works for property lead generation and when to use both.",
    category: "Strategy",
    date: "2026-09-18",
    excerpt:
      "Both platforms can generate property enquiries, but they reach buyers at different moments.",
    sections: [
      {
        paragraphs: [
          "Both platforms can generate property enquiries, but they reach buyers at different moments.",
        ],
      },
      {
        heading: "Google Ads: catching active searches",
        paragraphs: [
          "Google Ads show your project to people already searching for properties or builders in your area. Intent is high, so enquiries are often closer to a decision. Competition for popular terms can push costs up, so tight targeting and good landing pages matter.",
        ],
      },
      {
        heading: "Meta Ads: building awareness and interest",
        paragraphs: [
          "Facebook and Instagram ads reach people while they browse. They suit project launches, walkthrough videos, creatives and lead forms, and let you build audiences and remarket to people who showed interest.",
        ],
      },
      {
        heading: "Which should you choose?",
        list: [
          "Need enquiries from people ready to act: start with Google Ads.",
          "Launching a project and need visibility: add Meta Ads with strong creatives.",
          "Want steady results: use both, with a landing page and WhatsApp follow-up so leads are not lost.",
        ],
      },
    ],
    closing:
      "Whichever you choose, ad spend is paid to the platform separately from agency fees.",
    related: ["google-ads", "meta-ads", "real-estate"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function estimateReadingTime(post: BlogPost): number {
  const words = post.sections.reduce((count, section) => {
    const headingWords = section.heading?.split(" ").length ?? 0;
    const paraWords =
      section.paragraphs?.reduce((n, p) => n + p.split(" ").length, 0) ?? 0;
    const listWords =
      section.list?.reduce((n, li) => n + li.split(" ").length, 0) ?? 0;
    return count + headingWords + paraWords + listWords;
  }, post.excerpt.split(" ").length);
  return Math.max(2, Math.round(words / 200));
}

// Homepage-level FAQs (matches FAQPage schema previously published on "/")
export const homeFaqs = [
  {
    q: "What exactly does Vithoba Outreach do?",
    a: "We handle growth marketing end-to-end: social media, content, Google and Meta ads, lead generation and automation, so you get one accountable partner instead of juggling freelancers.",
  },
  {
    q: "Do you provide digital marketing services in Mysuru?",
    a: "Yes. Vithoba Outreach is headquartered in Kuvempu Nagara, Mysuru, and works with businesses in Mysuru and across India.",
  },
  {
    q: "How much does digital marketing cost in Mysuru?",
    a: "Our monthly packages start at ₹15,000 to ₹20,000 (Starter), ₹25,000 to ₹40,000 (Growth) and ₹50,000+ (Premium). Ad spend is billed separately, and final pricing depends on scope, industry and business size.",
  },
  {
    q: "Do you work with real estate companies?",
    a: "Yes. We run lead generation, Google and Meta ads, landing pages and WhatsApp follow-up for builders, developers and property businesses.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes. We help with local SEO, on-page optimisation, content planning and Google Business Profile support. SEO builds over months and we do not guarantee rankings.",
  },
  {
    q: "Do you manage Google and Meta Ads?",
    a: "Yes. We set up and manage Google Ads and Meta Ads campaigns. Ad spend goes directly to the platforms and is billed separately from our fee.",
  },
  {
    q: "How do you generate leads for businesses?",
    a: "By combining targeted Google and Meta campaigns with landing pages built to capture enquiries, plus WhatsApp and email follow-up automation.",
  },
  {
    q: "How soon will I see results?",
    a: "Most clients see visibility and engagement improve within the first 3 to 6 weeks. Lead and sales growth typically builds over 60 to 90 days as campaigns are tested and optimised.",
  },
  {
    q: "Is ad spend included in your fees?",
    a: "No. Our packages cover our service fee only: strategy, management and execution. Ad spend is billed separately and goes directly toward your campaigns.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "We require a minimum 3-month commitment, because marketing needs a few months to show real results.",
  },
  {
    q: "Can I mix and match services instead of taking a full package?",
    a: "Yes. Our pricing section lets you build a custom mix of services if a full monthly retainer is not what you need yet.",
  },
];

// The growth ecosystem nodes shown in the Marketing Orbit section. `chain` is the
// display breadcrumb (own label first); `related` is the subset of other node ids
// that highlight together when this node is active; `keywords` fill the orbit's
// center hub while a node is active; `slug` links to the matching /services page
// where one exists.
export const growthNodes = [
  {
    id: "strategy",
    number: "01",
    label: "Strategy",
    stage: "Direction",
    headline: "Give every marketing channel a direction.",
    description: "Connect business goals, audience, positioning and campaigns into one clear marketing strategy.",
    chain: ["Strategy", "Content", "SEO", "Ads"],
    related: ["content", "seo", "google-ads"],
    keywords: ["Direction", "Clarity", "Alignment"],
    slug: "digital-marketing",
  },
  {
    id: "content",
    number: "02",
    label: "Content",
    stage: "Attention",
    headline: "Give your brand something worth remembering.",
    description: "Content that communicates your value and gives every marketing channel something to amplify.",
    chain: ["Content", "Social", "SEO", "Ads"],
    related: ["social", "seo", "meta-ads"],
    keywords: ["Voice", "Value", "Resonance"],
    slug: null,
  },
  {
    id: "seo",
    number: "03",
    label: "SEO",
    stage: "Attention",
    headline: "Be found before your competitors are.",
    description: "Search strategy, technical foundations and content designed around discoverability.",
    chain: ["SEO", "Content", "Website", "Leads"],
    related: ["content", "website", "leads"],
    keywords: ["Visibility", "Discovery", "Intent"],
    slug: "seo",
  },
  {
    id: "social",
    number: "04",
    label: "Social",
    stage: "Attention",
    headline: "Turn attention into familiarity.",
    description: "Build a consistent social presence that keeps your business visible and relevant.",
    chain: ["Social", "Content", "Meta Ads", "Leads"],
    related: ["content", "meta-ads", "leads"],
    keywords: ["Presence", "Familiarity", "Trust"],
    slug: "social-media-marketing",
  },
  {
    id: "google-ads",
    number: "05",
    label: "Google Ads",
    stage: "Interest",
    headline: "Capture demand when intent is high.",
    description: "Reach people actively searching for what your business offers.",
    chain: ["Google Ads", "Website", "Leads", "Conversion"],
    related: ["website", "leads"],
    keywords: ["Demand", "Intent", "Reach"],
    slug: "google-ads",
  },
  {
    id: "meta-ads",
    number: "06",
    label: "Meta Ads",
    stage: "Interest",
    headline: "Turn attention into opportunity.",
    description: "Reach, engage and retarget the right audiences across Meta platforms.",
    chain: ["Meta Ads", "Content", "Website", "Leads"],
    related: ["content", "website", "leads"],
    keywords: ["Attention", "Engagement", "Retargeting"],
    slug: "meta-ads",
  },
  {
    id: "website",
    number: "07",
    label: "Website",
    stage: "Conversion",
    headline: "Turn traffic into action.",
    description: "A website designed not only to look good, but to guide visitors toward conversion.",
    chain: ["Website", "SEO", "Ads", "Leads"],
    related: ["seo", "google-ads", "leads"],
    keywords: ["Clarity", "Conversion", "Action"],
    slug: "website-development",
  },
  {
    id: "leads",
    number: "08",
    label: "Lead Generation",
    stage: "Conversion",
    headline: "Turn attention into conversations.",
    description: "Create systems that bring the right prospects into your sales pipeline.",
    chain: ["Leads", "Follow-up", "Conversion"],
    related: ["automation"],
    keywords: ["Prospects", "Pipeline", "Conversations"],
    slug: "lead-generation",
  },
  {
    id: "automation",
    number: "09",
    label: "Automation",
    stage: "Growth",
    headline: "Make the system work beyond the campaign.",
    description: "Connect marketing, communication and follow-up into a more efficient workflow.",
    chain: ["Automation", "CRM", "Follow-up", "Conversion"],
    related: ["leads"],
    keywords: ["Efficiency", "Consistency", "Follow-through"],
    slug: null,
  },
] as const;

export const storyBeats = [
  "Attention is the beginning.",
  "Strategy gives it direction.",
  "Creative gives it a voice.",
  "Performance turns it into action.",
  "Data tells us what happens next.",
  "Growth becomes the system.",
] as const;
