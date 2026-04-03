import type { Metadata } from "next";
import { CardGridSection } from "@/components/sections/card-grid-section";
import { LeadSection } from "@/components/sections/lead-section";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/content/site";
import { solutionsContent } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions | Si-Tech Intl",
  description:
    "Explore how Si-Tech Intl supports customer service improvement, team collaboration, and custom digital workflows for telecom-related businesses, service providers, and growing companies.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Si-Tech Intl",
    description:
      "Customer service, collaboration, and custom digital solutions shaped around real business workflows.",
    url: `${siteConfig.url}/solutions`,
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero {...solutionsContent.hero} />
      <CardGridSection
        title="Core solution areas"
        intro="The right approach depends on where the workflow is breaking down, where customers are feeling the delay, and what support the team can realistically adopt."
        items={solutionsContent.coreAreas}
        columns={3}
        muted
      />
      <CardGridSection
        title="Who we work with"
        intro="Our work is a good fit for businesses that need technology to support execution, not just check a software box."
        items={solutionsContent.audiences}
        columns={4}
      />
      <LeadSection
        title={solutionsContent.lead.title}
        description={solutionsContent.lead.description}
      />
    </>
  );
}
