import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy — Dense AI",
  description: "How Dense AI collects, uses and protects information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <LegalSection heading="Overview">
        <p>
          This Privacy Policy explains what information Dense AI (&ldquo;Dense AI,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;) collects through this website, how it is used, and the choices available to you.
          This site does not use analytics, tracking cookies, or advertising technology. The only information
          we receive is what you choose to share with us directly.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>When you use the project intake form or email us directly, you may share:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Your name and company name</li>
          <li>Your work email address</li>
          <li>Project details you choose to describe, such as project type, data type, estimated volume, languages and timeline</li>
        </ul>
        <p>
          When the project intake form is configured for production, the submitted fields are sent to Dense AI's website endpoint and forwarded to the company email address for responding to the inquiry. The site does not intentionally store submitted form data in a database. If the email service is unavailable or not configured, the form does not claim success and provides a direct email option instead.
        </p>
      </LegalSection>

      <LegalSection heading="How we use information">
        <p>Information you send us is used to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Respond to your inquiry about a potential project</li>
          <li>Understand the scope, requirements and feasibility of a project</li>
          <li>Communicate with you about next steps, pilots or ongoing work</li>
        </ul>
        <p>We do not sell, rent or trade personal information to third parties.</p>
      </LegalSection>

      <LegalSection heading="How we store and protect information">
        <p>
          Inquiry data is transmitted to the configured email service only when a successful form submission is made. Email correspondence is then stored and protected according to the practices of the email provider used by Dense AI. The site itself is not presented as a certified security system and no security certification is claimed here.
        </p>
      </LegalSection>

      <LegalSection heading="Retention">
        <p>
          We retain inquiry and project-related correspondence for as long as reasonably necessary to respond
          to your request, maintain a record of the working relationship, or comply with legal obligations.
          You may ask us to delete your information at any time by contacting us at {site.email}.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>You can:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Ask what information we hold about you</li>
          <li>Ask us to correct inaccurate information</li>
          <li>Ask us to delete your information, subject to any legal or contractual retention requirements</li>
          <li>Decline to submit the intake form and instead contact us with only the details you are comfortable sharing</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Children's privacy">
        <p>This website is intended for business inquiries and is not directed at children under 13.</p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top
          of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about this policy or your information can be sent to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-blue focus-ring">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>

      <p className="border-t border-border pt-6 text-xs text-muted dark:border-white/10 dark:text-white/50">
        This page is a general-purpose starting draft and is not legal advice. Consider having it reviewed by
        a qualified lawyer for your jurisdiction and specific data practices before relying on it.
      </p>
    </LegalPage>
  );
}
