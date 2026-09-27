"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/config";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white dark:divide-white/10 dark:border-white/10 dark:bg-ink">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-ring"
            >
              <span className="text-base font-medium text-ink dark:text-white">{item.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-muted dark:text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id={`faq-panel-${index}`}
              className={`overflow-hidden px-6 transition-[max-height] duration-300 ease-out ${
                isOpen ? "max-h-40 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-muted dark:text-white/60">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
