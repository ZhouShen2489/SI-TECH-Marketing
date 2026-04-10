# TASKS

## Completed

- Set up the bilingual Next.js marketing site.
- Centralized content in `content/siteContent.ts`.
- Reworked the site toward a more premium long-form B2B layout.
- Added clearer customer-facing messaging across Home, Solutions, Partnership, Stories, About, and Contact.
- Added detail pages for:
  - `Telecom & Operational Support`
  - `Teamshub & Business Coordination OS`
- Added image assets under `public/images`.
- Replaced simple story cards with an expandable image-backed story accordion.
- Upgraded the lead form with:
  - richer business fields
  - honeypot protection
  - consent checkbox
  - thank-you redirect
- Added server-side lead routing for:
  - HubSpot
  - Gmail internal notification
  - Gmail auto-reply
- Added language-aware confirmation emails based on the page locale.
- Added HubSpot lead source and locale mapping for website inquiries.
- Documented the recommended HubSpot -> Slack native notification setup.
- Added `Privacy` and `Thank You` pages.
- Added repository-level docs: `README.md`, `TASKS.md`, `STYLEGUIDE.md`.

## In progress

- Final content tightening to make every section more concrete and less generic.
- Build verification and compile cleanup after the latest structural changes.

## Next recommended actions

- Add real production environment variables for HubSpot and Gmail.
- Verify the Gmail sender account can send as `info@sitech-intl.com`.
- Create HubSpot form fields / properties for:
  - interested in
  - inquiry details
  - website lead source
  - website inquiry locale
- Connect HubSpot native Slack notifications to the sales / intake channel.
- Replace any remaining placeholder imagery with final approved brand visuals.
- Add analytics and conversion tracking if needed.
- Consider creating a Git checkpoint after content approval.
