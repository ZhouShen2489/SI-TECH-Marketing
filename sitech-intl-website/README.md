# Si-Tech Intl Website

This folder contains the standalone marketing website for Si-Tech Intl, built from the PRD in:

`/Users/zhoushen/Downloads/sitech_intl_website_prd.md`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Framer Motion
- Resend or SMTP for email delivery

## Pages

- `/` Home
- `/solutions`
- `/about`
- `/privacy`
- `/thank-you`
- `/admin`

## Features included

- Reusable lead form component
- `POST /api/contact` route
- Internal notification email to `info@sitech-intl.com`
- Auto-reply email to the submitter
- Local lead storage in `data/leads.json`
- Basic tracking fields: page URL, referrer, UTM, user agent, hashed IP
- Feature flags for product-related sections and admin visibility
- Basic auth protection for `/admin` when credentials are set
- Sitemap and robots generation
- App icon, Apple touch icon, and Open Graph share image

## Local development

```bash
cd /Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need.

```bash
cp .env.example .env.local
```

### Required for sending email

Use either Resend or SMTP.

Resend:

```bash
MAIL_FROM="Si-Tech Intl <your-verified-sender@yourdomain.com>"
MAIL_TO=info@sitech-intl.com
RESEND_API_KEY=...
```

SMTP:

```bash
MAIL_FROM="Si-Tech Intl <info@yourdomain.com>"
MAIL_TO=info@sitech-intl.com
SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
```

If no mail provider is configured, form submissions are still saved locally but emails will be skipped with a server warning.

## Admin protection

To require login for `/admin`, set:

```bash
ADMIN_USERNAME=admin
ADMIN_PASSWORD=strong-password
```

Without these values, the admin page stays open locally.

## Lead data storage

Lead submissions are saved to:

`data/leads.json`

This is a lightweight local storage layer for now. It is easy to replace later with Supabase, Postgres, Airtable, or another backend without changing the form UI.

`data/leads.json` is gitignored on purpose so real lead data does not get committed to GitHub by accident.

## Build and deploy

```bash
npm run build
npm start
```

Recommended deployment target: Vercel.

For production, set:

- `NEXT_PUBLIC_SITE_URL`
- mail provider credentials
- optional admin credentials

## GitHub readiness

This project is structured to be committed cleanly to GitHub:

- `.env.local` is ignored
- `data/leads.json` is ignored so real lead submissions do not get committed
- build artifacts such as `.next/` are ignored
- share assets such as the favicon and Open Graph image are included in the repo

Before pushing, review:

```bash
git status
```

Then commit and push:

```bash
git add .
git commit -m "Refine website UI, copy, and sharing assets"
git push
```

## Notes

- The LinkedIn/marketing asset work outside this folder is not affected.
- This site is intentionally structured for future expansion into product pages, CRM sync, analytics, or a fuller admin workflow.
- Current working photos are free stock placeholders and can be replaced later with real company photography.
