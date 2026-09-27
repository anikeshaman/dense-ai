import { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  label,
  heading,
  description,
  align = "left",
}: {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue">{label}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted dark:text-white/60 lg:text-lg">{description}</p>}
    </div>
  );
}
