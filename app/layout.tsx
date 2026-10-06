import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Digital Marketing Agency in Mysuru | Vithoba Outreach",
    template: "%s | Vithoba Outreach",
  },
  description:
    "Vithoba Outreach is a digital marketing agency in Mysuru: strategy, social media, Google Ads, Meta Ads, SEO, websites and lead generation that grow your sales.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="bg-bg text-ink-2 antialiased">
        <JsonLd data={organizationSchema()} />
        <div className="grain" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
