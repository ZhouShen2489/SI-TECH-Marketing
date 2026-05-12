import React from "react";

type Props = {
  className?: string;
  title?: string;
};

const panel = {
  background: "#fff",
  border: "1px solid #D7E4F5",
  borderRadius: 24,
  padding: 22,
};

const chip = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "7px 12px",
  borderRadius: 999,
  background: "#EEF4FF",
  color: "#1A4378",
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.2,
};

const mutedChip = {
  ...chip,
  background: "#F6F8FC",
  color: "#58708E",
  fontWeight: 600,
};

const successChip = {
  ...chip,
  background: "#EAF7F1",
  color: "#17643F",
};

const orangeChip = {
  ...chip,
  background: "#FFF3E6",
  color: "#9A5A14",
};

const flowNode = {
  minHeight: 78,
  borderRadius: 18,
  border: "1px solid #D6E4F7",
  background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)",
  padding: "14px 12px",
  display: "grid",
  placeItems: "center",
  textAlign: "center" as const,
  color: "#1E4775",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.35,
};

const pathColors = {
  resource: {
    accent: "#EAF2FF",
    border: "#CFE0F9",
    text: "#1C4D86",
    line: "#2D6CDF",
  },
  local: {
    accent: "#FFF4E8",
    border: "#F0D8B8",
    text: "#865415",
    line: "#D58A2D",
  },
  product: {
    accent: "#EAF7F1",
    border: "#CFE8DC",
    text: "#17643F",
    line: "#2D9B68",
  },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div style={{ marginBottom: 14 }}>
      {eyebrow ? (
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#6380A6",
            marginBottom: 6,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div style={{ fontSize: 20, fontWeight: 700, color: "#12345A" }}>
        {title}
      </div>
      {description ? (
        <div
          style={{
            marginTop: 8,
            fontSize: 14,
            color: "#5F728F",
            lineHeight: 1.55,
          }}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

function TagRow({
  items,
  tone = "default",
}: {
  items: string[];
  tone?: "default" | "muted" | "success" | "orange";
}) {
  const style =
    tone === "success"
      ? successChip
      : tone === "orange"
        ? orangeChip
        : tone === "muted"
          ? mutedChip
          : chip;

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {items.map((item) => (
        <span key={item} style={style}>
          {item}
        </span>
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "grid",
        placeItems: "center",
        color: "#2D6CDF",
        fontSize: 24,
        fontWeight: 700,
      }}
    >
      →
    </div>
  );
}

function SmallDownArrow({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "grid",
        placeItems: "center",
        height: 12,
        color,
        fontSize: 13,
        fontWeight: 900,
        lineHeight: 1,
        opacity: 0.78,
      }}
    >
      ↓
    </div>
  );
}

function PathCard({
  label,
  title,
  type,
  description,
  steps,
  positioningItems,
  canDoItems,
  footer,
  tone,
}: {
  label: string;
  title: string;
  type: string;
  description: string;
  steps: string[];
  positioningItems: string[];
  canDoItems: string[];
  footer?: React.ReactNode;
  tone: keyof typeof pathColors;
}) {
  const colors = pathColors[tone];

  return (
    <div
      style={{
        ...panel,
        borderColor: colors.border,
        background: "linear-gradient(180deg, #FFFFFF 0%, #FBFDFF 100%)",
        boxShadow: "0 12px 28px rgba(33, 74, 130, 0.08)",
        minHeight: 690,
        display: "grid",
        gridTemplateRows: "auto auto auto auto",
        alignContent: "start",
        gap: 16,
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            padding: "7px 11px",
            borderRadius: 999,
            background: colors.accent,
            color: colors.text,
            fontSize: 12,
            fontWeight: 800,
            marginBottom: 10,
          }}
        >
          {label} · {type}
        </div>
        <div
          style={{
            fontSize: 23,
            fontWeight: 800,
            color: "#12345A",
            lineHeight: 1.25,
            marginBottom: 8,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 14, color: "#5F728F", lineHeight: 1.58 }}>
          {description}
        </div>
      </div>

      <div
        style={{
          borderRadius: 18,
          padding: 14,
          background: colors.accent,
          border: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: 4,
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div
                style={{
                  borderRadius: 14,
                  background: "#fff",
                  border: `1px solid ${colors.border}`,
                  padding: "8px 11px",
                  color: colors.text,
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  minHeight: 34,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: colors.line,
                    marginRight: 6,
                    flex: "0 0 auto",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </div>
              {index < steps.length - 1 ? (
                <SmallDownArrow color={colors.line} />
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          alignSelf: "start",
        }}
      >
        <div
          style={{
            borderRadius: 18,
            background: "#F7FAFF",
            border: "1px solid #E0EAF8",
            padding: 14,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#294F7C",
              marginBottom: 10,
            }}
          >
            路径定位
          </div>
          <TagRow items={positioningItems} tone="muted" />
        </div>
        <div
          style={{
            borderRadius: 18,
            background: "#F5FBF8",
            border: "1px solid #DCEEE5",
            padding: 14,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#285B40",
              marginBottom: 10,
            }}
          >
            美国办公室能做什么
          </div>
          <TagRow items={canDoItems} tone="success" />
        </div>
      </div>

      {footer ? <div>{footer}</div> : null}
    </div>
  );
}

function NoteBlock({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: keyof typeof pathColors;
}) {
  const colors = pathColors[tone];

  return (
    <div
      style={{
        borderRadius: 18,
        background: colors.accent,
        border: `1px solid ${colors.border}`,
        padding: 14,
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 800,
          color: colors.text,
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              borderRadius: 14,
              background: "#fff",
              border: `1px solid ${colors.border}`,
              padding: "9px 11px",
              fontSize: 12,
              color: colors.text,
              fontWeight: 800,
              lineHeight: 1.4,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function PresentationImportanceSection() {
  return (
    <section
      style={{
        marginBottom: 18,
        padding: "16px 24px 18px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: 18,
          alignItems: "center",
        }}
      >
        <SectionTitle
          eyebrow="PRESENTATION MATTERS"
          title="展示面为什么重要"
          description="这是三条路径共同依赖的第一层信任。客户愿不愿意深入聊下去，往往先取决于公司呈现出来的能力和专业度。"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 26,
            alignItems: "center",
          }}
        >
          <img
            src="/generated/presentation-hod-lipson.png"
            alt="Hod Lipson presentation quote"
            style={{
              width: "78%",
              maxWidth: 640,
              display: "block",
              justifySelf: "center",
            }}
          />
          <img
            src="/generated/presentation-steve-jobs-macbook.png"
            alt="Steve Jobs MacBook Air envelope presentation quote"
            style={{
              width: "78%",
              maxWidth: 640,
              display: "block",
              justifySelf: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function SideStepList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: keyof typeof pathColors;
}) {
  const colors = pathColors[tone];

  return (
    <div
      style={{
        borderRadius: 18,
        background: colors.accent,
        border: `1px solid ${colors.border}`,
        padding: 14,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 800,
          color: colors.text,
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "grid",
          gap: 9,
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <div
              style={{
                borderRadius: 14,
                background: "#fff",
                border: `1px solid ${colors.border}`,
                color: colors.text,
                minHeight: 46,
                padding: "9px 11px",
                fontSize: 13,
                fontWeight: 800,
                lineHeight: 1.25,
              }}
            >
              <span style={{ color: colors.line, marginRight: 6 }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </div>
            {index < items.length - 1 ? (
              <SmallDownArrow color={colors.line} />
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ProductCoCreationCard() {
  const colors = pathColors.product;

  return (
    <div
      style={{
        ...panel,
        borderColor: colors.border,
        background: "linear-gradient(180deg, #FFFFFF 0%, #FBFEFC 100%)",
        boxShadow: "0 12px 28px rgba(33, 74, 130, 0.08)",
        minHeight: 690,
        display: "grid",
        gridTemplateRows: "auto auto 1fr auto",
        gap: 16,
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            padding: "7px 11px",
            borderRadius: 999,
            background: colors.accent,
            color: colors.text,
            fontSize: 12,
            fontWeight: 800,
            marginBottom: 10,
          }}
        >
          路径三 · 产品共创与运营型
        </div>
        <div
          style={{
            fontSize: 23,
            fontWeight: 800,
            color: "#12345A",
            lineHeight: 1.25,
            marginBottom: 8,
          }}
        >
          产品场景共创与美国运营
        </div>
        <div style={{ fontSize: 14, color: "#5F728F", lineHeight: 1.58 }}>
          国内团队基于对海外的认知和信心，有开发海外市场的决心，并对产品主体负责；美国侧从早期场景和
          Demo阶段就开始找合作伙伴和客户反馈，双方通过反馈循环逐步完成产品，开启运营。
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 82px 1fr",
          gap: 12,
          alignItems: "stretch",
        }}
      >
        <SideStepList
          title="左侧：美国需要做的事情"
          tone="resource"
          items={[
            "按需提供市场调研、竞品分析、使用场景，包括文字/图片/视频等方式",
            "基于国内的业务 PPT / Demo 开始对外交流获客，寻找友好客户",
            "对接合作客户，获取反馈，推动合作",
            "推动试点合作，形成商业模式，再慢慢走向运营",
            "实现国内外的互利共赢",
          ]}
        />

        <div
          style={{
            display: "grid",
            alignContent: "center",
            gap: 12,
            color: colors.line,
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 24 }}>→</div>
          <div
            style={{
              borderRadius: 999,
              background: colors.accent,
              border: `1px solid ${colors.border}`,
              padding: "9px 6px",
              fontSize: 12,
              lineHeight: 1.25,
              color: colors.text,
            }}
          >
            客户反馈
            <br />
            反推产品
          </div>
          <div style={{ fontSize: 24 }}>←</div>
          <div
            style={{
              borderRadius: 999,
              background: "#F7FAFF",
              border: "1px solid #D7E4F5",
              padding: "9px 6px",
              fontSize: 12,
              lineHeight: 1.25,
              color: "#294F7C",
            }}
          >
            产品迭代
            <br />
            支撑市场
          </div>
        </div>

        <SideStepList
          title="右侧：国内需要做的事情"
          tone="product"
          items={[
            "理解海外市场的巨大潜力和机会，有极大的意向去实现海外盈利",
            "对产品主体负责，主动设计开发适合海外的产品",
            "按优势产品 / 现有产品 / 获客潜力 / 赚钱潜力等维度选择小场景",
            "完成海外场景的 业务PPT / MVP / Demo 作为展示面",
            "根据美国客户反馈，调整资源投入",
            "让产品逐步走向产品化运营，持续迭代升级",
          ]}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <div
          style={{
            borderRadius: 18,
            background: "#FFF8EF",
            border: "1px solid #F0D8B8",
            padding: 14,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#865415",
              marginBottom: 10,
            }}
          >
            为什么国内团队的主动性很重要
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              "美国办公室是辅助国内有野心的团队实现产品出海、高收益、产品运营、部门扩张和人才流入的海外机会。美国办公室愿意去协助，验证目标市场、完善产品设计、推动客户成功，但无法替代国内团队的任何角色去实现这些事情",
              "海外市场的成功主要取决于国内团队是否愿意主动承担产品责任，并提供真正有价值的产品",
              "目前美国人员资源有限，只能借助国内的大杠杆去撬动发展。美国办公室也会在过程中变得壮大，去承担更多责任海外业务的责任",
            ].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 14,
                  background: "#fff",
                  border: "1px solid #F0D8B8",
                  padding: "9px 11px",
                  fontSize: 12,
                  color: "#865415",
                  fontWeight: 800,
                  lineHeight: 1.35,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderRadius: 18,
            background: "#F3FBF7",
            border: "1px solid #CFE8DC",
            padding: 14,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: colors.text,
              marginBottom: 10,
            }}
          >
            为什么 PPT / Demo 前期阶段就可以拿去获客
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              "前提：展示面要做好，让客户看得懂、愿意聊，不在于马上达成合作",
              "业务最重要，没有业务可能性，工具/产品都是陪跑",
              "花费很少的资源的情况下，低成本试探市场兴趣，基于反馈快速调整方向",
              "美国办公室可帮助团队找客户、找合作伙伴、拿真实反馈",
              "避免投入大量资源后，才发现产品没有需求和客户",
            ].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 14,
                  background: "#fff",
                  border: "1px solid #CFE8DC",
                  padding: "9px 11px",
                  fontSize: 12,
                  color: colors.text,
                  fontWeight: 800,
                  lineHeight: 1.35,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function USBusinessPathDiagram({
  className,
  title = "美国商业路径：从展示面到合作收入",
}: Props) {
  const topFlow = [
    "优秀展示面",
    "本地客户 / 合作方接触",
    "交流圈扩大",
    "形成合作",
    "收入转化",
  ];

  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(135deg, #F5F8FE 0%, #FCFDFF 100%)",
        borderRadius: 32,
        padding: 40,
        minWidth: 2600,
        color: "#12345A",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: "#112B50",
            marginBottom: 10,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 17,
            color: "#5F728F",
            maxWidth: 1180,
            lineHeight: 1.55,
          }}
        >
          通过优秀的可信任的展示面扩大本地接触机会，在三条路径中寻找合作机会。
        </div>
      </div>

      <section
        style={{
          ...panel,
          marginBottom: 18,
          background: "linear-gradient(135deg, #EAF2FF 0%, #F9FBFF 100%)",
        }}
      >
        <SectionTitle
          eyebrow="TOP GOAL"
          title="最终目标链路"
          description="中美公司同时致力于三条商业路径的实现"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1fr) 28px minmax(0, 1fr) 28px minmax(0, 1fr) 28px minmax(0, 1fr) 28px minmax(0, 1fr)",
            gap: 10,
            alignItems: "center",
          }}
        >
          {topFlow.map((item, index) => (
            <React.Fragment key={item}>
              <div style={flowNode}>{item}</div>
              {index < topFlow.length - 1 ? <Arrow /> : null}
            </React.Fragment>
          ))}
        </div>
      </section>

      <PresentationImportanceSection />

      <section
        style={{
          ...panel,
          marginBottom: 18,
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: 18,
            alignItems: "center",
          }}
        >
          <SectionTitle
            eyebrow="COMMON FOUNDATION"
            title="共同基础：“简历”展示面"
            description="三条路径共同依赖这层基础。没有展示面，客户很难建立信任"
          />
          <TagRow
            items={[
              "Sitech Intl 新官网",
              "Sitech Intl LinkedIn首页",
              "某优势产品/解决方案的一页纸材料",
              "案例 / 解决方案故事",
              "某产品的Demo / 实操视频 / 业务PPT",
              "接触客户模版材料",
              "电话/短信渠道",
              "AI工具辅助全流程的获客",
            ]}
          />
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "0.82fr 0.82fr 1.36fr",
          gap: 18,
          marginBottom: 18,
        }}
      >
        <PathCard
          label="路径一"
          title="国内优势资源的美国转化"
          type="资源转化型"
          tone="resource"
          description="把国内已有的好的产品、解决方案、案例和行业经验，转化成美国客户看得懂、愿意继续了解的展示面；美国侧负责全球获客、沟通和机会识别，成熟机会再导入国内支撑。"
          steps={[
            "国内优势确定-公司三方判断（管理层，国内团队，美国办公室）",
            "优势解决方案或产品的材料整理",
            "美国化对外表达",
            "形成面向客户展示面",
            "开启获客并激发客户兴趣",
            "形成合作机会",
            "国内支撑合作交付，国外推动客户成功",
            "获取共同收入",
          ]}
          positioningItems={[
            "主要针对国内优秀的的解决方案",
            "国内提供和生成所需材料和展示面",
            "美国负责展示面本地优化、获客和合作机会",
            "机会成熟后再导入国内，由国内完成",
          ]}
          canDoItems={["做美国侧展示面优化", "找全球客户交流", "形成合作合同"]}
        />

        <PathCard
          label="路径二"
          title="美国本地轻量合作"
          type="本地轻量合作型"
          tone="local"
          description="美国侧在获客过程中，同步识别本地可自主推进的轻量合作。重点是渠道合作伙伴、转介绍、联合获客、资源互换，不承诺重型项目交付。"
          steps={[
            "自行开展获客",
            "接触本地客户 / 公司 / 个人",
            "判断轻量合作 OR 复杂合作转交路径一/三",
            "扩大交流圈",
            "获取轻量收入",
          ]}
          positioningItems={[
            "只做美国侧能胜任的合作",
            "不承诺复杂交付，如需复杂交付，转给路径一或路径三",
            "优先扩大本地交流圈",
            "合作以渠道合作和转介绍为主",
          ]}
          canDoItems={[
            "做美国侧展示面",
            "寻找推荐关系",
            "设计美国办公室的合作获客流程",
            "把复杂机会转给路径一/三",
          ]}
        />

        <ProductCoCreationCard />
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 18,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            ...panel,
            background: "#FFFFFF",
          }}
        >
          <SectionTitle
            eyebrow="PATH RELATIONSHIP"
            title="三条路径可以互相转化，不是三条孤立业务线"
            description="路径一偏国内资源转化，路径二偏美国本地轻量合作，路径三偏产品共创和长期运营。"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            {[
              {
                title: "路径二发现复杂合作机会",
                body: "需要国内已有能力支撑，转入路径一。",
                tone: "orange" as const,
              },
              {
                title: "路径二发现产品合作机会",
                body: "可协同国内一块形成可复制产品，进入路径三。",
                tone: "orange" as const,
              },
              {
                title: "路径一完成项目后产品化",
                body: "交付项目完成并验证价值后，可进一步抽象成产品方向。",
                tone: "success" as const,
              },
              {
                title: "路径三产品成熟",
                body: "反过来增强路径一和路径二的获客转化。",
                tone: "success" as const,
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: 18,
                  border: "1px solid #E0EAF8",
                  background: item.tone === "success" ? "#F4FBF7" : "#FFF9F1",
                  padding: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: item.tone === "success" ? "#17643F" : "#865415",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{ fontSize: 13, color: "#5F728F", lineHeight: 1.55 }}
                >
                  {item.body}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 14,
              borderRadius: 18,
              border: "1px solid #DCE8F8",
              background: "#F7FAFF",
              padding: 16,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "240px 1fr",
                gap: 14,
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#12345A",
                    marginBottom: 6,
                  }}
                >
                  同一集团内的合作和受益方式
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#5F728F",
                    lineHeight: 1.55,
                  }}
                >
                  美国公司与国内公司同属一个集团/全资体系，双方共同服务客户时，要让美国侧、国内侧都合理受益。具体机制需交给财务、税务、法务等专业人员继续讨论。
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.9fr 1.1fr 1.1fr 1.25fr",
                  gap: 8,
                }}
              >
                {["可能机制", "需要明确", "需要证明", "专业确认"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#6380A6",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item}
                    </div>
                  ),
                )}
                {[
                  "服务费 / 成本分摊 / 利润分配",
                  "谁研发、谁交付、谁运营、谁承担风险",
                  "合同、发票、工时、交付物、客户反馈记录",
                  "转让定价、税务口径、合规路径和内部结算",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      borderRadius: 12,
                      background: "#fff",
                      border: "1px solid #D7E4F5",
                      padding: "9px 10px",
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#294F7C",
                      lineHeight: 1.35,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            ...panel,
            background: "linear-gradient(135deg, #102F57 0%, #1F5FA9 100%)",
            color: "#fff",
            borderColor: "#1F5FA9",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              opacity: 0.78,
              marginBottom: 8,
            }}
          >
            FINAL OUTCOME
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
            美国侧成为市场风向、获客、合作转化与运营中心
          </div>
          <div style={{ display: "grid", gap: 9 }}>
            {[
              "提供市场风向，提升国内对海外市场的信心和野心",
              "和本地和全球客户建立沟通联系",
              "中美公司功能互补、共同受益，形成良性循环",
              "美国办公室成为国内产品出海、客户成功和运营的辅助力量",
            ].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "10px 12px",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
