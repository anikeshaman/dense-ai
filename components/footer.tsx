import Image from "next/image";
import { nav, site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white dark:border-white/10 dark:bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Dense AI logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-base font-semibold text-ink dark:text-white">Dense AI</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted dark:text-white/60">{site.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted dark:text-white/50">Navigation</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-ink focus-ring dark:text-white/60 dark:hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm text-muted transition-colors hover:text-ink focus-ring dark:text-white/60 dark:hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted dark:text-white/50">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-muted transition-colors hover:text-ink focus-ring dark:text-white/60 dark:hover:text-white"
            >
              {site.email}
            </a>
            <div className="mt-6 flex gap-4">
              <a href="/privacy" className="text-sm text-muted transition-colors hover:text-ink focus-ring dark:text-white/60 dark:hover:text-white">
                Privacy
              </a>
              <a href="/terms" className="text-sm text-muted transition-colors hover:text-ink focus-ring dark:text-white/60 dark:hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 dark:border-white/10">
          <p className="text-xs text-muted dark:text-white/50">© 2026 Dense AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
