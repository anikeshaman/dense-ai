import { ArrowRight, LucideIcon } from "lucide-react";

export function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  href = "#contact",
}: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(16,24,45,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(16,24,45,0.08)] dark:border-white/10 dark:bg-ink">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium tracking-wider text-muted dark:text-white/50">{number}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-soft text-blue dark:bg-white/5">
          <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">{description}</p>
      <a href={href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-transform focus-ring group-hover:gap-2.5">
        Learn more <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
