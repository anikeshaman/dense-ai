"use client";

import { FormEvent, ReactNode, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import { dataTypeOptions, projectTypeOptions, site } from "@/lib/config";

type FormState = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  dataType: string;
  volume: string;
  languages: string;
  timeline: string;
  description: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  projectType: "",
  dataType: "",
  volume: "",
  languages: "",
  timeline: "",
  description: "",
  website: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export function ProjectForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status === "error") setStatus("idle");
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    else if (form.name.trim().length < 2) next.name = "Enter at least 2 characters.";
    if (!form.company.trim()) next.company = "Enter your company.";
    else if (form.company.trim().length < 2) next.company = "Enter at least 2 characters.";
    if (!form.email.trim()) next.email = "Enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.projectType) next.projectType = "Select a project type.";
    if (!form.dataType) next.dataType = "Select a data type.";
    if (!form.description.trim()) next.description = "Describe your project.";
    else if (form.description.trim().length < 20) next.description = "Please provide at least 20 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function mailtoHref() {
    const subject = encodeURIComponent(`Project inquiry: ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nWork email: ${form.email}\nProject type: ${form.projectType}\nData type: ${form.dataType}\nEstimated volume: ${form.volume}\nLanguages: ${form.languages}\nTimeline: ${form.timeline}\n\nDescription:\n${form.description}`
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) throw new Error(payload.message || "We could not submit the form right now.");
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "We could not submit the form right now.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center dark:border-white/10 dark:bg-ink" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto text-blue" size={36} />
        <h3 className="mt-4 text-lg font-semibold text-ink dark:text-white">Project inquiry submitted</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted dark:text-white/60">
          Thanks. Your details were submitted successfully. We&apos;ll follow up using the contact information you provided.
        </p>
        <button
          type="button"
          onClick={() => { setStatus("idle"); setForm(initialState); }}
          className="mt-5 text-sm font-medium text-blue focus-ring"
        >
          Submit another project
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-ink" aria-describedby={status === "error" ? "form-error" : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <input id="name" name="name" autoComplete="name" required maxLength={100} className={inputClass(errors.name)} value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        </Field>
        <Field label="Company" htmlFor="company" error={errors.company} required>
          <input id="company" name="company" autoComplete="organization" required maxLength={150} className={inputClass(errors.company)} value={form.company} onChange={(e) => update("company", e.target.value)} aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} />
        </Field>
        <Field label="Work email" htmlFor="email" error={errors.email} full required>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} className={inputClass(errors.email)} value={form.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        </Field>
        <Field label="Project type" htmlFor="projectType" error={errors.projectType} required>
          <select id="projectType" name="projectType" required className={inputClass(errors.projectType)} value={form.projectType} onChange={(e) => update("projectType", e.target.value)} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "projectType-error" : undefined}>
            <option value="">Select an option</option>
            {projectTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Data type" htmlFor="dataType" error={errors.dataType} required>
          <select id="dataType" name="dataType" required className={inputClass(errors.dataType)} value={form.dataType} onChange={(e) => update("dataType", e.target.value)} aria-invalid={!!errors.dataType} aria-describedby={errors.dataType ? "dataType-error" : undefined}>
            <option value="">Select an option</option>
            {dataTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Estimated volume" htmlFor="volume">
          <input id="volume" name="volume" maxLength={100} className={inputClass()} placeholder="e.g. 10,000 items" value={form.volume} onChange={(e) => update("volume", e.target.value)} />
        </Field>
        <Field label="Languages" htmlFor="languages">
          <input id="languages" name="languages" maxLength={200} className={inputClass()} placeholder="e.g. English, Hindi" value={form.languages} onChange={(e) => update("languages", e.target.value)} />
        </Field>
        <Field label="Timeline" htmlFor="timeline" full>
          <input id="timeline" name="timeline" maxLength={100} className={inputClass()} placeholder="e.g. Pilot in 4 weeks" value={form.timeline} onChange={(e) => update("timeline", e.target.value)} />
        </Field>
        <Field label="Description" htmlFor="description" error={errors.description} full required>
          <textarea id="description" name="description" rows={5} required maxLength={5000} className={inputClass(errors.description)} placeholder="Tell us about the task, quality requirements and expected deliverable." value={form.description} onChange={(e) => update("description", e.target.value)} aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined} />
        </Field>
      </div>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} />
      </div>

      {status === "error" && (
        <div id="form-error" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200" role="alert">
          <div className="flex gap-3"><AlertCircle size={18} className="mt-0.5 shrink-0" /><div><p className="font-medium">We couldn&apos;t submit the form.</p><p className="mt-1">{errorMessage}</p><a href={mailtoHref()} className="mt-2 inline-flex items-center gap-1.5 font-medium underline focus-ring"><Mail size={14} /> Email {site.email} directly</a></div></div>
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue via-violet to-cyan px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.01] focus-ring disabled:cursor-wait disabled:opacity-70 sm:w-auto">
        {status === "sending" && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        {status === "sending" ? "Submitting…" : "Send project details"}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted dark:text-white/50">Please do not include passwords, secrets or highly sensitive personal information in this form.</p>
    </form>
  );
}

function Field({ label, htmlFor, error, full, required, children }: { label: string; htmlFor: string; error?: string; full?: boolean; required?: boolean; children: ReactNode }) {
  const errorId = `${htmlFor}-error`;
  return (
    <div className={`block ${full ? "sm:col-span-2" : ""}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink dark:text-white">{label}{required && <span aria-hidden="true"> *</span>}</label>
      <div className="mt-1.5">{children}</div>
      {error && <p id={errorId} className="mt-1 block text-xs text-red-600 dark:text-red-300" role="alert">{error}</p>}
    </div>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus-ring dark:bg-navy dark:text-white ${error ? "border-red-400" : "border-border dark:border-white/10"}`;
}
