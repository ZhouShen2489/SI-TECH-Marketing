import { CapabilitySection } from "@/components/sections/capability-section";
import { CardGridSection } from "@/components/sections/card-grid-section";
import { LeadSection } from "@/components/sections/lead-section";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { MediaPanel } from "@/components/ui/media-panel";
import { homeContent } from "@/content/home";
import { featureFlags } from "@/lib/feature-flags";

export default function HomePage() {
  const capabilityItems = [
    featureFlags.showTeamshub ? homeContent.products.items[0] : null,
    featureFlags.showAiCustomerService ? homeContent.products.items[1] : null,
  ].filter(Boolean) as Array<(typeof homeContent.products.items)[number]>;

  return (
    <>
      <PageHero {...homeContent.hero} />
      <CardGridSection
        title={homeContent.urgency.title}
        intro={homeContent.urgency.intro}
        items={homeContent.urgency.items}
        columns={3}
        muted
      />
      <section className="pb-18 sm:pb-24">
        <Container>
          {/* Replace /public/images/home-service-team.jpg with your own team, office, or collaboration photo when ready. */}
          <MediaPanel
            src="/images/home-hero-collaboration.jpg"
            alt="Professionals collaborating together around a table in a modern office"
            eyebrow="Optional section image"
            title="Image slot for customer service or workflow support"
            description="This slot works well for a support team, workflow dashboard, coordination screenshot, or a future Si-Tech project image."
            aspect="landscape"
          />
        </Container>
      </section>
      <CardGridSection
        title={homeContent.solutions.title}
        intro={homeContent.solutions.intro}
        items={homeContent.solutions.items}
        columns={3}
      />
      {featureFlags.showProducts && capabilityItems.length ? (
        <CapabilitySection
          title={homeContent.products.title}
          intro={homeContent.products.intro}
          items={capabilityItems}
        />
      ) : null}
      <LeadSection
        title={homeContent.lead.title}
        description={homeContent.lead.description}
        bullets={homeContent.lead.bullets}
      />
    </>
  );
}
