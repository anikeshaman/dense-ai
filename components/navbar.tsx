"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-navy/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="/" className="flex items-center gap-2 focus-ring">
          <Image src="/logo-mark.png"alt="Dense AI"width={44}height={44}className="h-10 w-10 lg:h-11 lg:w-11 object-contain"/>
          <span className="text-lg font-semibold tracking-tight text-ink dark:text-white">Dense AI</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink focus-ring dark:text-white/60 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] focus-ring md:inline-block dark:bg-white dark:text-ink"
        >
          Start a Project
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-ink focus-ring md:hidden dark:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-white transition-[max-height] duration-300 ease-out dark:border-white/10 dark:bg-navy md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base font-medium text-ink focus-ring dark:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white focus-ring dark:bg-white dark:text-ink"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
