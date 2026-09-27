import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Dense AI — Human Data Infrastructure for AI",
  description:
    "Dense AI provides human data collection, annotation, evaluation and quality workflows for AI and machine learning teams.",
  keywords: ["AI data", "data annotation", "data collection", "LLM evaluation", "human feedback", "AI training data"],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Dense AI — Human Data Infrastructure for AI",
    description:
      "Dense AI provides human data collection, annotation, evaluation and quality workflows for AI and machine learning teams.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dense AI — Human Data Infrastructure for AI",
    description:
      "Dense AI provides human data collection, annotation, evaluation and quality workflows for AI and machine learning teams.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dense AI",
    description: metadata.description,
    email: "densee.ai@gmail.com",
    ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/logo.png` } : {}),
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
