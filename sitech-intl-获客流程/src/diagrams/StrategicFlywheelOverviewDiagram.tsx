type Props = {
  className?: string;
  title?: string;
};

const colors = {
  ink: "#102B4D",
  muted: "#60748F",
  blue: "#1E5FD3",
  green: "#17835A",
  orange: "#B46A16",
  red: "#B44949",
  border: "#D7E4F5",
  softBlue: "#EEF5FF",
  softGreen: "#ECF8F2",
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
  fontWeight: 700,
  lineHeight: 1.2,
};

function Arrow({
  label,
  color = colors.blue,
}: {
  label: string;
  color?: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: 8,
        color,
        fontSize: 13,
        fontWeight: 700,
        minWidth: 118,
      }}
    >
      <div
        style={{
          height: 2,
          background: color,
          borderRadius: 999,
        }}
      />
      <div style={{ fontSize: 22, lineHeight: 1 }}>→</div>
      <div
        style={{
          gridColumn: "1 / 3",
          color,
          textAlign: "center",
          marginTop: -4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function StageCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: "blue" | "green" | "orange" | "red";
}) {
  const toneMap = {
    blue: { bg: colors.softBlue, text: colors.blue, border: "#CFE0F9" },
    green: { bg: colors.softGreen, text: colors.green, border: "#CFE8DC" },
    orange: { bg: colors.softOrange, text: colors.orange, border: "#F0D8B8" },
    red: { bg: colors.softRed, text: colors.red, border: "#F1D0D0" },
  }[tone];

  return (
    <div
      style={{
        background: toneMap.bg,
        border: `1px solid ${toneMap.border}`,
        borderRadius: 18,
        padding: "14px 16px",
        minHeight: 104,
        display: "grid",
        gap: 8,
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 800, color: toneMap.text }}>
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

export default function StrategicFlywheelOverviewDiagram({
  className,
  title = "思特奇-国内外获客与共赢飞轮",
}: Props) {
  return (
    <div
      className={className}
      style={{
        background:
          "linear-gradient(135deg, #F5F8FE 0%, #FFFFFF 48%, #F7FBF7 100%)",
        borderRadius: 32,
        padding: 40,
        color: colors.ink,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 28,
          alignItems: "end",
          marginBottom: 28,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              ...label,
              background: "#EAF2FF",
              color: colors.blue,
              marginBottom: 12,
            }}
          >
            顶层总图 / 先讲为什么，再看后面怎么做
          </div>
          <div
            style={{
              color: "#102744",
              fontSize: 42,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: colors.muted,
              fontSize: 17,
              lineHeight: 1.55,
              maxWidth: 1160,
            }}
          >
            不是一次性做出完整产品，而是先用公司“简历/展示面”出海获客，
            把真实客户反馈和合作机会带回国内，再推动国内外的团队的产品、运营、销售、技术和人才螺旋升级。
          </div>
        </div>
        <div
          style={{
            borderRadius: 22,
            border: "1px solid #D5E2F4",
            background: "rgba(255,255,255,0.82)",
            padding: 18,
            width: 330,
          }}
        >
          <div style={{ color: colors.green, fontSize: 17, fontWeight: 800 }}>
            核心判断
          </div>
          <div
            style={{
              color: colors.muted,
              fontSize: 13,
              lineHeight: 1.55,
              marginTop: 8,
            }}
          >
            海外不是国内业务的附属动作，而是改善商业模式、增强组织信心、创造长期合作和分润机制的入口。
          </div>
        </div>
      </header>

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
                background: "linear-gradient(135deg, #1E5FD3 0%, #26A06F 100%)",
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
            通过简历去获客：国内外简历出发，海外触达拿反馈和合作机会，再回到国内升级简历和产品。不浪费每一次和客户接触的机会，让每一次获客即使不成功都可以不后悔，
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
            title="国内团队主动拥抱海外，是撬动海外市场的最大的杠杆"
            description="基于过去的经验，靠资源有限的美国办公室去主导产品，这条路不符合发展逻辑；应让国内团队主动拥抱海外，让美国办公室牵引辅助，才符合双边发展逻辑。"
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
                body="不是等美国主导产品，而是基于海外盈利的野心和决心，主动设计开发产品。主动形成方案、案例、演示和交付。"
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
                body="让有野心、有决心、有态度做国外市场的国内团队在海外办公室的协助下享受海外市场的收益。实现团队产品、运营、销售、技术和人才的螺旋升级。"
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: 292,
                minHeight: 168,
                borderRadius: 26,
                background: "linear-gradient(135deg, #1E5FD3 0%, #26A06F 100%)",
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

        <section
          style={{
            ...panel,
            gridColumn: "1 / 3",
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 52%, #F7FCF8 100%)",
          }}
        >
          <SectionTitle
            eyebrow="03 / 美国办公室的发展设想"
            title="业务增长和合作加强，美国办公室才自然成长"
            description="美国团队不是凭空扩张，而是随着国内产品成功、合作机会增加、海外支撑需求增加而成长；达到一定水平后，才能提供更多海外支撑，做更多不受限于国内资源的美国本地合作。"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
              gap: 14,
              alignItems: "center",
            }}
          >
            <StageCard
              tone="blue"
              title="现在：2产品经理 / CEO和顾问带领"
              body="亲自获客、沟通、跟进、整理材料，先跑出成功的获客案例。"
            />
            <Arrow label="业务增长" />
            <StageCard
              tone="green"
              title="+ Sales / BD 支撑"
              body="有更多合作机会，有更多解决方案和产品项目，大约 10+ 个客户/合作机会后考虑。"
            />
            <Arrow label="合作加强" color={colors.green} />
            <StageCard
              tone="orange"
              title="+ 美国技术支持 / 工程师"
              body="国内团队的优秀产品成功打入海外市场需要运营，或海外已有明确合作机会，需要更多海外技术支撑时考虑"
            />
            <Arrow label="能力独立" color={colors.orange} />
            <StageCard
              tone="red"
              title="美国办公室完整团队"
              body="在公司发展中，美国团队具备一定的产品、运营、销售、技术人才和资源，能独立支撑美国客户，并且有能力做一些不受限于国内团队的美国本地合作。"
            />
          </div>
        </section>
      </div>

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
