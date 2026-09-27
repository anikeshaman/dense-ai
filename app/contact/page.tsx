import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ProjectForm } from "@/components/project-form";
import { site } from "@/lib/config";
export const metadata: Metadata = { title: "Contact Dense AI", description: "Share your AI data project requirements with Dense AI." };
export default function ContactPage() { return <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-xs font-medium uppercase tracking-[0.14em] text-blue">Contact</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">Tell us what your AI team needs.</h1><p className="mt-5 text-base leading-relaxed text-muted dark:text-white/60">Share your data type, volume, languages, timeline and quality requirements. We can discuss a workflow around the project.</p><a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 text-base font-medium text-blue focus-ring">{site.email}<ArrowRight size={16}/></a></div><ProjectForm/></div></main> }
