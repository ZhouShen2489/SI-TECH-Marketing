# Codex 执行说明：双语官网精简版 PRD

## 目标

为 Si-Tech 制作一个**简洁、现代、可用于获客的双语官网**。

网站定位：

- 以**合作解决方案**为主，而不是成熟 SaaS 产品官网
- 用**大型技术团队与电信级经验**做信用背书
- 以**合作、试点、联合推进项目**为主要转化目标
- 为未来可售卖/可试点产品预留位置

注意：

- **不要很具体强调“美国公司主体”**
- 只通过 **Contact 页面中的美国联系方式** 来体现美国市场接口
- 网站整体应让用户感受到：
  - 有国际合作能力
  - 有大型团队支持
  - 可以从合作、方案、试点开始

---

## 交付要求

请 Codex 直接实现一个可运行的官网前端。

### 技术要求

- 现代简洁风格
- 深蓝色为主色调，风格专业、友好、可信
- 响应式设计，PC 和手机都能看
- 支持中英文切换
- 页面内容先使用本 PRD 提供的文案
- 文案要集中管理，方便后续修改

### 推荐实现方式

- Next.js
- Tailwind CSS
- i18n 内容使用单独配置文件管理
- 所有中英文文案按模块成对放在一起，不要分散

推荐内容结构示例：

- `/content/siteContent.ts`
- 每个 section 下同时包含 `zh` 和 `en`

例如：

```ts
hero: {
  title: {
    zh: '连接合作，推进解决方案落地',
    en: 'Partner to Turn Solutions into Real Business Outcomes'
  },
  subtitle: {
    zh: '我们结合大型技术团队能力，与本地伙伴共同推进电信、客户服务、运营与数字化项目。',
    en: 'We work with local partners and a strong engineering backbone to move telecom, service, operations, and digital projects forward.'
  }
}
```

---

## 网站结构

控制内容，不要做太多页面。

### 必要页面

1. Home
2. Solutions
3. Partnership
4. Stories
5. About
6. Contact

页头导航：

- Logo
- Home
- Solutions
- Partnership
- Stories
- About
- Contact
- 中英文切换按钮

页脚内容：

- 简短品牌介绍
- 页面导航
- 联系方式
- LinkedIn 占位
- 版权信息

---

## 页面目标与内容

# 1. Home

## 目标

让访客快速明白：

- 你们是谁
- 你们帮助什么类型的客户
- 你们怎么合作
- 为什么值得信任

## 区块

1. Hero
2. Why Work With Us
3. Solution Buckets
4. How We Work
5. Stories Preview
6. CTA

## 文案

### Hero

- Title
  - zh: 连接合作，推进解决方案落地
  - en: Partner to Turn Solutions into Real Business Outcomes

- Subtitle
  - zh: 我们结合大型技术团队能力，与本地伙伴共同推进电信、客户服务、运营与数字化项目。
  - en: We work with local partners and a strong engineering backbone to move telecom, customer service, operations, and digital projects forward.

- Primary CTA
  - zh: 探讨合作
  - en: Explore Partnership

- Secondary CTA
  - zh: 查看解决方案
  - en: View Solutions

### Why Work With Us

三个卡片即可。

- Card 1
  - zh title: 大型技术团队支持
  - en title: Backed by a Strong Engineering Team
  - zh text: 背靠长期深耕复杂系统与数字化交付的大型团队，具备从方案到落地的支撑能力。
  - en text: Supported by a large team experienced in complex systems and digital delivery, from solution planning to implementation.

- Card 2
  - zh title: 合作导向
  - en title: Partnership-Oriented
  - zh text: 当前阶段以合作解决方案、联合推进项目、试点探索为主，而不是单一标准产品销售。
  - en text: Our current focus is solution partnership, joint project delivery, and pilot collaboration rather than one-size-fits-all product sales.

- Card 3
  - zh title: 面向实际业务
  - en title: Built Around Real Business Needs
  - zh text: 围绕电信、客户服务、运营流程和企业数字化等实际场景，帮助客户推进项目与能力建设。
  - en text: We focus on real business scenarios across telecom, service operations, workflows, and digital enablement.

### Solution Buckets

三个桶即可。

- Bucket 1
  - zh title: 电信与运营支撑方案
  - en title: Telecom & Operational Support Solutions
  - zh text: 面向电信、通信服务及相关业务场景，支持运营、服务、流程与平台能力建设。
  - en text: Solutions for telecom and related service environments, supporting operations, service workflows, and platform enablement.

- Bucket 2
  - zh title: AI 与客户服务赋能
  - en title: AI & Customer Service Enablement
  - zh text: 支持知识助手、服务流程优化、客服协同与自动化相关场景。
  - en text: Support for knowledge assistants, service workflow optimization, customer support collaboration, and automation scenarios.

- Bucket 3
  - zh title: 定制化业务系统与数字化交付
  - en title: Custom Business Systems & Digital Delivery
  - zh text: 包括门户、CRM、工作流、仪表盘、集成与企业内部工具等定制化支持。
  - en text: Including portals, CRM, workflows, dashboards, integrations, and internal business tools.

### How We Work

四步即可。

- Step 1
  - zh: 需求沟通
  - en: Discovery

- Step 2
  - zh: 方案设计
  - en: Solution Design

- Step 3
  - zh: 试点推进
  - en: Pilot Execution

- Step 4
  - zh: 联合交付与优化
  - en: Joint Delivery & Optimization

### Stories Preview

标题：

- zh: 合作故事与场景参考
- en: Stories & Use Cases

副文案：

- zh: 通过故事化方式展示典型合作场景，帮助客户更快理解我们如何参与项目推进。
- en: Story-based use cases help visitors quickly understand how we support project delivery and collaboration.

### CTA

- zh title: 从一次合作讨论开始
- en title: Start with a Practical Conversation
- zh text: 如果你正在寻找可合作的技术与解决方案伙伴，我们愿意一起讨论项目机会。
- en text: If you are looking for a collaborative technology and solution partner, let’s explore where we can work together.
- button zh: 联系我们
- button en: Contact Us

---

# 2. Solutions

## 目标

清楚呈现当前能谈、能合作、能落地的方向。

## 页面区块

- 页面标题
- 三个 solution sections
- Future Product Placeholder
- CTA

## 文案

### Page Header

- zh title: 解决方案
- en title: Solutions
- zh subtitle: 当前以合作解决方案为主，聚焦可推进、可试点、可联合落地的业务方向。
- en subtitle: Our current focus is partnership-based solutions that can be explored, piloted, and delivered together.

### Section 1

- zh title: 电信与运营支撑方案
- en title: Telecom & Operational Support Solutions
- zh bullets:
  - 运营支撑相关流程与平台建设
  - 服务与业务协同场景支持
  - 面向复杂业务的系统能力延展

- en bullets:
  - Operational support workflows and platform enablement
  - Service and business coordination scenarios
  - System capability extension for complex business environments

### Section 2

- zh title: AI 与客户服务赋能
- en title: AI & Customer Service Enablement
- zh bullets:
  - 知识助手与服务支持场景
  - 客服流程优化与协同
  - 自动化与质量提升相关探索

- en bullets:
  - Knowledge assistant and service support use cases
  - Customer support workflow optimization and collaboration
  - Automation and service quality improvement initiatives

### Section 3

- zh title: 定制化业务系统与数字化交付
- en title: Custom Business Systems & Digital Delivery
- zh bullets:
  - 门户与工作台
  - CRM、流程、仪表盘与集成
  - 企业内部数字化工具支持

- en bullets:
  - Portals and operational workspaces
  - CRM, workflows, dashboards, and integrations
  - Internal business tools and digital enablement

### Future Product Placeholder

- zh title: 未来产品与试点能力
- en title: Future Product & Pilot-Ready Offers
- zh text: 这里预留给未来可售卖或可试点的产品模块，当前以合作和解决方案推进为主。
- en text: This section is reserved for future productized or pilot-ready offers. For now, the site focuses on collaboration and solution delivery.

### CTA

- zh: 想讨论哪类场景最适合合作？欢迎联系我们。
- en: Want to discuss which scenario is the best fit for collaboration? Contact us.

---

# 3. Partnership

## 目标

突出“寻找本地合作伙伴、联合推进项目”的核心定位。

## 区块

- Header
- Who We Work With
- Collaboration Models
- CTA

## 文案

### Header

- zh title: 合作方式
- en title: Partnership
- zh subtitle: 我们希望与本地合作伙伴、客户与资源方共同推进可落地的业务机会。
- en subtitle: We aim to work with local partners, clients, and business stakeholders to move practical opportunities forward.

### Who We Work With

- zh title: 适合合作的对象
- en title: Who We Work With
- zh items:
  - 本地解决方案伙伴
  - 行业顾问与业务资源方
  - 需要技术与交付支持的企业
  - 需要联合推进项目的合作方

- en items:
  - Local solution partners
  - Industry advisors and business connectors
  - Companies needing technical and delivery support
  - Organizations seeking joint project execution

### Collaboration Models

- Model 1
  - zh title: 联合拓展
  - en title: Joint Opportunity Development
  - zh text: 围绕共同客户或共同场景，一起定义机会并推进合作。
  - en text: Explore shared customer opportunities or business scenarios together.

- Model 2
  - zh title: 试点合作
  - en title: Pilot Collaboration
  - zh text: 先从小范围试点或 MVP 开始，再逐步扩大合作。
  - en text: Start with a focused pilot or MVP, then expand based on results.

- Model 3
  - zh title: 联合交付
  - en title: Joint Delivery
  - zh text: 由本地伙伴与我们协同推进方案、执行与后续优化。
  - en text: Work together on solution planning, execution, and continuous improvement.

### CTA

- zh title: 寻找可以一起做成事情的伙伴
- en title: Looking for Partners Who Want to Build Together
- zh button: 联系沟通
- en button: Let’s Connect

---

# 4. Stories

## 目标

用故事化方式展示能力，不需要真实客户名称。

## 要求

先做 3 个故事卡片，使用匿名描述。

### Story 1

- zh title: 支持复杂服务运营场景的数字化协同
- en title: Enabling Digital Coordination for Complex Service Operations
- zh summary: 围绕复杂业务流程、服务协同与平台支撑能力，帮助项目更高效推进。
- en summary: Helping improve project execution through stronger workflow coordination, service support, and platform enablement.

### Story 2

- zh title: 面向客户服务与知识支持的 AI 场景探索
- en title: Exploring AI for Customer Service and Knowledge Support
- zh summary: 从知识支持、服务协同到流程优化，帮助企业逐步尝试 AI 场景落地。
- en summary: Supporting gradual AI adoption across knowledge support, service collaboration, and workflow optimization.

### Story 3

- zh title: 通过合作方式推进定制化业务系统建设
- en title: Advancing Custom Business Systems Through Partnership
- zh summary: 以合作和联合推进方式支持门户、流程、仪表盘与内部工具类项目。
- en summary: Supporting portals, workflows, dashboards, and internal tools through collaborative execution.

---

# 5. About

## 目标

简洁表达背景，不要过长。

## 区块

- Header
- Company Background
- Why This Matters

## 文案

### Header

- zh title: 关于我们
- en title: About

### Company Background

- zh paragraph: 我们背后拥有长期深耕复杂系统、数字化平台与行业解决方案的大型技术团队。当前对外以合作解决方案与项目推进为主，结合本地沟通与协同能力，共同推动业务机会落地。
- en paragraph: We are backed by a large technical team with long-term experience in complex systems, digital platforms, and industry solutions. Our current outward-facing model focuses on solution partnerships and project execution, combining local collaboration with broader engineering support.

### Why This Matters

- zh title: 为什么这很重要
- en title: Why It Matters
- zh text: 这意味着我们既能理解真实业务问题，也有能力结合合作伙伴一起推动项目从讨论走向落地。
- en text: This means we bring both business understanding and the ability to work with partners to move projects from discussion into execution.

注意：

- About 页面不要写太多历史年表
- 不要出现太多中国政策化叙事
- 不要把页面写成集团介绍册

---

# 6. Contact

## 目标

成为主要转化页。

## 区块

- Header
- Contact Info
- Form
- Note

## 文案

### Header

- zh title: 联系我们
- en title: Contact
- zh subtitle: 欢迎交流合作、试点和联合推进机会。
- en subtitle: Let’s discuss partnerships, pilot opportunities, and project collaboration.

### Contact Info

保留字段：

- Email
- Phone
- Location
- LinkedIn

注意：

- 这里通过美国联系方式体现美国市场接口
- 但不要在页面其他地方大篇幅强调美国公司主体

### Form Fields

- Name
- Company
- Email
- Interest Area
- Message

按钮：

- zh: 提交
- en: Submit

### Note

- zh: 我们会尽快与你联系，讨论最合适的合作方式。
- en: We will get back to you to discuss the most suitable way to work together.

---

## 设计要求

### 风格关键词

- 简洁
- 现代
- 专业
- 友好
- 可信
- 不花哨

### 视觉建议

- 主色：深蓝色
- 大面积留白
- 卡片式布局
- 圆角适中
- 字体清晰易读
- 图标简洁
- 不要复杂动画

### 首页视觉建议

- 可以用抽象科技感图形
- 不要过度堆砌运营商设备或硬核工程图
- 不要显得像传统外包公司
- 更像现代 B2B solution partner 官网

---

## 功能要求

- 中英文切换
- 顶部导航锚点或页面跳转
- 联系表单
- 基础 SEO title / meta
- 移动端适配

可选：

- 表单提交后显示 thank you message
- 预留接入邮件通知逻辑

---

## 禁止事项

Codex 不要做以下内容：

- 不要写成成熟 SaaS 产品官网
- 不要塞太多页面
- 不要写太多宏大叙事
- 不要出现大量中国政策语言
- 不要把美国公司主体写得很重
- 不要虚构大量客户 logo
- 不要堆很多假数据

---

## 最终目标

让官网看起来像：

**一个面向国际合作的现代解决方案与合作入口网站。**

而不是：

- 中国集团官网英文版
- 纯外包公司官网
- 假装成熟产品公司的官网

Codex 应优先实现：

1. 清晰结构
2. 双语内容管理
3. 现代风格前端
4. 联系转化路径
5. 后续方便继续加产品和案例
