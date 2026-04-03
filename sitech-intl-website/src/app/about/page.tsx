import type { Metadata } from "next";
import { CardGridSection } from "@/components/sections/card-grid-section";
import { LeadSection } from "@/components/sections/lead-section";
import { PageHero } from "@/components/sections/page-hero";
import { MediaPanel } from "@/components/ui/media-panel";
import { siteConfig } from "@/content/site";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About | Si-Tech Intl",
  description:
    "Learn how Si-Tech Intl works with clients and partners as a practical US-market interface backed by broader telecom and software delivery capability.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Si-Tech Intl",
    description:
      "A collaboration-driven US market interface backed by broader software and delivery capability.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutContent.hero} />
      <CardGridSection
        title="Who we are"
        intro="We are positioned to help clients and partners make digital initiatives clearer, more workable, and better aligned to real operating needs."
        items={aboutContent.whoWeAre}
        columns={3}
        muted
      />
      <section className="pb-18 sm:pb-24">
        <Container>
          {/* Replace /public/images/about-partnership.jpg with your own team, office, or project collaboration photo when ready. */}
          <MediaPanel
            src="/images/about-partnership.jpg"
            alt="Professionals working through charts and project planning together"
            eyebrow="About image slot"
            title="A place for partnership, office, or delivery visuals"
            description="About is the right page for team culture, collaboration, and trust-building imagery."
            aspect="landscape"
          />
        </Container>
      </section>
      <CardGridSection
        title="How we work with clients and partners"
        intro="We value practical scope, clear communication, and a collaboration model that supports execution rather than adding process for its own sake."
        items={aboutContent.howWeWork}
        columns={3}
      />
      <CardGridSection
        title="Broader backing"
        intro="Si-Tech Intl can stay focused on the market conversation while drawing support from deeper software, telecom, and delivery experience behind the scenes."
        items={aboutContent.backing}
        columns={2}
        muted
      />
      <section className="py-18 sm:py-24">
        <Container>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-primary)]">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Reach Si-Tech Intl directly
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
                <p className="mt-2 text-base text-slate-800">{siteConfig.email}</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Office
                </p>
                <p className="mt-2 text-base text-slate-800">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <LeadSection
        title={aboutContent.lead.title}
        description={aboutContent.lead.description}
      />
    </>
  );
}
