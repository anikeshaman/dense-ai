import Image from "next/image";

import {
  ArrowRight,
  Database,
  Tag,
  Image as ImageIcon,
  Mic,
  Languages,
  ClipboardCheck,
  ThumbsUp,
  ShieldCheck,
  Lock,
  KeyRound,
  Search,
  PackageCheck,
  Settings2,
  Eye,
} from "lucide-react";

import { Section, SectionHeader } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { Faq } from "@/components/faq";
import { ProjectForm } from "@/components/project-form";

import {
  capabilities,
  founders,
  infraSteps,
  pilotSteps,
  qualityCards,
  qualitySteps,
  securityCards,
  services,
  serviceDetails,
  site,
  whyPillars,
  workforcePillars,
} from "@/lib/config";

const serviceIcons = [
  Database,
  Tag,
  ImageIcon,
  Mic,
  Languages,
  ClipboardCheck,
  ThumbsUp,
  ShieldCheck,
];

const securityIcons = [
  Lock,
  KeyRound,
  Search,
  PackageCheck,
  Settings2,
  Eye,
];

export default function Home() {
  return (
    <div id="top">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-grid dark:border-white/10">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full glow-blue" />
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full glow-violet" />

        <Section className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue">
              Human data infrastructure for AI
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl">
              Human data.
              <br />
              <span className="text-gradient">Built for AI.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted dark:text-white/60 lg:text-lg">
              Dense AI helps AI and machine learning teams collect, annotate,
              evaluate and manage the human data required to build better AI
              systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] focus-ring dark:bg-white dark:text-ink"
              >
                Start a Project <ArrowRight size={16} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink focus-ring dark:border-white/10 dark:bg-ink dark:text-white dark:hover:border-white/30"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white px-8 py-10 shadow-[0_20px_60px_rgba(16,24,45,0.08)] dark:border-white/10 dark:bg-ink">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 dark:opacity-20" />

              <div className="relative flex flex-col items-center gap-5 pb-2 text-center">
                <Image
                  src="/logo.png"
                  alt="Dense AI logo"
                  width={132}
                  height={132}
                  className="aspect-square h-28 w-28 object-contain lg:h-32 lg:w-32"
                  priority
                />

                <div className="grid w-full grid-cols-3 gap-3 text-left">
                  <InfoChip label="Human" value="Data layer" />
                  <InfoChip label="Quality" value="Control" />
                  <InfoChip label="Scale" value="Workflows" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CAPABILITY STRIP */}
        <div className="border-t border-border bg-white dark:border-white/10 dark:bg-navy">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 lg:px-10">
            {capabilities.map((item) => (
              <span
                key={item}
                className="text-xs font-medium uppercase tracking-wider text-muted dark:text-white/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN DATA INFRASTRUCTURE WORKFLOW */}
      <Section>
        <SectionHeader
          heading="The operational layer behind better AI."
          description="Modern AI systems depend on high-quality human data. Dense AI manages the people, processes and quality systems required to collect, annotate and evaluate that data."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {infraSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="rounded-2xl border border-border bg-white p-5 dark:border-white/10 dark:bg-ink">
                <span className="text-xs font-medium text-blue">
                  {step.number}
                </span>

                <h3 className="mt-2 text-sm font-semibold text-ink dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-muted dark:text-white/60">
                  {step.description}
                </p>
              </div>

              {index < infraSteps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-border dark:text-white/10 md:block"
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        className="border-t border-border bg-soft dark:border-white/10 dark:bg-white/[0.02]"
      >
        <SectionHeader
          label="Services"
          heading="AI data services built around your workflow."
          description="From raw data collection to final evaluation, Dense AI manages the human workflows behind AI development."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              {...service}
              icon={serviceIcons[index]}
              href={`/services/${serviceDetails[index].slug}`}
            />
          ))}
        </div>
      </Section>

      {/* WORKFORCE */}
      <Section
        id="workforce"
        className="border-t border-border dark:border-white/10"
      >
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue">
              Workforce
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl lg:text-5xl">
              A scalable human workforce.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted dark:text-white/60 lg:text-lg">
              Large AI projects often require hundreds or thousands of human
              contributors. Dense AI manages contributor recruitment,
              qualification, training, task allocation, monitoring and quality
              control.
            </p>

            <div className="mt-8 space-y-5">
              {workforcePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="border-l-2 border-blue pl-4"
                >
                  <h3 className="text-sm font-semibold text-ink dark:text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted dark:text-white/60">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <WorkforceNetwork />
        </div>
      </Section>

      {/* QUALITY */}
      <Section
        id="quality"
        className="border-t border-border bg-soft dark:border-white/10 dark:bg-white/[0.02]"
      >
        <SectionHeader
          label="Quality"
          heading="Quality is built into every workflow."
          description="The value of AI data depends on its accuracy. Dense AI builds quality control into each stage of the workflow."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-5">
          {qualitySteps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-border bg-white p-4 text-center dark:border-white/10 dark:bg-ink"
            >
              <span className="text-xs font-medium text-blue">
                {step.number}
              </span>

              <p className="mt-1.5 text-sm font-medium text-ink dark:text-white">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {qualityCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-white p-6 dark:border-white/10 dark:bg-ink"
            >
              <h3 className="text-base font-semibold text-ink dark:text-white">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* RESPONSIBLE DATA OPERATIONS */}
      <Section className="border-t border-border dark:border-white/10">
        <SectionHeader
          heading="Security designed around the project."
          description="Project-specific access, handling, monitoring and delivery requirements can be incorporated into the workflow."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityCards.map((card, index) => {
            const Icon = securityIcons[index];

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-white p-6 dark:border-white/10 dark:bg-ink"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-soft text-violet dark:bg-white/5">
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-ink dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PILOT TO SCALE */}
      <Section className="border-t border-border bg-soft dark:border-white/10 dark:bg-white/[0.02]">
        <SectionHeader heading="From pilot to production." />

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {pilotSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="rounded-2xl border border-border bg-white p-6 dark:border-white/10 dark:bg-ink">
                <span className="text-xs font-medium text-blue">
                  {step.number}
                </span>

                <h3 className="mt-2 text-base font-semibold text-ink dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-muted dark:text-white/60">
                  {step.description}
                </p>
              </div>

              {index < pilotSteps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-border dark:text-white/10 md:block"
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* WHY DENSE AI */}
      <Section className="border-t border-border dark:border-white/10">
        <SectionHeader heading="Why Dense AI?" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-white p-6 dark:border-white/10 dark:bg-ink"
            >
              <h3 className="text-base font-semibold text-ink dark:text-white">
                {pillar.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FOUNDERS */}
      <Section
        id="founders"
        className="border-t border-border bg-soft dark:border-white/10 dark:bg-white/[0.02]"
      >
        <SectionHeader
          label="Our founders"
          heading="Leadership across technology, operations and business."
        />

        <div className="mt-12 space-y-4">
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-4 dark:border-white/10 dark:bg-ink sm:flex-row sm:items-center"
            >
              <Image
                src={f.image}
                alt={`Photo of ${f.name}`}
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 rounded-xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-ink dark:text-white">
                  {f.name}
                </h2>

                <p className="mt-1 text-sm font-medium text-blue">
                  {f.role}
                </p>

                <p className="mt-1 text-sm text-muted dark:text-white/60">
                  {f.focus}
                </p>
              </div>

              <a
                href={
                  f.name === "Anikesh Aman"
                    ? "https://www.linkedin.com/in/anikesh-aman-527404210/"
                    : f.name === "Arpita"
                      ? "https://www.linkedin.com/in/arpita-dwivedi-5a21213a5"
                      : "https://www.linkedin.com/in/dishaprajapat"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-blue/30 px-4 py-2 text-sm font-medium text-blue transition-colors hover:border-blue hover:bg-blue/5 focus-ring"
              >
                LinkedIn ↗
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="border-t border-border dark:border-white/10">
        <SectionHeader
          heading="Frequently asked questions"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Faq />
        </div>
      </Section>

      {/* CONTACT / INTAKE */}
      <Section
        id="contact"
        className="border-t border-border bg-soft dark:border-white/10 dark:bg-white/[0.02]"
      >
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl">
              Tell us what your AI team needs.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted dark:text-white/60">
              Share your data type, volume, languages, timeline and quality
              requirements. We can shape the workflow around the project.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-base font-medium text-blue focus-ring"
            >
              {site.email} <ArrowRight size={16} />
            </a>
          </div>

          <ProjectForm />
        </div>
      </Section>

      {/* CAREERS / CONTRIBUTORS */}
      <Section className="border-t border-border dark:border-white/10">
        <div className="rounded-3xl border border-border bg-ink px-8 py-14 text-center dark:border-white/10 lg:px-16">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Join the Dense AI contributor network.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 lg:text-base">
            Contributors may participate in appropriate data collection,
            annotation, evaluation, language and research or feedback tasks.
          </p>

          <a
            href={site.contributorWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue via-violet to-cyan px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] focus-ring"
          >
            Become a Contributor <ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </div>
  );
}

function InfoChip({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-soft px-3 py-3 dark:border-white/10 dark:bg-white/5">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted dark:text-white/50">
        {label}
      </p>

      <p className="mt-0.5 text-sm font-semibold text-ink dark:text-white">
        {value}
      </p>
    </div>
  );
}

function WorkforceNetwork() {
  const nodes = [
    { top: "8%", left: "18%" },
    { top: "12%", left: "72%" },
    { top: "42%", left: "6%" },
    { top: "38%", left: "88%" },
    { top: "72%", left: "16%" },
    { top: "78%", left: "78%" },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 dark:border-white/10 dark:bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 dark:opacity-20" />

      <div className="relative mx-auto flex h-72 max-w-sm items-center justify-center">
        {nodes.map((pos, i) => (
          <span
            key={i}
            className="absolute h-3 w-3 rounded-full bg-cyan animate-node-pulse"
            style={{
              top: pos.top,
              left: pos.left,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center justify-center rounded-2xl border border-border bg-soft px-6 py-5 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink dark:text-white">
            Dense AI
          </p>

          <p className="text-[11px] text-muted dark:text-white/50">
            Project management
          </p>
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-muted dark:text-white/50">
        <span>Quality control</span>
        <ArrowRight size={14} />
        <span>Final dataset</span>
      </div>
    </div>
  );
}