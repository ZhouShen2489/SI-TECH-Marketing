import React from "react";

type Props = {
  className?: string;
  title?: string;
};

const chip = {
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 14px",
  borderRadius: 999,
  background: "#E7F0FF",
  color: "#1A4378",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.2,
};

const whiteCard = {
  background: "#fff",
  border: "1px solid #CFE0FF",
  borderRadius: 24,
  padding: 24,
};

export default function GlobalGTMFlowDiagram({
  className,
  title = "思特奇美国获客",
}: Props) {
  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(135deg, #F5F8FE 0%, #FCFDFF 100%)",
        borderRadius: 32,
        padding: 40,
        color: "#12345A",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ marginBottom: 28 }}>
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
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          以“简历”材料为核心，以渠道触达、内部协同和 AI
          能力为支撑，形成海外获客与国内反哺。
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px minmax(760px, 1fr) 320px",
          gap: 24,
          alignItems: "start",
        }}
      >
        <section style={{ ...whiteCard, borderColor: "#D7E3F4" }}>
          <div
            style={{
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: "0.04em",
              marginBottom: 18,
            }}
          >
            左侧：客户来源与分类
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <div
              style={{
                ...whiteCard,
                background: "#F6F9FF",
                borderColor: "#D6E4FF",
                padding: 20,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
                按地区
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span style={chip}>美国/美洲</span>
                <span style={chip}>东南亚</span>
                <span style={chip}>中东</span>
                <span style={chip}>欧洲</span>
                <span style={chip}>非洲</span>
              </div>
            </div>
            <div
              style={{
                ...whiteCard,
                background: "#F6F9FF",
                borderColor: "#D6E4FF",
                padding: 20,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
                按行业
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span style={chip}>电信</span>
                <span style={chip}>工业</span>
                <span style={chip}>企业服务</span>
              </div>
            </div>
            <div
              style={{
                ...whiteCard,
                background: "#F6F9FF",
                borderColor: "#D6E4FF",
                padding: 20,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
                按规模
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 12,
                }}
              >
                <span style={chip}>SMB</span>
                <span style={chip}>大客户</span>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "#6E8099", lineHeight: 1.5 }}>
              不同地区、行业和规模进入同一套标准化触达与转化流程。
            </div>
          </div>
        </section>

        <section style={{ display: "grid", gap: 16 }}>
          <div
            style={{
              ...whiteCard,
              background: "linear-gradient(135deg, #EAF2FF 0%, #F7FAFF 100%)",
              padding: 28,
            }}
          >
            <div
              style={{
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "0.04em",
                marginBottom: 10,
              }}
            >
              中间：核心业务流程与“简历”材料
            </div>
            <div style={{ fontSize: 15, color: "#4C637E", lineHeight: 1.5 }}>
              加强公司的“简历”、提升官网和材料体系，是和更多更大更优质客户触达、协同和成交的基础。
            </div>

            <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
              <div style={whiteCard}>
                <div
                  style={{ fontSize: 19, fontWeight: 700, marginBottom: 14 }}
                >
                  外联渠道
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <span style={chip}>官网表单</span>
                  <span style={chip}>Email</span>
                  <span style={chip}>LinkedIn</span>
                  <span style={chip}>Facebook / WhatsApp</span>
                  <span style={chip}>TikTok</span>
                </div>
                <div
                  style={{ fontSize: 13, color: "#6E8099", lineHeight: 1.5 }}
                >
                  前期重点：官网表单、Email、LinkedIn
                  、WhatsApp；后续再补社交媒体（如 TikTok）。
                </div>
              </div>

              <div style={whiteCard}>
                <div
                  style={{ fontSize: 19, fontWeight: 700, marginBottom: 14 }}
                >
                  官网与外联材料
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <span style={chip}>官网</span>
                  <span style={chip}>优势产品业务PPT</span>
                  <span style={chip}>优势产品一页纸介绍</span>
                  <span style={chip}>开发信和跟进信内容模版</span>
                  <span style={chip}>官网拓展内容</span>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#6E8099",
                    lineHeight: 1.5,
                    marginTop: 12,
                  }}
                >
                  用高质量内容提升客户接触意愿，标准化材料承接客户触达和前期跟进。
                </div>
              </div>

              <div style={whiteCard}>
                <div
                  style={{ fontSize: 19, fontWeight: 700, marginBottom: 14 }}
                >
                  内部协同
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <span style={chip}>HubSpot CRM</span>
                  <span style={chip}>Slack 美国协同</span>
                  <span style={chip}>TeamsHub 中美协同</span>
                </div>
                <div
                  style={{ fontSize: 13, color: "#6E8099", lineHeight: 1.5 }}
                >
                  HubSpot 作为 CRM，Slack 负责内部协作和知识沉淀，TeamsHub
                  对接国内输出和汇报。
                </div>
              </div>

              <div
                style={{
                  background:
                    "linear-gradient(135deg, #1E5FD3 0%, #438BFF 100%)",
                  borderRadius: 28,
                  padding: 24,
                  color: "#fff",
                  boxShadow: "0 12px 28px rgba(30,95,211,0.18)",
                }}
              >
                <div
                  style={{ fontSize: 23, fontWeight: 700, marginBottom: 10 }}
                >
                  高质量“简历”材料
                </div>
                <div
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    opacity: 0.95,
                    display: "grid",
                    gap: 8,
                  }}
                >
                  <div>
                    •
                    作为对外统一表达的核心底座，提供官网、PPT、一页纸、案例、邮件模版以及后续客户沟通材料。
                  </div>
                  <div>
                    •
                    材料里把中美公司当作一个个体，体现我们的电信经验和实力，以及对于行业和SMB的业务支持。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#F6F0FF",
              border: "1px solid #D7C4FF",
              borderRadius: 28,
              padding: 24,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#7A4DDB",
                letterSpacing: "0.06em",
                marginBottom: 8,
              }}
            >
              持续迭代优化
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
              AI 流程：用于加速 / 规范业务流程
            </div>
            <div style={{ fontSize: 13, color: "#6E8099", lineHeight: 1.6 }}>
              美国公司将通过AI工具，在未来不断加强线索生成、邮件草拟、客户补全、自动化分发、跟进提醒和知识沉淀的AI能力，让获客和跟进流程更加高效和标准。
            </div>
          </div>
        </section>

        <section
          style={{
            ...whiteCard,
            background: "#F2FBF6",
            borderColor: "#CBE8D7",
          }}
        >
          <div
            style={{
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: "0.04em",
              marginBottom: 18,
            }}
          >
            右侧：结果与反推价值
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <div
              style={{ background: "#E4F7EB", borderRadius: 22, padding: 20 }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0F6A45",
                  marginBottom: 10,
                }}
              >
                好的“简历”带来更多更大更优质的客户
              </div>
              <div style={{ fontSize: 15, color: "#4C637E", lineHeight: 1.5 }}>
                先把我们的优势“运营商
                IT支撑与软件服务”形成高质量内容，就更容易吸引全球运营商和SMB的相关合作和高质量项目。
              </div>
            </div>
            <div
              style={{ background: "#E4F7EB", borderRadius: 22, padding: 20 }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0F6A45",
                  marginBottom: 10,
                }}
              >
                拿到合作机会
              </div>
              <div style={{ fontSize: 15, color: "#4C637E", lineHeight: 1.5 }}>
                无论是项目合作、产品合作，还是只是初步接触，都意味着已经开始建立真实业务关系。
              </div>
            </div>
            <div
              style={{ background: "#E4F7EB", borderRadius: 22, padding: 20 }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0F6A45",
                  marginBottom: 10,
                }}
              >
                长期订单与国内反推
              </div>
              <div style={{ fontSize: 15, color: "#4C637E", lineHeight: 1.5 }}>
                客户项目 /
                需求反推国内的设计和开发。同时推动官网、PPT、产品方案、案例内容和支持能力持续升级，形成海外获客和国内交付的闭环。
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginTop: 24,
        }}
      >
        <div
          style={{
            background: "#EEF5FF",
            border: "1px solid #C8DAF8",
            borderRadius: 28,
            padding: 24,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 14 }}>
            美国办公室现在要做的事情
          </div>
          <div style={{ fontSize: 15, color: "#3D5470", lineHeight: 1.7 }}>
            <div>
              •
              负责并主导中间这套“简历”的材料的完成。包括但不限于：把优势产品的PPT整理成一页纸，把Demo做成对外PPT和一页纸等。
            </div>
            <div>
              • 借助软件和AI工具，搭建起外联渠道、官网和材料、内部协同的流程
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#FFF3E8",
            border: "1px solid #F2C796",
            borderRadius: 28,
            padding: 24,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#D8741D",
              letterSpacing: "0.05em",
              marginBottom: 6,
            }}
          >
            CHINA SUPPORT
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 14 }}>
            国内支持要做的事情
          </div>
          <div style={{ fontSize: 15, color: "#3D5470", lineHeight: 1.7 }}>
            <div>
              •
              通过公司三方（管理层，国内团队，美国办公室），找到优势产品并提供产品资料
            </div>
            <div>
              •
              对每一个优势产品，需要一份只面向客户业务的体现产品/解决方案价值的材料，减少原先材料的技术表达（可以参考附件六度人和，IPLook的材料）
            </div>
            <div>
              •
              如果公司三方确定某些产品可以出海外版本业务PPT或Demo（不需要完整产品，只要有愿意发展海外的决心），提供给美国办公室
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
