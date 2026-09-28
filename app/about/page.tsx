import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { founders } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Dense AI",
  description:
    "Meet the Dense AI founding team and learn how the company approaches human data infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader
          label="About"
          heading="Human operations for the data layer behind AI."
          description="Dense AI focuses on the people, workflows and quality systems required to produce useful human data for AI teams."
        />

        <div className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-muted dark:text-white/60">
          <p>
            The operating model is built around project-specific requirements
            rather than one fixed workforce or annotation recipe.
          </p>

          <p>
            Projects can move from a controlled pilot into larger production
            after instructions, contributor requirements and quality checks
            have been validated.
          </p>
        </div>
      </Section>

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
    </>
  );
}