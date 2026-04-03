export const homeContent = {
  hero: {
    eyebrow: "Clarity, trust, execution",
    title: "Practical digital support for service, collaboration, and execution.",
    description:
      "Si-Tech Intl works with service providers, telecom-related businesses, and growing companies to move digital initiatives forward with practical scope, collaborative delivery, and stronger operational follow-through.",
    primaryCta: { href: "#lead-form", label: "Book a Consultation" },
    secondaryCta: { href: "/solutions", label: "Explore Solutions" },
    signals: [
      { label: "Positioning", value: "US-facing business interface" },
      { label: "Approach", value: "Collaboration-first project shaping" },
      { label: "Support", value: "Backed by broader delivery capability" },
    ],
    media: {
      src: "/images/home-hero-collaboration.jpg",
      alt: "Professionals collaborating around a laptop in a bright meeting room",
      eyebrow: "Visual direction",
      caption:
        "A modern B2B visual direction that feels collaborative, credible, and execution-oriented.",
    },
  },
  urgency: {
    title: "Why this matters now",
    intro:
      "When service, follow-up, and coordination stay fragmented for too long, growth starts to slow down before the problem is fully visible.",
    items: [
      {
        icon: "alert",
        title: "Slow response can quietly cost leads and trust",
        description:
          "Prospects and customers rarely wait for internal bottlenecks to clear. Delays can weaken trust before the team has a chance to recover momentum.",
      },
      {
        icon: "collaboration",
        title: "Scattered communication makes follow-up harder",
        description:
          "When context is split across inboxes, chats, and spreadsheets, teams spend too much time reconstructing the picture instead of moving work forward.",
      },
      {
        icon: "workflow",
        title: "Scaling stays inconsistent without digital support",
        description:
          "Manual workarounds can keep things moving for a while, but they are hard to repeat, hard to train, and hard to improve across teams.",
      },
    ],
  },
  solutions: {
    title: "What we help with",
    intro:
      "A concise view of the three solution areas. The fuller breakdown stays on the Solutions page so Home stays focused.",
    items: [
      {
        eyebrow: "01",
        icon: "service",
        title: "AI-enabled customer service improvement",
        description:
          "Support better response speed, service consistency, and follow-through.",
        bullets: [
          "Workflow review",
          "Response support",
          "Operational fit",
        ],
      },
      {
        eyebrow: "02",
        icon: "collaboration",
        title: "Team collaboration and workflow optimization",
        description:
          "Create clearer ownership, follow-up, and visibility across teams.",
        bullets: [
          "Coordination clarity",
          "Knowledge capture",
          "Cross-team visibility",
        ],
      },
      {
        eyebrow: "03",
        icon: "custom",
        title: "Custom digital support for real business operations",
        description:
          "Shape digital support around how the business actually runs.",
        bullets: [
          "Custom workflows",
          "Project support",
          "Partner-friendly delivery",
        ],
      },
    ],
  },
  products: {
    title: "Product capability when it helps move faster",
    intro:
      "Platform capability can accelerate delivery when it fits the situation, but it is not the center of every engagement.",
    items: [
      {
        icon: "workflow",
        title: "Teamshub",
        description:
          "A collaboration and knowledge workflow capability that helps teams keep communication, follow-up, and reusable context connected.",
      },
      {
        icon: "support",
        title: "AI customer service capability",
        description:
          "A practical AI support layer that can improve response consistency, service execution, and internal knowledge access.",
      },
    ],
  },
  lead: {
    title: "Tell us where operations are starting to feel stuck",
    description:
      "If your team is working to improve service response, collaboration, or operational follow-through, we can help shape the next practical step.",
    bullets: [
      "Consultative first conversation, not a hard sales flow",
      "Good fit for telecom-related businesses, service providers, and growing operating teams",
      "We can start with one focused workflow before expanding",
    ],
  },
} as const;
