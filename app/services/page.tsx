import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { serviceDetails } from "@/lib/config";

export const metadata: Metadata = { title: "AI Data Services — Dense AI", description: "Human data collection, annotation, multimodal, multilingual and AI evaluation workflows from Dense AI." };

export default function ServicesPage() {
  return <>
    <Section>
      <SectionHeader label="Services" heading="Human data workflows for AI teams." description="Dense AI can design project-specific collection, annotation, evaluation and validation workflows around your requirements." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {serviceDetails.map((service, i) => <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg focus-ring dark:border-white/10 dark:bg-ink">
          <span className="text-xs font-medium text-blue">{String(i + 1).padStart(2, "0")}</span>
          <h2 className="mt-3 text-xl font-semibold text-ink dark:text-white">{service.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">{service.description}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue">View service <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
        </Link>)}
      </div>
    </Section>
  </>;
}
