import React from "react";

type Props = {
  className?: string;
  title?: string;
};

const colors = {
  text: "#12345A",
  muted: "#5F728F",
  blue: "#2D6CDF",
  green: "#2D9B68",
  orange: "#D58A2D",
  line: "#D7E4F5",
  paleBlue: "#EAF2FF",
  paleGreen: "#EAF7F1",
  paleOrange: "#FFF4E8",
};

const panel = {
  background: "#FFFFFF",
  border: `1px solid ${colors.line}`,
  borderRadius: 24,
  padding: 22,
};

function Arrow() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "grid",
        placeItems: "center",
        color: colors.blue,
        fontSize: 24,
        fontWeight: 900,
      }}
    >
      →
    </div>
  );
}

function LoopStep({
  index,
  title,
  body,
  tone = "green",
}: {
  index: number;
  title: string;
  body: string;
  tone?: "green" | "blue" | "orange";
}) {
  const style =
    tone === "blue"
      ? { bg: colors.paleBlue, border: "#CFE0F9", text: "#1C4D86" }
      : tone === "orange"
        ? { bg: colors.paleOrange, border: "#F0D8B8", text: "#865415" }
        : { bg: colors.paleGreen, border: "#CFE8DC", text: "#17643F" };

  return (
    <div
      style={{
        borderRadius: 18,
        background: "#FFFFFF",
        border: `1px solid ${style.border}`,
        padding: 16,
        display: "grid",
        gridTemplateColumns: "34px 1fr",
        gap: 10,
        alignItems: "start",
        minHeight: 118,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 999,
          background: style.bg,
          color: style.text,
          display: "grid",
          placeItems: "center",
          fontSize: 14,
          fontWeight: 900,
        }}
      >
        {index}
      </div>
      <div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 900,
            color: colors.text,
            marginBottom: 6,
            lineHeight: 1.25,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 13, color: colors.muted, lineHeight: 1.5 }}>
          {body}
        </div>
      </div>
    </div>
  );
}

function MetricBox({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        borderRadius: 16,
        background: "#fff",
        border: "1px solid #CFE0F9",
        padding: "13px 14px",
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 900,
          color: "#1C4D86",
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 13, color: colors.muted, lineHeight: 1.45 }}>
        {body}
      </div>
    </div>
  );
}

export default function MCNAIOperationPathDiagram({
  className,
  title = "商业路径三：以 MCN 场景为例",
}: Props) {
  const loopSteps = [
    {
      title: "选择 MCN 具体场景",
      body: "以会议讨论的 MCN 场景为例，先选一个明确任务：渠道汇总、内容运营、创作者管理、线索跟进或数据分析。",
      tone: "orange" as const,
    },
    {
      title: "形成 MCN 的 MVP / 业务 PPT / Demo",
      body: "不要求完整产品，先把 MCN 用户是谁、要完成什么任务、能带来什么价值和 Demo 流程讲清楚。",
      tone: "green" as const,
    },
    {
      title: "美国办公室找 MCN 合作方",
      body: "用展示面去找本地 MCN、创作者团队、品牌合作方或服务机构，寻找愿意早期交流的友好客户。",
      tone: "blue" as const,
    },
    {
      title: "MCN 客户提供意见和合作可能",
      body: "看对方是否愿意试聊、试用、反馈真实流程，甚至讨论后续软件服务或运营合作协议。",
      tone: "blue" as const,
    },
    {
      title: "反馈推动 MCN 产品迭代",
      body: "把 MCN 客户的问题、使用阻力、真实兴趣和购买可能回传国内，帮助产品升级。",
      tone: "green" as const,
    },
    {
      title: "证明能完成 MCN 任务并创造价值",
      body: "当应用能帮助 MCN 团队完成任务、提升效率或带来业务价值，就开始验证商业模式。",
      tone: "green" as const,
    },
    {
      title: "形成软件服务 / 运营合作协议",
      body: "不一定一开始就有完整产品，但可以围绕后续软件服务、试点运营和客户成功达成合作。",
      tone: "orange" as const,
    },
    {
      title: "按 MCN 客户数量逐渐扩团队",
      body: "合作客户变多后，再扩大产品、运营、交付和客户成功团队。",
      tone: "orange" as const,
    },
  ];

  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(135deg, #F5F8FE 0%, #FCFDFF 100%)",
        borderRadius: 32,
        padding: 40,
        minWidth: 2400,
        color: colors.text,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ marginBottom: 22 }}>
        <div
          style={{
            fontSize: 38,
            fontWeight: 900,
            color: "#112B50",
            marginBottom: 10,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 17,
            color: colors.muted,
            maxWidth: 1300,
            lineHeight: 1.55,
          }}
        >
          以会议上讨论的 MCN 场景作为路径三样例：先形成 MVP / 业务 PPT /
          Demo，美国办公室去找 MCN
          相关合作方和友好客户，用真实反馈帮助产品迭代；如果效果不好，也可以调整产品方向或升级能力后再尝试。
        </div>
      </div>

      <section
        style={{
          ...panel,
          borderColor: "#9FD5BC",
          background: "#F5FBF8",
          boxShadow: "0 18px 40px rgba(45, 155, 104, 0.12)",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 36px 1fr 36px 1fr 36px 1fr",
            gap: 12,
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          {loopSteps.slice(0, 4).map((step, index) => (
            <React.Fragment key={step.title}>
              <LoopStep
                index={index + 1}
                title={step.title}
                body={step.body}
                tone={step.tone}
              />
              {index < 3 ? <Arrow /> : null}
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 36px 1fr 36px 1fr 36px 1fr",
            gap: 12,
            alignItems: "center",
          }}
        >
          {loopSteps.slice(4).map((step, index) => (
            <React.Fragment key={step.title}>
              <LoopStep
                index={index + 5}
                title={step.title}
                body={step.body}
                tone={step.tone}
              />
              {index < 3 ? <Arrow /> : null}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section
        style={{
          display: "block",
        }}
      >
        <div
          style={{
            ...panel,
            background: "#FFFFFF",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.08em",
              color: "#6380A6",
              marginBottom: 6,
            }}
          >
            KEY METRIC
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: colors.text,
              marginBottom: 12,
            }}
          >
            核心指标：MCN 场景在一段时间内找美国MCN合作方的合作客户数量
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            <MetricBox
              title="MCN / 机构数量"
              body="多少 MCN、创作者团队、品牌方或服务机构愿意听、愿意聊。"
            />
            <MetricBox
              title="真实用户数量"
              body="公司内有多少运营人员、创作者或业务负责人"
            />
            <MetricBox
              title="合作可能"
              body="多少客户愿意成为友好客户，或讨论后续软件服务/运营合作协议。"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
