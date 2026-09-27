import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service — Dense AI",
  description: "Terms governing the use of the Dense AI website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 2026">
      <LegalSection heading="Agreement to terms">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Dense AI website (the
          &ldquo;Site&rdquo;). By using the Site, you agree to these Terms. If you do not agree, please do not
          use the Site.
        </p>
      </LegalSection>

      <LegalSection heading="Use of the site">
        <p>
          This Site provides information about Dense AI&apos;s services and a way to reach us about a
          potential project. You may use the Site only for lawful purposes and in a way that does not infringe
          the rights of, or restrict or inhibit the use of the Site by, anyone else.
        </p>
      </LegalSection>

      <LegalSection heading="No professional or contractual commitment">
        <p>
          Content on this Site &mdash; including service descriptions, workflow explanations and FAQ answers
          &mdash; is provided for general information only and does not constitute a binding offer, quote or
          guarantee of specific outcomes, timelines or pricing. Any actual engagement with Dense AI, including
          scope, pricing, timelines and deliverables, is governed by a separate written agreement between
          Dense AI and the client.
        </p>
      </LegalSection>

      <LegalSection heading="Project intake form">
        <p>
          The project intake form is provided as a convenience to help you share information about a potential project.
          Submitting the form does not create any obligation on Dense AI to accept, price or begin a project,
          and does not create a contract between you and Dense AI. Please do not submit passwords, payment
          credentials, secrets or highly sensitive personal information through the form.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The Site&apos;s design, layout, logo, and written content are the property of Dense AI unless
          otherwise noted, and may not be copied, reproduced or distributed without permission.
        </p>
      </LegalSection>

      <LegalSection heading="No unsupported claims">
        <p>
          Dense AI does not publish fabricated statistics, testimonials, certifications, or client
          information on this Site. Any figures, certifications or client references shared with you directly
          outside this Site should be verified with us before being relied upon.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimer">
        <p>
          The Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. Dense
          AI does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other
          harmful components.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Dense AI is not liable for any indirect, incidental or
          consequential damages arising from your use of, or inability to use, the Site.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this
          page reflects the most recent revision. Continued use of the Site after changes are posted means you
          accept the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-blue focus-ring">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>

      <p className="border-t border-border pt-6 text-xs text-muted dark:border-white/10 dark:text-white/50">
        This page is a general-purpose starting draft and is not legal advice. Consider having it reviewed by
        a qualified lawyer for your jurisdiction before relying on it.
      </p>
    </LegalPage>
  );
}
