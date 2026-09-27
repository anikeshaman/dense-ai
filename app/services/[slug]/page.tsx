import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { serviceDetails } from "@/lib/config";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = serviceDetails.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service not found — Dense AI",
    };
  }

  return {
    title: `${service.title} — Dense AI`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = serviceDetails.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <Section>
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue focus-ring"
      >
        <ArrowLeft size={16} />
        All services
      </Link>

      <div className="mt-10 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue">
          Dense AI service
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">
          {service.title}
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-muted dark:text-white/60">
          {service.description}
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {service.details.map((detail) => (
          <div
            key={detail}
            className="rounded-2xl border border-border bg-white p-6 dark:border-white/10 dark:bg-ink"
          >
            <Check className="text-blue" size={20} />

            <p className="mt-4 text-sm leading-relaxed text-muted dark:text-white/60">
              {detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-ink px-7 py-10 dark:border-white/10 sm:px-10">
        <h2 className="text-2xl font-semibold text-white">
          Have a project in mind?
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
          Share your requirements and Dense AI can discuss the workflow,
          qualification and quality controls appropriate to the project.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink focus-ring"
        >
          Start a project
          <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}