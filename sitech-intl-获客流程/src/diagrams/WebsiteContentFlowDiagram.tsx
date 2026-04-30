import React from "react";

type Props = {
  className?: string;
  title?: string;
};

const panel = {
  background: "#fff",
  border: "1px solid #D8E6F7",
  borderRadius: 24,
  padding: 22,
};

const chip = {
  display: "inline-flex",
  alignItems: "center",
  padding: "7px 12px",
  borderRadius: 999,
  background: "#EEF4FF",
  color: "#1A4378",
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1.2,
};

const tinyChip = {
  ...chip,
  padding: "6px 10px",
  fontSize: 12,
  background: "#F5F8FD",
  color: "#506784",
};

const arrowCard = {
  borderRadius: 20,
  padding: "14px 18px",
  background: "linear-gradient(135deg, #EDF5FF 0%, #F9FBFF 100%)",
  border: "1px solid #D5E5FA",
  color: "#28558E",
  fontSize: 14,
  fontWeight: 700,
  textAlign: "center" as const,
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

function FlowArrow({ text }: { text: string }) {
  return (
    <div
      style={{
        ...arrowCard,
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span>{text}</span>
      <span
        aria-hidden="true"
        style={{
          fontSize: 22,
          lineHeight: 1,
          color: "#1F5FD1",
        }}
      >
        →
      </span>
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
  accent = "#EAF2FF",
  borderColor = "#D4E2F6",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  accent?: string;
  borderColor?: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${borderColor}`,
        borderRadius: 22,
        padding: 18,
        boxShadow: "0 8px 20px rgba(35, 78, 143, 0.06)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          padding: "6px 10px",
          borderRadius: 999,
          background: accent,
          fontSize: 12,
          fontWeight: 700,
          color: "#2A578F",
          marginBottom: 10,
        }}
      >
        页面 / 承接区
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#12345A" }}>
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            fontSize: 13,
            color: "#5E748F",
            lineHeight: 1.5,
            marginTop: 6,
            marginBottom: 12,
          }}
        >
          {subtitle}
        </div>
      ) : null}
      <div>{children}</div>
    </div>
  );
}

function TagRow({
  items,
  tone = "default",
}: {
  items: string[];
  tone?: "default" | "muted";
}) {
  const style = tone === "muted" ? tinyChip : chip;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((item) => (
        <span key={item} style={style}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function WebsiteContentFlowDiagram({
  className,
  title = "思特奇美国获客-官网内容结构",
}: Props) {
  return (
    <div
      className={className}
      style={{
        background:
          "linear-gradient(135deg, #F7FAFF 0%, #FDFEFF 42%, #F3F8FF 100%)",
        borderRadius: 32,
        padding: 40,
        color: "#12345A",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ marginBottom: 26 }}>
        <div
          style={{
            fontSize: 38,
            fontWeight: 700,
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
            lineHeight: 1.55,
            maxWidth: 1180,
          }}
        >
          官网作为对外展示、合作承接、产品演示与生态分发的统一入口，统一承接
          Solutions、合作伙伴产品、O2O
          服务生态与合作机会，并将不同访客导向不同转化路径。
        </div>
      </div>

      <section style={{ ...panel, marginBottom: 20 }}>
        <SectionTitle
          eyebrow="顶层定位"
          title="官网 Website：对外总入口"
          description="先由首页完成聚合展示、首次信任建立。再进入不同承接页，最终落到解决方案咨询、Demo、合作洽谈。"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.7fr 1.45fr 0.85fr",
            gap: 14,
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              padding: 22,
              color: "#fff",
              background: "linear-gradient(135deg, #164BAA 0%, #4089FF 100%)",
              boxShadow: "0 16px 32px rgba(23, 76, 170, 0.22)",
            }}
          >
            <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 8 }}>
              顶层入口
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 10 }}>
              官网 Website
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.95 }}>
              品牌、方案、产品、生态与合作的统一对外窗口
            </div>
          </div>
          <FlowArrow text="首页聚合与分发" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            {["品牌与信任入口", "解决方案入口", "产品入口", "生态合作入口"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    background: "#F5F9FF",
                    border: "1px solid #DCE9FA",
                    borderRadius: 18,
                    padding: 16,
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#254F86",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
          <FlowArrow text="转化与跟进" />
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "320px minmax(860px, 1fr) 340px",
          gap: 20,
          alignItems: "start",
        }}
      >
        <div style={{ display: "grid", gap: 18 }}>
          <div style={panel}>
            <SectionTitle
              eyebrow="一级页面"
              title="Home：首页聚合与分发"
              description="官网的总入口，完成主叙事、价值说明、内容分发与首次信任建立。"
            />
            <TagRow
              items={[
                "公司定位与主叙事",
                "我们帮助谁",
                "我们解决什么问题",
                "Products 入口",
                "Solutions 概览",
                "O2O 入口",
                "合作入口",
                "留资 CTA",
              ]}
            />
          </div>

          <div
            style={{
              ...panel,
              background: "#FFF9EC",
              borderColor: "#F2D79A",
            }}
          >
            <SectionTitle
              eyebrow="辅助页面"
              title="About：公司背景与能力背书"
              description="About 不只是公司介绍，而是对 Solutions、Products、Partnership 提供统一信用支撑。"
            />
            <TagRow
              items={[
                "成立于 1995",
                "3000+ 技术员工",
                "30 年电信经验",
                "服务超 10 亿用户",
                "复杂系统交付能力",
                "CMMI-5 等认证",
                "美国前台 + 交付体系",
              ]}
              tone="muted"
            />
          </div>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          <div
            style={{
              ...panel,
              background: "linear-gradient(135deg, #EFF5FF 0%, #FBFCFF 100%)",
            }}
          >
            <SectionTitle
              eyebrow="核心承接层"
              title="官网内容承接页"
              description="Home 将不同访客导向不同承接页。承接页不是简单导航，而是针对不同需求场景组织内容与转化。"
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 16,
              }}
            >
              <Card
                title="Solutions：思特奇自有解决方案"
                subtitle="我们能做什么、如何合作交付"
                accent="#EAF2FF"
              >
                <TagRow
                  items={[
                    "面向电信 & 运营商 & MVNO的复杂服务的解决方案的方向",
                    "把AI真正放进客服、服务和运营的方向",
                    "面向产业平台、协同体系与定制化业务系统的可落地的方向",
                  ]}
                />
                <div
                  style={{
                    marginTop: 12,
                    display: "grid",
                    gap: 8,
                    fontSize: 13,
                    color: "#5F728F",
                  }}
                >
                  <div>
                    {"场景问题 -> 解决方式 -> 适合客户 -> 项目咨询入口"}
                  </div>
                  <div>项目型合作、方案评估、试点和联合交付为主</div>
                </div>
              </Card>

              <Card
                title="Products：思特奇或合作伙伴的 SaaS 产品展示与 Demo"
                subtitle="现成可展示、可试点、可快速落地的产品能力"
                accent="#EAF7F2"
                borderColor="#CFE8DC"
              >
                <TagRow
                  items={[
                    "Helport 产品系列",
                    "Teamshub（暂无）",
                    "智能客服（暂无）",
                    "其他合作伙伴产品（可扩展）",
                  ]}
                />
                <div
                  style={{
                    marginTop: 12,
                    display: "grid",
                    gap: 8,
                    fontSize: 13,
                    color: "#5F728F",
                  }}
                >
                  <div>产品简介 + 适用场景 + Demo / 演示 + 试点 / 咨询入口</div>
                  <div>强调可直接使用的 SaaS 产品是亮点</div>
                </div>
              </Card>

              <Card
                title="O2O Marketplace：出海服务生态与渠道分发"
                subtitle="官网不仅提供解决方案和产品，也组织内外的服务生态并承担渠道角色"
                accent="#FFF3EA"
                borderColor="#F2D8BC"
              >
                <div style={{ display: "grid", gap: 12 }}>
                  <TagRow
                    items={[
                      "合规",
                      "税务",
                      "法务",
                      "财务",
                      "注册",
                      "人力",
                      "本地落地服务",
                    ]}
                    tone="muted"
                  />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto 1fr",
                      gap: 8,
                      alignItems: "center",
                      fontSize: 13,
                      color: "#5F728F",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 16,
                        background: "#FFF8F3",
                        border: "1px solid #F5DDC6",
                        padding: 12,
                        textAlign: "center",
                      }}
                    >
                      出海企业找服务
                    </div>
                    <div style={{ fontWeight: 700, color: "#D28935" }}>↔</div>
                    <div
                      style={{
                        borderRadius: 16,
                        background: "#FFF8F3",
                        border: "1px solid #F5DDC6",
                        padding: 12,
                        textAlign: "center",
                      }}
                    >
                      服务商申请入驻
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#5F728F" }}>
                    思特奇承担连接、渠道、分发与合作转化
                  </div>
                </div>
              </Card>

              <Card
                title="Partnership：合作与渠道机会"
                subtitle="面向本地合作伙伴，需求多方面合作"
                accent="#F0ECFF"
                borderColor="#DDD3FF"
              >
                <TagRow
                  items={["本地合作伙伴", "联合方案合作", "渠道合作"]}
                  tone="muted"
                />
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 13,
                    color: "#5F728F",
                    lineHeight: 1.55,
                  }}
                >
                  补足官网不仅面向客户，也面向合作伙伴的定位。
                </div>
              </Card>
            </div>
          </div>

          <div
            style={{
              ...panel,
              background: "#F5F9FF",
              borderColor: "#DCE8F8",
            }}
          >
            <SectionTitle
              eyebrow="导航结构"
              title="页面之间的结构关系"
              description="用官网导航栏表达主要页面关系"
            />
            <div
              style={{
                display: "grid",
                gap: 12,
              }}
            >
              <div
                style={{
                  borderRadius: 18,
                  background: "#fff",
                  border: "1px solid #D7E4F5",
                  padding: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#6984A8",
                    marginBottom: 10,
                  }}
                >
                  NAVIGATION BAR
                </div>
                <TagRow
                  items={[
                    "Home",
                    "Products",
                    "Solutions",
                    "Partnership",
                    "Stories",
                    "About",
                    "Contact",
                    "Marketplace",
                  ]}
                />
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#5F728F",
                  lineHeight: 1.6,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          <div
            style={{
              ...panel,
              background: "#EFF8FF",
              borderColor: "#D4E8FA",
            }}
          >
            <SectionTitle
              eyebrow="补充说明"
              title="Products：合作伙伴产品主线"
              description=""
            />
            <div style={{ display: "grid", gap: 10 }}>
              {[
                "合作伙伴已有产品 -> 形成合作协议，入驻产品页",
                "客户通过产品介绍 + 场景说明 -> 判断是否适合进一步沟通",
                "客户对产品感兴趣 -> 预约 Demo 演示或试用",
                "交由合作伙伴完成最终交易 -> 思特奇获取分成",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: 15,
                    background: "#fff",
                    border: "1px solid #D8E6F5",
                    padding: "10px 12px",
                    fontSize: 13,
                    color: "#4F6884",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              ...panel,
              background: "#FFF8F0",
              borderColor: "#F1DAC2",
            }}
          >
            <SectionTitle
              eyebrow="补充说明"
              title="O2O 生态主线"
              description=""
            />
            <div style={{ display: "grid", gap: 10 }}>
              {[
                "美国本地服务商 / 合作机构 -> 形成合作协议，入驻",
                "O2O Marketplace -> 分类展示",
                "中国企业 -> 咨询和浏览，选择服务",
                "形成跨境的合作 -> 思特奇获取分成",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: 15,
                    background: "#fff",
                    border: "1px solid #F0DDCA",
                    padding: "10px 12px",
                    fontSize: 13,
                    color: "#715A44",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
