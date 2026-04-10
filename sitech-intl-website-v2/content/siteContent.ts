import type { Locale } from "@/lib/site";

type Copy = {
  zh: string;
  en: string;
};

type CopyList = {
  zh: readonly string[];
  en: readonly string[];
};

export const siteContent = {
  brand: {
    name: "Si-Tech Intl",
    eyebrow: {
      zh: "面向美国市场的数字化解决方案与合作入口",
      en: "Digital solutions and partnership entry point for the U.S. market",
    },
    summary: {
      zh: "Si-Tech Intl 面向美国客户与合作伙伴，聚焦电信运营支撑、AI 客户服务、Teamshub 协作体系与定制化业务系统。",
      en: "Si-Tech Intl works with U.S. clients and partners across telecom operations, AI-enabled customer service, Teamshub collaboration systems, and custom business platforms.",
    },
  },
  contact: {
    email: "info@sitech-intl.com",
    phone: "+1 (408) 352-5288",
    address: "Suite 210, 20410 Town Center Lane, Cupertino, CA 95014",
    linkedin: "LinkedIn coming soon",
  },
  navigation: [
    { href: "/", label: { zh: "首页", en: "Home" } },
    { href: "/solutions", label: { zh: "解决方案", en: "Solutions" } },
    { href: "/partners", label: { zh: "合作伙伴", en: "Partners" } },
    { href: "/partnership", label: { zh: "合作方式", en: "Partnership" } },
    { href: "/stories", label: { zh: "合作故事", en: "Stories" } },
    { href: "/about", label: { zh: "关于我们", en: "About" } },
    { href: "/contact", label: { zh: "联系", en: "Contact" } },
  ],
  proofRibbon: [
    {
      zh: "电信级复杂系统经验",
      en: "Telecom-grade systems experience",
    },
    {
      zh: "3000+ 技术团队支持",
      en: "3,000+ technical staff behind delivery",
    },
    {
      zh: "跨团队与跨区域协同交付",
      en: "Cross-team and cross-region delivery support",
    },
    {
      zh: "AI 工作流与知识协同",
      en: "AI workflow and knowledge coordination",
    },
    {
      zh: "可从试点、小范围切入",
      en: "Ready for scoped pilots and phased rollout",
    },
  ],
  home: {
    hero: {
      image: "/images/hero/ai-operations.webp",
      badge: {
        zh: "适用于运营商、服务商、工业出海企业与合作伙伴项目",
        en: "Built for operators, service teams, industrial exporters, and partner-led delivery",
      },
      title: {
        zh: "把分散的服务、协作与业务推进，变成团队能持续运行的系统",
        en: "Turn fragmented service, collaboration, and delivery work into systems your team can actually run",
      },
      subtitle: {
        zh: "我们帮助客户梳理客户服务、运营支撑、跨团队协作和定制化业务系统，从小范围切入，到稳定落地。",
        en: "We help teams fix broken service workflows, operator support processes, cross-team handoffs, and custom business systems, starting with practical scope and moving toward reliable execution.",
      },
      primaryCta: {
        zh: "预约沟通",
        en: "Book a Consultation",
      },
      secondaryCta: {
        zh: "查看解决方案",
        en: "Explore Solutions",
      },
      highlights: {
        zh: ["线索响应更快", "跨时区协作不断线", "项目与知识可持续沉淀"],
        en: [
          "Faster lead and service response",
          "Cross-time-zone coordination that does not stall",
          "Project and knowledge continuity beyond chat",
        ],
      },
    },
    stats: [
      { value: "1995", label: { zh: "总部技术积累起点", en: "Broader Si-Tech foundation since" } },
      { value: "30+", label: { zh: "年复杂系统与运营支撑经验", en: "Years in complex systems and operations support" } },
      { value: "3000+", label: { zh: "技术与交付团队支持", en: "Technical and delivery staff" } },
      { value: "1B+", label: { zh: "服务场景终端用户支撑经验", en: "Users supported across service environments" } },
    ],
    painPoints: {
      title: {
        zh: "很多业务不是缺人，而是缺一套能承接上下文和执行的系统",
        en: "Many teams do not need more tools. They need one system that can hold context and execution together",
      },
      items: [
        {
          title: {
            zh: "线索和服务响应慢",
            en: "Lead and service response slows down",
          },
          text: {
            zh: "客户邮件、消息和内部跟进分散在不同地方，重要机会容易被拖慢。",
            en: "Customer email, messaging, and follow-up live in too many places, and promising opportunities lose momentum.",
          },
        },
        {
          title: {
            zh: "项目交接靠人记忆",
            en: "Project handoffs depend on memory",
          },
          text: {
            zh: "跨团队、跨地区、跨时区推进时，如果没有统一上下文，进度和风险都很难控。",
            en: "When work moves across teams, regions, and time zones, progress and risk become hard to manage without shared context.",
          },
        },
        {
          title: {
            zh: "知识沉淀不下来",
            en: "Knowledge disappears into chat",
          },
          text: {
            zh: "会议结论、待办、资料版本和关键判断如果只留在聊天里，团队规模一大就会失控。",
            en: "When meeting outcomes, tasks, versions, and decisions stay buried in chat, scale quickly becomes painful.",
          },
        },
      ],
    },
    solutionRows: [
      {
        eyebrow: {
          zh: "01 电信与运营支撑方案",
          en: "01 Telecom & operational support",
        },
        title: {
          zh: "适用于运营商、MVNO 与复杂服务环境的支撑系统和流程能力",
          en: "Support systems and operational workflows for operators, MVNOs, and complex service environments",
        },
        text: {
          zh: "从客户与服务流程、业务支撑平台到数据与运营可视化，我们可以围绕明确场景做升级、扩展与联合交付。",
          en: "From customer and service workflows to support platforms, data visibility, and operational tooling, we can scope upgrades and extensions around concrete operator needs.",
        },
        bullets: {
          zh: [
            "BSS / OSS 相关支撑与运营流程延展",
            "服务工单、客户运营与伙伴协同",
            "国际化、MVNO 与平台类项目支持",
          ],
          en: [
            "BSS / OSS-related support and workflow extension",
            "Service operations, customer handling, and partner coordination",
            "International operator, MVNO, and platform delivery support",
          ],
        },
        href: "/solutions/telecom-operations",
        linkLabel: {
          zh: "查看详情",
          en: "View Detail",
        },
        image: "/images/about/sitech-building.png",
      },
      {
        eyebrow: {
          zh: "02 AI 客户服务",
          en: "02 AI customer service",
        },
        title: {
          zh: "把客服、知识支持和内部服务流程做得更快、更稳、更可追踪",
          en: "Make customer support, knowledge handling, and internal service workflows faster, more consistent, and easier to track",
        },
        text: {
          zh: "我们关注的是客服场景里的真实动作，比如知识定位、回复辅助、流程协同和质量提升，而不是只展示一个聊天窗口。",
          en: "The focus is not a chatbot demo. It is the real support workflow: finding knowledge, assisting replies, coordinating follow-up, and improving service quality.",
        },
        bullets: {
          zh: [
            "知识助手与内部支持问答",
            "客服回复辅助与流程协同",
            "质检、摘要、交接与自动化探索",
          ],
          en: [
            "Knowledge assistants and internal support Q&A",
            "Reply assistance and support workflow coordination",
            "Quality review, summaries, handoffs, and automation",
          ],
        },
        image: "/images/hero/digital-workplace.webp",
      },
      {
        eyebrow: {
          zh: "03 Teamshub 与定制化业务系统",
          en: "03 Teamshub & custom business systems",
        },
        title: {
          zh: "用 Teamshub 和定制化平台，把线索、项目、知识与协作真正接起来",
          en: "Use Teamshub and custom platforms to connect leads, projects, knowledge, and execution in one working system",
        },
        text: {
          zh: "适合客户获取链路长、项目参与者多、资料复杂、跨时区协作重的团队，不再只靠聊天记录和文件夹推进工作。",
          en: "Designed for teams with long lead cycles, many stakeholders, heavy documentation, and cross-time-zone handoffs, so work no longer depends on chat history and scattered folders.",
        },
        bullets: {
          zh: [
            "项目圈子、帖子与知识节点体系",
            "AI / Agent 摘要、待办与交接支持",
            "线索到项目到售后的业务 OS 设计",
          ],
          en: [
            "Project circles, posts, and structured knowledge nodes",
            "AI / agent summaries, next actions, and handoff support",
            "Business OS design from leads to delivery and after-sales",
          ],
        },
        href: "/solutions/teamshub-business-os",
        linkLabel: {
          zh: "查看 Teamshub 详情",
          en: "View Teamshub Detail",
        },
        image: "/images/solutions/teamshub-plan.png",
      },
    ],
    process: {
      title: {
        zh: "我们通常这样开始",
        en: "How we usually start",
      },
      steps: [
        {
          title: { zh: "看清现状", en: "Map the current workflow" },
          text: {
            zh: "先找到线索响应、服务协作、项目推进或资料使用里真正卡住的地方。",
            en: "We start by locating where leads, support, project work, or knowledge handling are actually getting stuck.",
          },
        },
        {
          title: { zh: "定义范围", en: "Define a scope worth fixing" },
          text: {
            zh: "不是一上来做大项目，而是先圈定一个能看到结果的切入口。",
            en: "Instead of forcing a large rollout, we scope one part of the workflow where results can be seen quickly.",
          },
        },
        {
          title: { zh: "试点与落地", en: "Pilot and operationalize" },
          text: {
            zh: "把流程、系统、角色分工和数据沉淀一起拉通，而不是只交一个界面。",
            en: "We connect process, system, roles, and data continuity together rather than shipping a UI in isolation.",
          },
        },
        {
          title: { zh: "扩展与优化", en: "Extend and refine" },
          text: {
            zh: "试点跑顺后，再扩到更多团队、更多场景或更完整的平台能力。",
            en: "Once the first scope runs well, we expand into adjacent teams, use cases, or broader platform capability.",
          },
        },
      ],
    },
    storiesPreview: {
      title: {
        zh: "更能建立信任的，不是空泛案例，而是客户项目的真实推进逻辑",
        en: "What builds trust is not generic case-study language, but the real logic of how customer projects move forward",
      },
      text: {
        zh: "这里的故事会尽量围绕公开项目类型和真实交付场景来写，重点放在项目背景、交付动作和业务价值。",
        en: "These stories are framed around public project types and real delivery patterns, with the focus on project context, delivery action, and business value.",
      },
    },
    cta: {
      title: {
        zh: "如果你的团队已经感觉到响应、协作或交接越来越吃力，我们可以一起把问题拆清楚",
        en: "If response time, coordination, or handoffs are starting to slow the team down, we can work through the problem with you",
      },
      text: {
        zh: "可以从一个服务流程、一个项目链路，或一个跨团队协作场景开始。",
        en: "We can start with one support workflow, one project motion, or one cross-team operating problem.",
      },
      button: {
        zh: "开始沟通",
        en: "Start the Conversation",
      },
    },
  },
  solutionsPage: {
    hero: {
      image: "/images/hero/digital-workplace.webp",
      title: {
        zh: "解决方案",
        en: "Solutions",
      },
      subtitle: {
        zh: "我们提供的不是一套固定模板，而是围绕真实业务流程去定义范围、落地系统并支持执行。",
        en: "What we offer is not a generic package. We define scope around the real workflow, build the system around it, and support execution after launch.",
      },
    },
    areasTitle: {
      zh: "当前最清晰的三条方案主线",
      en: "Three solution tracks that are clear, scoped, and ready to discuss",
    },
    whoWeWorkWith: {
      title: {
        zh: "适合和我们合作的团队",
        en: "Teams we work with well",
      },
      items: [
        {
          zh: "运营商、MVNO、通信服务与复杂运营支撑环境",
          en: "Operators, MVNOs, telecom service businesses, and complex support environments",
        },
        {
          zh: "需要提升客服、知识支持与服务协同效率的团队",
          en: "Teams improving customer support, internal knowledge handling, and service coordination",
        },
        {
          zh: "线索链路长、资料复杂、跨团队推进重的企业",
          en: "Businesses with long lead cycles, heavy documentation, and multi-team delivery pressure",
        },
        {
          zh: "希望联合推进项目的本地伙伴、实施方与渠道合作方",
          en: "Local partners, integrators, and channel teams looking for joint delivery",
        },
      ],
    },
    startPoints: {
      title: {
        zh: "项目通常从这些切口开始",
        en: "Projects often start from one of these entry points",
      },
      items: [
        {
          zh: "一次流程梳理与问题诊断",
          en: "A workflow review and problem diagnosis",
        },
        {
          zh: "一个小范围试点或 MVP",
          en: "A scoped pilot or MVP",
        },
        {
          zh: "一个已知系统或协作环节的改造",
          en: "An upgrade to an existing system or handoff motion",
        },
        {
          zh: "一个需要本地沟通与更强交付组织配合的联合项目",
          en: "A joint project that needs local interface plus stronger delivery backing",
        },
      ],
    },
    cta: {
      title: {
        zh: "告诉我们你现在最想修通哪一段流程",
        en: "Tell us which part of the workflow needs to work better next",
      },
      button: {
        zh: "提交需求",
        en: "Submit an Inquiry",
      },
    },
  },
  solutionDetails: {
    telecom: {
      image: "/images/about/sitech-building.png",
      title: {
        zh: "电信与运营支撑方案",
        en: "Telecom & Operational Support Solutions",
      },
      subtitle: {
        zh: "适用于运营商、MVNO 与复杂服务环境中需要稳定流程、平台能力与多角色协同的业务场景。",
        en: "Built for operators, MVNOs, and complex service environments where stable workflows, platform capability, and multi-role coordination matter.",
      },
      intro: {
        zh: "Si-Tech 背后的能力基础来自长期运营商核心支撑系统和大型数字化项目实践。对外合作时，我们更关注客户现在要解决的具体问题，比如服务流程是否跑得顺、运营数据是否看得见、跨团队协同是否能接住。",
        en: "The broader Si-Tech capability base was built through long-term operator support systems and large digital delivery programs. In practice, we focus less on naming every system and more on the workflow problem a client needs fixed right now: whether service operations run cleanly, whether data is visible, and whether teams can coordinate without losing context.",
      },
      capabilityBlocks: [
        {
          title: {
            zh: "客户与服务运营支撑",
            en: "Customer and service operations support",
          },
          bullets: {
            zh: [
              "客户服务流程、工单流转与协同机制",
              "面向复杂业务环境的支撑流程梳理",
              "服务、运营、伙伴团队之间的联动设计",
            ],
            en: [
              "Customer service workflows, ticket handling, and coordination models",
              "Support process design for complex business environments",
              "Operating links across service, operations, and partner teams",
            ],
          },
        },
        {
          title: {
            zh: "平台与系统能力延展",
            en: "Platform and system capability extension",
          },
          bullets: {
            zh: [
              "BSS / OSS 相关支撑与平台能力延展",
              "客户门户、伙伴门户与运营工作台",
              "CRM、流程、集成与仪表盘类系统支持",
            ],
            en: [
              "BSS / OSS-related support and platform extension",
              "Customer portals, partner portals, and operations workspaces",
              "CRM, workflow, integration, and dashboard support",
            ],
          },
        },
        {
          title: {
            zh: "国际化与 MVNO 相关场景",
            en: "International and MVNO-related scenarios",
          },
          bullets: {
            zh: [
              "国际化运营支撑与统一门户类项目参考",
              "MVNO 与相关业务支撑场景协同",
              "多团队、多区域交付配合经验",
            ],
            en: [
              "Reference experience in international support and unified portals",
              "MVNO-related support environments and coordination needs",
              "Delivery coordination across regions and teams",
            ],
          },
        },
      ],
      proofTitle: {
        zh: "适合放进这类项目里的能力基础",
        en: "Capability base relevant to this type of work",
      },
      proofItems: [
        {
          zh: "1995 年成立，长期深耕电信与复杂业务支撑领域",
          en: "Founded in 1995 with long-term depth in telecom and complex business support systems",
        },
        {
          zh: "3000+ 技术员工与较完整研发交付体系",
          en: "3,000+ technical staff with a broad R&D and delivery organization",
        },
        {
          zh: "服务场景累计覆盖 10 亿+ 用户量级",
          en: "Experience supporting service environments at 1B+ user scale",
        },
        {
          zh: "具备国际化项目、统一门户、MVNO 与数据平台经验参考",
          en: "Relevant reference base across international projects, unified portals, MVNO, and data platforms",
        },
      ],
      startTitle: {
        zh: "常见切入口",
        en: "Common starting scopes",
      },
      startItems: {
        zh: [
          "梳理一个客户服务或运营流程里的卡点",
          "定义一个需要升级的支撑系统模块或工作台",
          "搭一个先能跑通的可视化、门户或协同平台",
          "围绕 MVNO / 国际化场景做小范围能力验证",
        ],
        en: [
          "Map the bottlenecks inside one support or service workflow",
          "Define a scoped upgrade for one support system module or workspace",
          "Launch a usable dashboard, portal, or coordination layer first",
          "Validate capability in a focused MVNO or international operator scenario",
        ],
      },
    },
    teamshub: {
      image: "/images/solutions/teamshub-plan.png",
      title: {
        zh: "Teamshub 与业务协同 OS",
        en: "Teamshub & Business Coordination OS",
      },
      subtitle: {
        zh: "Teamshub 不是聊天工具替代品，而是一套把线索、项目、知识和行动放进同一工作系统里的业务协同方式。",
        en: "Teamshub is not just another collaboration app. It is a way to put leads, projects, knowledge, and next actions into one operating system.",
      },
      intro: {
        zh: "根据你提供的 Teamshub 材料，最清晰的价值并不是“功能很多”，而是它适合那些客户链路长、参与角色多、时差明显、资料分散的团队。尤其在出海、工业项目、伙伴协作和复杂售前售后链路中，这种工作方式更容易体现价值。",
        en: "Based on the Teamshub materials you provided, the clearest value is not a long feature list. It is the ability to support teams with long lead cycles, many participants, time-zone gaps, and heavy documentation. That matters especially in export, industrial, partner-led, and multi-stage delivery work.",
      },
      sections: [
        {
          title: {
            zh: "把“项目”而不是“聊天线程”作为核心对象",
            en: "Use the project, not the chat thread, as the core object",
          },
          text: {
            zh: "重点机会进入项目圈子后，相关参与者、资料、纪要、问题清单、版本和待办都围绕项目主档沉淀下来，新加入的人也能快速看懂上下文。",
            en: "Once an important opportunity moves into a project circle, participants, files, notes, versions, issues, and next actions stay tied to a project record that new contributors can understand quickly.",
          },
          image: "/images/solutions/teamshub-plan.png",
        },
        {
          title: {
            zh: "用帖子、圈子和知识节点替代只靠聊天记录推进",
            en: "Replace chat-only coordination with posts, circles, and reusable knowledge nodes",
          },
          text: {
            zh: "帖子更适合承接会议结论、待办、FAQ、项目阶段总结和知识沉淀，圈子则负责把不同团队、项目和客户之间的协作边界组织清楚。",
            en: "Posts work better for meeting outcomes, action lists, FAQs, phase summaries, and knowledge capture, while circles define who is coordinating around which project or customer motion.",
          },
          image: "/images/stories/mvp-product-shape.png",
        },
        {
          title: {
            zh: "让 AI / Agent 参与摘要、风险、待办和跨时区交接",
            en: "Use AI / agents for summaries, risks, next actions, and cross-time-zone handoffs",
          },
          text: {
            zh: "当推进不是一个人一口气完成，而是跨团队接力时，Agent 的价值在于持续生成当前状态、风险和下一步，而不是只做一次性问答。",
            en: "When progress depends on relay-style work across teams, the value of agents is ongoing state, risk, and next-step generation, not just one-off answers.",
          },
          image: "/images/stories/communication-capability.png",
        },
      ],
      useCasesTitle: {
        zh: "Teamshub 适合的业务场景",
        en: "Where Teamshub fits especially well",
      },
      useCases: {
        zh: [
          "出海获客、线索筛选与自动触达",
          "重点客户项目推进与跨团队协作",
          "产品资料、FAQ、案例与知识底座建设",
          "售后支持、历史问题复用与组织知识沉淀",
        ],
        en: [
          "Export lead intake, qualification, and first-touch outreach",
          "Key account project coordination across roles and regions",
          "Product material, FAQ, case, and knowledge-base organization",
          "After-sales support, issue reuse, and organizational knowledge continuity",
        ],
      },
      roadmapTitle: {
        zh: "如果从现在开始规划，合理的推进方式通常是先做可演示、可试用、可协同的最小闭环",
        en: "A practical Teamshub rollout usually starts with a minimum loop that can be shown, tried, and used by real teams",
      },
      roadmapText: {
        zh: "先打通线索、项目圈子和知识沉淀，再逐步补本地化、生态集成、安全法务与更完整的产品能力。",
        en: "The usual path is to connect lead handling, project circles, and knowledge continuity first, then layer in localization, ecosystem integrations, compliance work, and broader product capability.",
      },
      roadmapImage: "/images/solutions/teamshub-roadmap.png",
    },
  },
  partnershipPage: {
    hero: {
      image: "/images/hero/ai-operations.webp",
      title: {
        zh: "合作方式",
        en: "Partnership",
      },
      subtitle: {
        zh: "我们适合和愿意一起推进项目的人合作，而不是只在最后一个环节做被动交付。",
        en: "We work best with partners who want to move the project forward together, not only hand work off at the very end.",
      },
    },
    groupsTitle: {
      zh: "我们通常和这些类型的团队合作",
      en: "We typically work with teams like these",
    },
    groups: [
      {
        title: {
          zh: "本地解决方案伙伴",
          en: "Local solution partners",
        },
        text: {
          zh: "需要更强的产品、平台或交付支持，一起服务客户。",
          en: "Teams that want stronger product, platform, or delivery backing on client work.",
        },
      },
      {
        title: {
          zh: "运营商与服务相关业务方",
          en: "Operator and service-side teams",
        },
        text: {
          zh: "已有明确业务场景，需要联合定义范围和交付路径。",
          en: "Organizations with a concrete operational need and a need to define scope and delivery together.",
        },
      },
      {
        title: {
          zh: "工业与出海企业",
          en: "Industrial and export businesses",
        },
        text: {
          zh: "客户链路长、资料复杂、售前售后衔接重，协同体系需要升级。",
          en: "Businesses with long sales cycles, complex documentation, and heavier coordination between pre-sales and after-sales.",
        },
      },
      {
        title: {
          zh: "顾问、渠道与资源连接方",
          en: "Advisors, channels, and business connectors",
        },
        text: {
          zh: "希望把本地关系与更强的技术交付能力结合起来。",
          en: "Teams that want to combine local relationships with stronger technical delivery capacity.",
        },
      },
    ],
    modelsTitle: {
      zh: "合作模型",
      en: "How engagement can work",
    },
    models: [
      {
        title: {
          zh: "联合评估机会",
          en: "Joint opportunity shaping",
        },
        text: {
          zh: "一起判断哪个业务问题最值得先做，谁负责前台沟通，谁负责技术与交付准备。",
          en: "We align on which problem is worth solving first, who leads the client-side motion, and who prepares the technical path.",
        },
      },
      {
        title: {
          zh: "从试点开始",
          en: "Start with a pilot",
        },
        text: {
          zh: "先把一个最关键流程跑通，再决定是否扩大范围。",
          en: "We make one key workflow work first, then decide what deserves broader rollout.",
        },
      },
      {
        title: {
          zh: "联合交付与长期优化",
          en: "Joint delivery and refinement",
        },
        text: {
          zh: "本地伙伴维持客户关系与现场沟通，我们提供更强的产品、工程与交付支撑。",
          en: "Local partners maintain the client relationship and field coordination while we bring product, engineering, and delivery muscle.",
        },
      },
    ],
    cta: {
      title: {
        zh: "如果你手上正有一个需要更强交付能力配合的机会，可以直接聊",
        en: "If you already have an opportunity that needs stronger delivery backing, let’s talk directly",
      },
      button: {
        zh: "联系合作",
        en: "Talk Partnership",
      },
    },
  },
  partnersPage: {
    hero: {
      image: "/images/hero/digital-workplace.webp",
      title: {
        zh: "合作伙伴",
        en: "Partners",
      },
      subtitle: {
        zh: "我们欢迎渠道、顾问、实施方和技术合作伙伴一起推进项目、共拓市场，也支持明确分工的产品分销合作。",
        en: "We work with channel partners, advisors, integrators, and technology partners on both joint delivery and clearly defined resale opportunities.",
      },
    },
    introTitle: {
      zh: "我们怎么看合作伙伴关系",
      en: "How we approach partner relationships",
    },
    introText: {
      zh: "有些合作是联合定义方案和交付，有些合作则是围绕成熟产品做渠道销售和收益分成。我们希望把这两类合作都讲清楚，让潜在伙伴知道怎么和我们协作。",
      en: "Some partnerships are about shaping and delivering solutions together. Others are channel motions built around clearer products and revenue-sharing. We want both models to be explicit so partners know how to work with us.",
    },
    models: [
      {
        title: {
          zh: "联合方案合作",
          en: "Joint solution partnership",
        },
        text: {
          zh: "适合需要本地关系、行业理解和更强技术交付后盾的项目，一起定义机会、澄清范围并推进落地。",
          en: "Best for projects that combine local relationships, industry understanding, and stronger technical delivery backing.",
        },
      },
      {
        title: {
          zh: "渠道与分销合作",
          en: "Channel and resale partnership",
        },
        text: {
          zh: "适合已有产品、明确销售目标和分成机制的合作，重点是更快触达客户、提升转化并形成持续收益。",
          en: "Best for products with a clearer sales motion, defined target buyers, and a structured revenue-share model.",
        },
      },
    ],
    helpport: {
      title: {
        zh: "Helport 渠道合作",
        en: "Helport channel partnership",
      },
      subtitle: {
        zh: "我们当前有一类明确的渠道合作：帮助合作方推广产品，并按约定参与收益分成。",
        en: "We already support one clear channel model: helping a partner bring its product to market and participating through agreed revenue sharing.",
      },
      bullets: {
        zh: [
          "合作对象：Helport 相关 AI 客服与运营产品",
          "合作方式：我们可以作为市场拓展和渠道协作一方，帮助触达客户并推动成交",
          "收益方式：按既定合作机制参与分成",
          "适合场景：客服团队、呼叫中心、远程支持团队、需要 AI Copilot 或外包支持能力的企业",
        ],
        en: [
          "Partner product scope: Helport AI support and operations offerings",
          "Model: we can support channel reach, go-to-market conversations, and deal progression",
          "Revenue model: participation through a defined revenue-share arrangement",
          "Good fit: service teams, call centers, remote support operations, and businesses exploring AI copilot or outsourced support capability",
        ],
      },
      note: {
        zh: "如果你希望通过我们了解 Helport，或讨论渠道合作与转售支持，可以直接联系我们。",
        en: "If you want to explore Helport through us, or discuss channel support and resale collaboration, we can talk directly.",
      },
    },
  },
  storiesPage: {
    hero: {
      image: "/images/hero/digital-workplace.webp",
      title: {
        zh: "合作故事",
        en: "Stories",
      },
      subtitle: {
        zh: "这里不是罗列项目名，而是把问题、做法和结果讲清楚。",
        en: "These are not title-only case studies. They show the operating problem, the fix, and the outcome in plain language.",
      },
    },
    items: [
      {
        title: {
          zh: "支撑国际 MVNO 项目，需要的不只是本地接口，更是完整业务支撑能力",
          en: "Supporting an international MVNO program takes more than a local interface. It needs a full support-system foundation",
        },
        summary: {
          zh: "基于公开项目类型，这类项目通常涉及业务支撑系统、客户与服务流程、平台协同和跨地区交付组织。",
          en: "Based on public project types, this kind of work typically combines business support systems, customer and service workflows, platform coordination, and cross-region delivery.",
        },
        image: "/images/about/sitech-building.png",
        labels: {
          zh: ["MVNO", "国际项目", "业务支撑"],
          en: ["MVNO", "International delivery", "Business support"],
        },
        sections: [
          {
            label: { zh: "项目背景", en: "Project context" },
            text: {
              zh: "国际 MVNO 或跨地区运营项目通常不只是做一个界面，而是需要业务支撑、客户流程、伙伴协同和交付组织一起配合。",
              en: "International MVNO and cross-region operator projects are rarely about a single interface. They usually require business support, customer workflows, partner coordination, and delivery organization together.",
            },
          },
          {
            label: { zh: "交付动作", en: "Delivery approach" },
            text: {
              zh: "这类项目一般会围绕运营支撑流程、服务协同机制、平台功能边界和多方接口进行分阶段定义与推进，先确保关键链路能稳定跑通。",
              en: "These programs are usually delivered in phases around support workflows, service coordination, platform boundaries, and multi-party interfaces, with the first goal being stable operation of critical motions.",
            },
          },
          {
            label: { zh: "业务价值", en: "Business value" },
            text: {
              zh: "客户得到的不是一个孤立模块，而是一套更可持续的业务支撑能力，也更容易支撑国际化场景下的长期运营。",
              en: "The client gets more than a one-off module. It gets a more sustainable operational support base for long-term international service delivery.",
            },
          },
        ],
      },
      {
        title: {
          zh: "统一门户类项目的价值，不只是好看，而是把客户、服务和运营入口收拢起来",
          en: "The value of a unified portal project is not just presentation. It is about bringing customer, service, and operations entry points together",
        },
        summary: {
          zh: "公开资料里已经出现过国际统一门户类项目，这类项目通常会影响客户入口、服务流程和多业务协同效率。",
          en: "Public project references already point to unified international portal work, which typically affects customer entry points, service flows, and multi-business coordination.",
        },
        image: "/images/hero/ai-operations.webp",
        labels: {
          zh: ["统一门户", "客户入口", "服务协同"],
          en: ["Unified portal", "Customer entry point", "Service coordination"],
        },
        sections: [
          {
            label: { zh: "项目背景", en: "Project context" },
            text: {
              zh: "当客户入口、服务入口和运营侧入口长期分散时，用户体验和内部处理效率通常都会一起变差。",
              en: "When customer-facing entry points, service access, and operations-side access remain fragmented, both user experience and internal efficiency tend to suffer.",
            },
          },
          {
            label: { zh: "交付动作", en: "Delivery approach" },
            text: {
              zh: "统一门户类项目的重点通常是把客户触达、服务导航、业务入口和后台协同规则放进同一结构中，并处理好不同系统之间的衔接。",
              en: "A unified portal project usually focuses on putting customer access, service navigation, business entry points, and backend coordination rules into one structure while resolving system handoffs behind the scenes.",
            },
          },
          {
            label: { zh: "业务价值", en: "Business value" },
            text: {
              zh: "客户侧入口会更清晰，内部团队也更容易围绕统一规则协作，后续扩展新业务时成本更低。",
              en: "The client-facing experience becomes clearer, internal teams can coordinate around a shared structure, and later expansion becomes easier.",
            },
          },
        ],
      },
      {
        title: {
          zh: "数据中台或能力中台项目，真正难的是把数据、业务对象和运营动作接起来",
          en: "In data platform or capability platform work, the real challenge is connecting data, business objects, and operational action",
        },
        summary: {
          zh: "公开项目类型中已经出现过数据中台和能力运营中心，这类项目更看重数据如何真正服务业务运营。",
          en: "Public project types already point to data-platform and capability-operations-center work, where the real question is how data supports actual operating decisions.",
        },
        image: "/images/hero/digital-workplace.webp",
        labels: {
          zh: ["数据中台", "能力平台", "运营可视化"],
          en: ["Data platform", "Capability platform", "Operational visibility"],
        },
        sections: [
          {
            label: { zh: "项目背景", en: "Project context" },
            text: {
              zh: "很多组织并不缺数据，而是缺把数据和业务对象、流程动作、管理视图真正接起来的方式。",
              en: "Many organizations do not lack data. They lack a way to connect data to business objects, workflows, and management views in a usable way.",
            },
          },
          {
            label: { zh: "交付动作", en: "Delivery approach" },
            text: {
              zh: "这类项目通常会围绕数据汇总、对象建模、业务规则、仪表盘和运营工作流进行设计，让不同团队看到的是同一套经营逻辑。",
              en: "These projects usually combine data aggregation, object modeling, business rules, dashboards, and operating workflows so different teams can work from the same business logic.",
            },
          },
          {
            label: { zh: "业务价值", en: "Business value" },
            text: {
              zh: "管理者更容易看清运营状态，执行团队更容易知道下一步做什么，平台后续也更容易承接 AI 与自动化能力。",
              en: "Management gets clearer operational visibility, execution teams understand the next move more easily, and the platform becomes a stronger base for AI and automation later.",
            },
          },
        ],
      },
    ],
  },
  aboutPage: {
    hero: {
      image: "/images/about/sitech-building.png",
      title: {
        zh: "关于我们",
        en: "About",
      },
      subtitle: {
        zh: "Si-Tech Intl 是美国市场的合作接口，背后连接更广泛的 Si-Tech 技术、研发与交付能力。",
        en: "Si-Tech Intl is the U.S.-facing collaboration interface backed by the broader Si-Tech technical, R&D, and delivery organization.",
      },
    },
    body: {
      zh: "我们不把官网写成总部介绍册，而是希望客户先看懂：我们能做什么、适合什么项目、为什么可以把事情做成。总部长期在电信级复杂系统、数字化平台与运营支撑领域积累能力，Si-Tech Intl 则更聚焦美国市场沟通、合作推进和项目落地。",
      en: "This website is not meant to be a corporate brochure. It is meant to show what we can solve, what kinds of projects fit well, and why the work can be delivered with confidence. The broader Si-Tech organization brings long-term depth in telecom-grade systems, digital platforms, and operational support, while Si-Tech Intl focuses on market-facing collaboration and execution in the U.S.",
    },
    pillars: [
      {
        title: {
          zh: "复杂系统与运营支撑积累",
          en: "Depth in complex systems and operational support",
        },
        text: {
          zh: "长期面向运营商与复杂业务环境，理解系统稳定性、流程连贯性和大规模支撑的要求。",
          en: "Long-term work in operator and complex service environments shaped a strong understanding of stability, workflow continuity, and large-scale support demands.",
        },
      },
      {
        title: {
          zh: "本地合作接口 + 更强交付后盾",
          en: "Local collaboration interface with stronger delivery backing",
        },
        text: {
          zh: "前台沟通更贴近美国市场，后台能力不止于一个小团队。",
          en: "The front end of the relationship is closer to the U.S. market while the delivery muscle behind it is broader than a small stand-alone team.",
        },
      },
      {
        title: {
          zh: "先解决问题，再谈扩展",
          en: "Fix one real workflow before expanding",
        },
        text: {
          zh: "我们更愿意先把一段流程做顺，再决定是否扩大范围，而不是先承诺一整套大而全系统。",
          en: "We would rather make one workflow work first and expand from there than promise a large all-in-one system too early.",
        },
      },
    ],
  },
  contactPage: {
    hero: {
      image: "/images/hero/ai-operations.webp",
      title: {
        zh: "联系",
        en: "Contact",
      },
      subtitle: {
        zh: "告诉我们你的团队现在卡在哪一段流程，我们会据此安排后续沟通。",
        en: "Tell us where the workflow is breaking down today, and we will use that as the starting point for the conversation.",
      },
    },
    panelTitle: {
      zh: "直接联系",
      en: "Direct Contact",
    },
    note: {
      zh: "表单提交后，信息会同步进入 HubSpot，并发送到 info@sitech-intl.com。你也会收到一封确认邮件，我们会尽快和你取得联系。",
      en: "Form submissions are routed into HubSpot and sent to info@sitech-intl.com. The submitter also receives a confirmation email, and our team will follow up as soon as possible.",
    },
    form: {
      fullName: { zh: "姓名", en: "Full Name" },
      workEmail: { zh: "工作邮箱", en: "Work Email" },
      companyName: { zh: "公司名称", en: "Company Name" },
      jobTitle: { zh: "职位", en: "Job Title" },
      phone: { zh: "电话", en: "Phone" },
      industry: { zh: "行业", en: "Industry" },
      interestedIn: { zh: "感兴趣的方向", en: "Interested In" },
      message: { zh: "项目需求 / 具体问题", en: "Project / Inquiry Details" },
      consent: {
        zh: "我同意 Si-Tech Intl 就此次咨询与我联系。",
        en: "I agree to be contacted by Si-Tech Intl regarding this inquiry.",
      },
      submit: { zh: "提交需求", en: "Submit Inquiry" },
      loading: { zh: "提交中...", en: "Submitting..." },
      success: {
        zh: "我们已收到你的需求，正在跳转确认页。",
        en: "We received your inquiry and are taking you to the confirmation page.",
      },
      error: {
        zh: "提交失败，请稍后重试。",
        en: "Unable to submit right now. Please try again later.",
      },
      options: {
        zh: [
          "电信与运营支撑",
          "AI 客户服务",
          "Teamshub / 协同系统",
          "定制化业务系统",
          "合作伙伴项目",
          "暂时还不确定",
        ],
        en: [
          "Telecom & operational support",
          "AI customer service",
          "Teamshub / collaboration system",
          "Custom business system",
          "Partnership opportunity",
          "Not sure yet",
        ],
      },
    },
  },
  thankYouPage: {
    title: {
      zh: "我们已收到你的信息",
      en: "We received your inquiry",
    },
    text: {
      zh: "我们已经收到你的请求，团队会尽快通过邮件与你联系。若你有更多补充，也可以直接发邮件至 info@sitech-intl.com。",
      en: "We have received your inquiry, and our team will contact you by email as soon as possible. If you want to add more context, you can also write directly to info@sitech-intl.com.",
    },
    button: {
      zh: "返回首页",
      en: "Back to Home",
    },
  },
  privacyPage: {
    title: {
      zh: "隐私说明",
      en: "Privacy",
    },
    intro: {
      zh: "我们只收集处理你主动提交的联系信息与咨询内容，用于响应你的需求、安排后续沟通和内部线索管理。",
      en: "We collect only the contact information and inquiry details you submit voluntarily so we can respond to your request, follow up appropriately, and manage internal lead handling.",
    },
    sections: [
      {
        title: {
          zh: "我们收集什么",
          en: "What we collect",
        },
        text: {
          zh: "姓名、工作邮箱、公司、职位、电话、行业、咨询内容，以及提交时的页面链接等基础信息。",
          en: "Basic information such as name, work email, company, job title, phone, industry, inquiry details, and the page URL from which the form was submitted.",
        },
      },
      {
        title: {
          zh: "我们如何使用",
          en: "How we use it",
        },
        text: {
          zh: "用于与你联系、评估项目匹配度、安排后续沟通，并在内部 CRM 中保留必要记录。",
          en: "We use it to contact you, assess fit, arrange follow-up, and keep the necessary record inside our CRM.",
        },
      },
      {
        title: {
          zh: "信息处理方式",
          en: "How data is handled",
        },
        text: {
          zh: "提交内容会通过受保护的后端接口发送，并同步到我们使用的邮件与 CRM 工具中。",
          en: "Form submissions are sent through a protected backend endpoint and may be routed into our email and CRM systems for follow-up.",
        },
      },
    ],
  },
  footer: {
    navTitle: {
      zh: "页面",
      en: "Pages",
    },
    contactTitle: {
      zh: "联系方式",
      en: "Contact",
    },
    copyright: {
      zh: "保留所有权利。",
      en: "All rights reserved.",
    },
  },
} as const;

export function copy(locale: Locale, value: Copy) {
  return value[locale];
}

export function copyList(locale: Locale, value: CopyList) {
  return value[locale];
}
