import { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue">Dense AI</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted dark:text-white/60">Last updated: {updated}</p>
      <div className="mt-10 space-y-8">{children}</div>
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink dark:text-white">{heading}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted dark:text-white/70">{children}</div>
    </section>
  );
}
