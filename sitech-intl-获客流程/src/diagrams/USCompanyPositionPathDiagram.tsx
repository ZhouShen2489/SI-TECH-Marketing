type Props = {
  className?: string;
  title?: string;
};

type Tone = "legacy" | "focus" | "growth" | "future";

const colors = {
  ink: "#102744",
  muted: "#5D708B",
  border: "#D7E4F5",
  blue: "#1E5FD3",
  green: "#14875B",
  orange: "#B46A16",
  purple: "#4356C8",
  red: "#B44949",
  softBlue: "#EEF6FF",
  softGreen: "#ECF9F2",
  softOrange: "#FFF5E8",
  softRed: "#FFF1F1",
};

const panel = {
  background: "#FFFFFF",
  border: `1px solid ${colors.border}`,
  borderRadius: 22,
  padding: 22,
  boxShadow: "0 12px 30px rgba(43, 81, 130, 0.07)",
};

const label = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 999,
  padding: "7px 12px",
  fontSize: 13,
  fontWeight: 800,
  lineHeight: 1.2,
};

function StageCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: "blue" | "green" | "orange" | "red";
}) {
  const stageToneMap = {
    blue: { bg: colors.softBlue, text: colors.blue, border: "#CFE0F9" },
    green: { bg: colors.softGreen, text: colors.green, border: "#CFE8DC" },
    orange: { bg: colors.softOrange, text: colors.orange, border: "#F0D8B8" },
    red: { bg: colors.softRed, text: colors.red, border: "#F1D0D0" },
  }[tone];

  return (
    <div
      style={{
        background: stageToneMap.bg,
        border: `1px solid ${stageToneMap.border}`,
        borderRadius: 18,
        padding: "14px 16px",
        minHeight: 104,
        display: "grid",
        gap: 8,
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 800, color: stageToneMap.text }}>
        {title}
      </div>
      <div style={{ fontSize: 13, color: colors.muted, lineHeight: 1.55 }}>
        {body}
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          color: "#6E86A6",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.08em",
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </div>
      <div style={{ color: colors.ink, fontSize: 22, fontWeight: 800 }}>
        {title}
      </div>
      <div
        style={{
          color: colors.muted,
          fontSize: 14,
          lineHeight: 1.55,
          marginTop: 8,
        }}
      >
        {description}
      </div>
    </div>
  );
}

function LinkedDiagram({
  img,
  title,
  body,
}: {
  img: string;
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "82px auto",
        gap: 10,
        minWidth: 0,
      }}
    >
      <div
        style={{
          border: "1px solid #D7E4F5",
          borderRadius: 14,
          overflow: "hidden",
          background: "#F7FAFF",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <div>
        <div style={{ color: colors.ink, fontSize: 14, fontWeight: 800 }}>
          {title}
        </div>
        <div
          style={{
            color: colors.muted,
            fontSize: 12,
            lineHeight: 1.45,
            marginTop: 4,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}

const toneMap = {
  legacy: {
    bg: colors.softOrange,
    border: "#EFD7B8",
    text: colors.orange,
    dark: "#8B4E11",
    badgeBg: "#FFE9CD",
  },
  focus: {
    bg: "linear-gradient(180deg, #F4FFF8 0%, #EAF7FF 100%)",
    border: "#A9DCC7",
    text: colors.green,
    dark: "#116A49",
    badgeBg: "#DFF7EA",
  },
  growth: {
    bg: colors.softBlue,
    border: "#CDE1FB",
    text: colors.blue,
    dark: "#164B9E",
    badgeBg: "#DDEBFF",
  },
  future: {
    bg: "linear-gradient(180deg, #F2F4FF 0%, #ECF4FF 100%)",
    border: "#C9D0FF",
    text: colors.purple,
    dark: "#29379B",
    badgeBg: "#E2E6FF",
  },
} satisfies Record<Tone, Record<string, string>>;

function KeywordTags({
  items,
  tone,
}: {
  items: string[];
  tone: "blue" | "green";
}) {
  const isGreen = tone === "green";

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            ...label,
            padding: "6px 10px",
            fontSize: 12,
            background: isGreen ? colors.softGreen : colors.softBlue,
            color: isGreen ? colors.green : colors.blue,
            border: `1px solid ${isGreen ? "#CDEBDB" : "#D3E3FA"}`,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function PositionCard({
  index,
  title,
  body,
  keywords,
  tone,
}: {
  index: string;
  title: string;
  body: string;
  keywords: string[];
  tone: "blue" | "green";
}) {
  const accent = tone === "green" ? colors.green : colors.blue;

  return (
    <section
      style={{
        background: "#FFFFFF",
        border: `1px solid ${colors.border}`,
        borderTop: `5px solid ${accent}`,
        borderRadius: 20,
        padding: 22,
        boxShadow: "0 14px 32px rgba(43, 81, 130, 0.08)",
        display: "grid",
        gap: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            ...label,
            width: 34,
            height: 34,
            padding: 0,
            background: tone === "green" ? colors.softGreen : colors.softBlue,
            color: accent,
          }}
        >
          {index}
        </div>
        <h2
          style={{
            margin: 0,
            color: colors.ink,
            fontSize: 22,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h2>
      </div>
      <p
        style={{
          margin: 0,
          color: colors.muted,
          fontSize: 15,
          lineHeight: 1.68,
        }}
      >
        {body}
      </p>
      <KeywordTags items={keywords} tone={tone} />
    </section>
  );
}

function StepCard({
  step,
  title,
  body,
  bullets,
  conclusion,
  tone,
  badge,
}: {
  step: string;
  title: string;
  body: string;
  bullets: string[];
  conclusion: string;
  tone: Tone;
  badge?: string;
}) {
  const palette = toneMap[tone];
  const isFocus = tone === "focus";

  return (
    <section
      style={{
        minHeight: isFocus ? 430 : 398,
        background: palette.bg,
        border: `${isFocus ? 3 : 1}px solid ${palette.border}`,
        borderRadius: 22,
        padding: isFocus ? 22 : 20,
        boxShadow: isFocus
          ? "0 18px 42px rgba(20, 135, 91, 0.18)"
          : "0 12px 28px rgba(43, 81, 130, 0.07)",
        display: "grid",
        alignContent: "start",
        gap: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            ...label,
            background: palette.badgeBg,
            color: palette.dark,
            border: `1px solid ${palette.border}`,
          }}
        >
          {step}
        </div>
        {badge ? (
          <div
            style={{
              ...label,
              background: "#FFFFFF",
              color: palette.text,
              border: `1px solid ${palette.border}`,
            }}
          >
            {badge}
          </div>
        ) : null}
      </div>

      <h3
        style={{
          margin: 0,
          color: colors.ink,
          fontSize: isFocus ? 21 : 19,
          lineHeight: 1.28,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: colors.muted,
          fontSize: 13,
          lineHeight: 1.58,
        }}
      >
        {body}
      </p>

      <div style={{ display: "grid", gap: 8 }}>
        {bullets.map((item) => (
          <div
            key={item}
            style={{
              display: "grid",
              gridTemplateColumns: "18px 1fr",
              gap: 8,
              alignItems: "start",
              color: colors.ink,
              fontSize: 12,
              lineHeight: 1.45,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                marginTop: 6,
                borderRadius: 999,
                background: palette.text,
              }}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 2,
          borderRadius: 16,
          background: "rgba(255,255,255,0.78)",
          border: `1px solid ${palette.border}`,
          padding: 13,
          color: palette.dark,
          fontSize: 12,
          lineHeight: 1.55,
          fontWeight: 800,
        }}
      >
        {conclusion}
      </div>
    </section>
  );
}

function FlowArrow({ color = colors.blue }: { color?: string }) {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        color,
        fontSize: 30,
        fontWeight: 900,
      }}
    >
      →
    </div>
  );
}

export default function USCompanyPositionPathDiagram({
  className,
  title = "美国公司重定位与四步发展路径",
}: Props) {
  return (
    <div
      className={className}
      style={{
        background:
          "linear-gradient(135deg, #F5F8FE 0%, #FFFFFF 48%, #F4F9FF 100%)",
        borderRadius: 32,
        padding: 40,
        color: colors.ink,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: 28,
          alignItems: "end",
          marginBottom: 24,
        }}
      >
        <div>
          <div
            style={{
              ...label,
              background: "#EAF2FF",
              color: colors.blue,
              marginBottom: 12,
            }}
          >
            顶层总图 / 先统一定位，再展开执行
          </div>
          <h1
            style={{
              margin: 0,
              color: "#102744",
              fontSize: 44,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              margin: "12px 0 0",
              color: colors.muted,
              fontSize: 18,
              lineHeight: 1.55,
              maxWidth: 1220,
            }}
          >
            从“两个主体拼产品”转向“产品主体唯一 + 美国获客验证”的方向
          </p>
        </div>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 24,
        }}
      >
        <PositionCard
          index="1"
          title="辅佐国内高意愿团队和优秀产品出海"
          body="美国公司辅佐有目标、有野心、有产品潜力的国内团队进入美国市场，国内团队有且仅是产品的唯一主体。美国公司负责本地获客、客户触达、合作机会、市场反馈。美国公司不替代国内的产品主体，最终的产品规划、结构设计、UI/UX、开发、部署都是国内的主体职责。"
          keywords={["国外辅助", "国内唯一主体", "美国获客为主"]}
          tone="blue"
        />
        <PositionCard
          index="2"
          title="从公司“简历”和三条获客路径出发，扩大业务与合作交流圈"
          body="美国公司要把国内优秀能力、产品、官网、PPT、Demo 和案例沉淀成对外“简历”，再围绕三条商业路径持续获客、寻找合作、扩大业务、建立交流，并把真实市场信号反哺到国内。"
          keywords={["简历获客", "三条获客路径"]}
          tone="green"
        />
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 42px 1.16fr 42px 1fr 42px 1fr",
          gap: 12,
          alignItems: "center",
        }}
      >
        <StepCard
          step="Step 1"
          tone="legacy"
          title="旧模式：国内外两个主体一起拼凑产品、设计和开发"
          body="过去，美国公司持续按照国内团队要求，做功能、做设计、和国内主体拼凑出结果。美国公司自身没有完整人力和工程资源，却在产品过程中承担了主体职责。导致最后双边去拼凑出产品，产品主体不清晰，决策效率低下，协作不畅。"
          bullets={[
            "拼功能、拼设计、拼开发，产品主体逐渐变成两个",
            "美国公司没有足够产品、设计、工程资源，却长期推动国内主体完成产品",
            "时区、沟通效率、工作权限和信息同步都会极大放大协作难度",
            "每一步都需要两边反复确认，决策速度变慢",
            "美国公司本身比较少的资源陷入产品中，而不是更重要的市场获客和客户验证",
          ]}
          conclusion="旧模式的核心问题：美国公司在没有完整资源的情况下和国内一起拼产品，导致产品主权和决策主体不清晰，无法有效协作。"
        />
        <FlowArrow color={colors.orange} />
        <StepCard
          step="Step 2"
          tone="focus"
          badge="当前重点"
          title="新模式：一个产品主体 + 一个美国获客前端"
          body="当前最重要的是让国内团队成为唯一产品主体，美国公司回到最能创造价值的位置：把美国市场、客户、产品形态和竞品信息整理成国内可以自主使用。国内团队基于这些输入，自主完成产品设计、开发和迭代。"
          bullets={[
            "美国公司欢迎国内团队对市场，客户，产品的任何问题和讨论，我们永远是国内高意愿团队的第一支持者",
            "国内团队拥有完整的人员和资源，海外产品的成功本质上是国内团队的努力和成功的结果，所以产品的主体有且仅是国内团队。只有当美国团队在发展中逐步有自己的资源，才能有能力作为产品主体自主设计和开发。",
            "如果国内主体遇到产品P0-P6阶段难以解决的问题才应该向美国公司需求协助，比如无法试用海外产品做进一步做竞品分析。美国公司可以提供：市场调研、竞品分析、客户反馈、使用场景、文字说明、图片说明、和视频说明",
            "国内团队基于这些输入，应自主完成项目不同阶段，包括功能设计、开发决策、产品沉淀和长期迭代的全流程",
            "国内团队不能把主体责任给到美国。这是国内团队的产品，很多信息和数据都能搜索到，加上AI工具的巨大进步，拥有完整资源的国内团队，是能够完成产品全流程的。",
          ]}
          conclusion="国内团队需要自主开发和迭代产品；美国公司目前的资源成为不了第二个产品主体。"
        />
        <FlowArrow color={colors.green} />
        <StepCard
          step="Step 3"
          tone="growth"
          title="业务增长：国内优秀产品形成对应美国团队"
          body="当某个国内优秀产品在美国获得更多客户、收入和持续业务增长后，它自然需要对应的美国团队支持，这是必然结果。"
          bullets={[
            "美国公司可以协助完成本地团队的建设，帮助国内团队的优秀产品更进一步：Sales、Operations、Customer Success、Technical Support、Engineer",
            "美国团队服务这个产品在美国的销售、运营、交付、客户成功和技术支持",
            "产品主体、产品归属权和长期产品沉淀仍然属于国内团队",
            "美国公司负责把客户增长和本地团队组织管理起来",
          ]}
          conclusion="每一个真正做大的产品，最后都会长出对应的海外团队；但这个产品归属仍是国内团队，美国团队是业务增长后的结果。"
        />
        <FlowArrow color={colors.blue} />
        <StepCard
          step="Step 4"
          tone="future"
          title="长期发展：多个产品形成多个海外团队"
          body="当多个国内产品在美国或海外持续获得客户和收入后，会形成多个对应的海外团队；这些团队可能各自服务不同产品，也可能在客户、运营、技术支持和渠道上有交集。"
          bullets={[
            "多个产品带来更多客户、更多合作、更多海外业务机会",
            "多个海外团队可以共享客户资源、渠道关系、运营经验和本地支持能力",
            "美国公司负责公司发展、战略判断、组织结构、运营优化和资源分配",
            "目标是让美国公司服务更多客户、支持更多海外产品，形成更强大的美国团队",
          ]}
          conclusion="美国公司长期目标是管理和优化多个海外业务团队，让更多国内优秀产品在海外长出来。同时，美国公司自身变得强大也会促成自主的产品设计和开发能力的形成。"
        />
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 18,
          alignItems: "stretch",
          marginTop: 20,
        }}
      >
        <div
          style={{
            borderRadius: 20,
            background: "#FFFFFF",
            border: `1px solid ${colors.border}`,
            padding: 20,
            textAlign: "center",
            boxShadow: "0 12px 28px rgba(43, 81, 130, 0.06)",
          }}
        >
          <div
            style={{
              color: colors.ink,
              fontSize: 19,
              lineHeight: 1.62,
              fontWeight: 900,
            }}
          >
            美国公司的短期重点是提供美国市场输入、获客和客户验证；中期目标是让成功产品长出对应美国团队；长期目标是管理多个海外业务团队，扩大客户、合作、开始自己主导海外产品和美国团队能力。
          </div>
        </div>
      </section>

      <section
        style={{
          marginTop: 24,
          borderRadius: 28,
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 52%, #F7FCF8 100%)",
          border: `1px solid ${colors.border}`,
          padding: 28,
          boxShadow: "0 14px 32px rgba(43, 81, 130, 0.06)",
        }}
      >
        <div style={{ marginBottom: 22 }}>
          <div
            style={{
              ...label,
              background: "#EAF2FF",
              color: colors.blue,
              marginBottom: 10,
            }}
          >
            国内外共赢飞轮
          </div>
          <div
            style={{
              color: colors.ink,
              fontSize: 30,
              fontWeight: 900,
              lineHeight: 1.18,
            }}
          >
            用“简历”获客，把真实机会带回国内，再让国内外能力螺旋向上，实现共赢飞轮
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          <section style={panel}>
            <SectionTitle
              eyebrow="01 / 简历获客闭环"
              title="从国内能力到海外机会"
              description="把产品方案、案例、官网、PPT、Demo 变成可被海外客户理解的展示面。"
            />

            <div
              style={{
                position: "relative",
                minHeight: 500,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "72px 96px",
                  border: `4px solid ${colors.blue}`,
                  borderRightColor: colors.green,
                  borderBottomColor: colors.orange,
                  borderLeftColor: colors.green,
                  borderRadius: "50%",
                  opacity: 0.78,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 210,
                  minHeight: 132,
                  transform: "translate(-50%, -50%)",
                  borderRadius: 28,
                  background:
                    "linear-gradient(135deg, #1E5FD3 0%, #26A06F 100%)",
                  color: "#FFFFFF",
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  padding: 20,
                  boxShadow: "0 16px 34px rgba(30, 95, 211, 0.2)",
                }}
              >
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>
                    "简历"获客飞轮
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      lineHeight: 1.5,
                      marginTop: 8,
                      opacity: 0.95,
                    }}
                  >
                    用好的简历获得更多、更优质、更有未来价值的客户；简历是我们的获客敲门砖。
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: 560,
                  transform: "translateX(-50%)",
                }}
              >
                <StageCard
                  tone="blue"
                  title="国内简历 / 展示面"
                  body="关键方案、产品能力、案例证明、官网、技术PPT、客户PPT、产品Demo、完整产品"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 160,
                  right: 0,
                  width: 286,
                }}
              >
                <StageCard
                  tone="green"
                  title="海外触达"
                  body="官网、LinkedIn、邮件、会议。用展示面去寻找客户。"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: 560,
                  transform: "translateX(-50%)",
                }}
              >
                <StageCard
                  tone="orange"
                  title="客户反馈"
                  body="挖掘客户的现状和问题，不空谈产品能力。把客户想什么、愿意试什么、哪里不清楚、哪个场景可能成交呈现给国内。"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 160,
                  left: 0,
                  width: 286,
                }}
              >
                <StageCard
                  tone="green"
                  title="合作机会"
                  body="试聊、试用、项目合作、渠道合作、产品合作等反馈到国内。由国内实现解决方案或者产品。"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 126,
                  right: 300,
                  color: colors.blue,
                  fontSize: 32,
                  fontWeight: 900,
                }}
              >
                →
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 318,
                  bottom: 130,
                  color: colors.green,
                  fontSize: 32,
                  fontWeight: 900,
                }}
              >
                ↓
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 126,
                  left: 300,
                  color: colors.orange,
                  fontSize: 32,
                  fontWeight: 900,
                }}
              >
                ←
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 318,
                  top: 130,
                  color: colors.green,
                  fontSize: 32,
                  fontWeight: 900,
                }}
              >
                ↑
              </div>
            </div>

            <div
              style={{
                marginTop: 18,
                borderRadius: 18,
                background: "#F7FAFF",
                border: "1px solid #D7E4F5",
                padding: 16,
                color: colors.muted,
                fontSize: 13,
                lineHeight: 1.55,
              }}
            >
              通过简历去获客：国内外简历出发，海外触达拿反馈和合作机会，再回到国内升级简历和产品。不浪费每一次和客户接触的机会。
            </div>
          </section>

          <section
            style={{
              ...panel,
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 54%, #F6FCF8 100%)",
            }}
          >
            <SectionTitle
              eyebrow="02 / 互利共赢螺旋"
              title="国内团队主动拥抱海外，是撬动海外市场的最大杠杆"
              description="靠资源有限的美国办公室去主导产品，这条路不符合发展逻辑；应让国内团队主动拥抱海外，让美国办公室牵引辅助，才符合双边发展逻辑。"
            />

            <div
              style={{
                position: "relative",
                minHeight: 472,
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "24px 84px",
                  border: `3px solid ${colors.green}`,
                  borderLeftColor: "#D7E4F5",
                  borderBottomColor: colors.orange,
                  borderRadius: "50%",
                  transform: "rotate(-16deg)",
                  opacity: 0.8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "82px 144px",
                  border: `3px solid ${colors.blue}`,
                  borderRightColor: "#D7E4F5",
                  borderTopColor: colors.orange,
                  borderRadius: "50%",
                  transform: "rotate(22deg)",
                  opacity: 0.7,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 18,
                  left: 20,
                  right: 20,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <StageCard
                  tone="blue"
                  title="国内主动做"
                  body="不需要美国主导产品，而是基于海外盈利的野心和决心，主动设计开发产品。主动形成方案、案例、演示和交付。"
                />
                <StageCard
                  tone="green"
                  title="海外主动获客"
                  body="用国内的材料或产品Demo，主动找客户、找合作机会，把机会和信号带回国内。"
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  left: 20,
                  right: 20,
                  bottom: 18,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <StageCard
                  tone="orange"
                  title="合作机会增强信心"
                  body="有客户愿意聊、愿意试、愿意合作，国内团队才更容易有信心加大投入。"
                />
                <StageCard
                  tone="green"
                  title="共同分润形成正循环"
                  body="让有野心、有决心的国内团队，在美国办公室协助下享受海外市场收益，带动产品、运营、销售、技术和人才升级。"
                />
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: 292,
                  minHeight: 168,
                  borderRadius: 26,
                  background:
                    "linear-gradient(135deg, #1E5FD3 0%, #26A06F 100%)",
                  color: "#FFFFFF",
                  padding: 24,
                  display: "grid",
                  alignContent: "center",
                  gap: 10,
                  boxShadow: "0 18px 42px rgba(30, 95, 211, 0.22)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 25, fontWeight: 900 }}>螺旋向上</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.94 }}>
                  信心 → 投入 → 反馈 → 机会 → 能力 → 更大信心
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section
        style={{
          ...panel,
          marginTop: 22,
          display: "grid",
          gridTemplateColumns: "1.05fr 1.5fr",
          gap: 22,
          alignItems: "stretch",
        }}
      >
        <div>
          <SectionTitle
            eyebrow="这张图的顶层关系"
            title="总图先统一认知，后面四张图展开执行"
            description="先看清为什么要这么做，再进入路径、获客流程、官网结构和 MCN 样例。"
          />
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                ...label,
                background: colors.softBlue,
                color: colors.blue,
              }}
            >
              简历获客
            </span>
            <span
              style={{
                ...label,
                background: colors.softGreen,
                color: colors.green,
              }}
            >
              国内主动做
            </span>
            <span
              style={{
                ...label,
                background: colors.softOrange,
                color: colors.orange,
              }}
            >
              机会反哺
            </span>
            <span
              style={{
                ...label,
                background: colors.softRed,
                color: colors.red,
              }}
            >
              共同分润
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          <LinkedDiagram
            title="图 2：三条商业路径"
            body="总方向与路径边界"
            img="/generated/us-business-path-diagram-cn.png"
          />
          <LinkedDiagram
            title="图 3：获客流程"
            body="渠道、材料和协同闭环"
            img="/generated/global-gtm-flow-diagram-cn.png"
          />
          <LinkedDiagram
            title="图 4：官网结构"
            body="对外展示面与转化入口"
            img="/generated/website-content-flow-diagram-cn.png"
          />
          <LinkedDiagram
            title="图 5：MCN 样例"
            body="路径三的场景化验证"
            img="/generated/mcn-ai-operation-path-diagram-cn.png"
          />
        </div>
      </section>
    </div>
  );
}
