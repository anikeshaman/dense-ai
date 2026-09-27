# Dense AI — Website

Human Data Infrastructure for AI. Built with Next.js 14, React, TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Production environment variables

The project intentionally does not contain real third-party credentials.

For production contact-form delivery, configure:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Dense AI Website <verified-sender@your-domain.com>
CONTACT_TO_EMAIL=densee.ai@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-real-domain.example
```

`CONTACT_FROM_EMAIL` must be a sender/domain accepted by your email provider. Do not commit secrets to source control.

If the email service variables are missing, the contact form will **not** pretend that a message was sent. It shows a clear error and provides a direct email option instead.

## Routes

- `/` — homepage
- `/services` — services overview
- `/services/[slug]` — service detail pages
- `/workforce` — workforce model
- `/quality` — quality and validation
- `/solutions` — solution patterns
- `/about` — company and founders
- `/careers` — careers contact
- `/contributors` — contributor network
- `/contact` — project intake
- `/privacy` — privacy policy draft
- `/terms` — terms draft
- `/robots.txt` — generated robots rules
- `/sitemap.xml` — generated when `NEXT_PUBLIC_SITE_URL` is configured

## Quality and security notes

- No fabricated customer logos, testimonials, statistics or certifications are included.
- Security wording is intentionally project-specific and does not claim SOC 2, ISO, HIPAA, GDPR certification or similar credentials without evidence.
- The contact API validates input, uses a honeypot field and applies a lightweight per-instance rate limit. For high-volume production traffic, add an edge/WAF rate limiter.
- Do not put secrets or highly sensitive personal information into the public project form.
- Review the Privacy Policy and Terms with qualified legal counsel before relying on them in production.
