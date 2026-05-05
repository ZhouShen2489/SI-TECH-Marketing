import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import StrategicFlywheelOverviewDiagram from "./diagrams/StrategicFlywheelOverviewDiagram";
import GlobalGTMFlowDiagram from "./diagrams/GlobalGTMFlowDiagram";
import WebsiteContentFlowDiagram from "./diagrams/WebsiteContentFlowDiagram";
import USBusinessPathDiagram from "./diagrams/USBusinessPathDiagram";
import MCNAIOperationPathDiagram from "./diagrams/MCNAIOperationPathDiagram";

function PngPreview({ src, title }: { src: string; title: string }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="png-card">
      <div className="png-card-header">
        <h3>{title}</h3>
        <a href={src} target="_blank" rel="noreferrer">
          查看原图
        </a>
      </div>
      {isVisible ? (
        <img
          className="png-preview-image"
          src={src}
          alt={title}
          onError={() => setIsVisible(false)}
        />
      ) : (
        <div className="png-missing">
          对应 PNG 暂未生成。运行 `npm run export:png` 后会显示在这里。
        </div>
      )}
    </div>
  );
}

export default function App() {
  const strategicFlywheelDiagramRef = useRef<HTMLDivElement>(null);
  const businessPathDiagramRef = useRef<HTMLDivElement>(null);
  const overviewDiagramRef = useRef<HTMLDivElement>(null);
  const websiteDiagramRef = useRef<HTMLDivElement>(null);
  const mcnOperationPathDiagramRef = useRef<HTMLDivElement>(null);

  async function exportDiagram(
    element: HTMLDivElement | null,
    filename: string,
  ) {
    if (!element) return;
    const canvas = await html2canvas(element, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
    });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = filename;
    link.click();
  }

  return (
    <main className="app-shell">
      <section className="toolbar">
        <div>
          <h1>思特奇美国获客</h1>
          <p>
            搭建中的官网链接：
            <a
              href="https://sitech-intl-website.vercel.app/zh"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ZhouShen2489/sitech-intl-website
            </a>
          </p>
        </div>
        <div className="actions">
          <button
            onClick={() =>
              exportDiagram(
                strategicFlywheelDiagramRef.current,
                "strategic-flywheel-overview-cn.png",
              )
            }
          >
            下载图 1 PNG
          </button>
          <button
            onClick={() =>
              exportDiagram(
                businessPathDiagramRef.current,
                "us-business-path-diagram-cn.png",
              )
            }
          >
            下载图 2 PNG
          </button>
          <button
            onClick={() =>
              exportDiagram(
                overviewDiagramRef.current,
                "global-gtm-flow-diagram-cn.png",
              )
            }
          >
            下载图 3 PNG
          </button>
          <button
            onClick={() =>
              exportDiagram(
                websiteDiagramRef.current,
                "website-content-flow-diagram-cn.png",
              )
            }
          >
            下载图 4 PNG
          </button>
          <button
            onClick={() =>
              exportDiagram(
                mcnOperationPathDiagramRef.current,
                "mcn-ai-operation-path-diagram-cn.png",
              )
            }
          >
            下载图 5 PNG
          </button>
          <button className="secondary" onClick={() => window.print()}>
            打印 / 导出 PDF
          </button>
        </div>
      </section>

      <section className="diagram-stack">
        <div className="diagram-panel">
          <div className="diagram-meta">
            <h2>Part 0 / 图 1：顶层总图 - 国内外获客与共赢飞轮</h2>
            <p>
              先给管理层讲清楚为什么要用“简历/展示面”去获客，为什么国内主动做和海外机会要互相增强。
            </p>
          </div>
          <div
            ref={strategicFlywheelDiagramRef}
            data-export-target="strategic-flywheel-diagram"
          >
            <StrategicFlywheelOverviewDiagram />
          </div>
        </div>

        <div className="diagram-panel">
          <div className="diagram-meta">
            <h2>Part 1 / 图 2：三条商业路径总指导</h2>
            <p>
              给高层看的总体计划：美国办公室后续所有动作，都围绕三条路径展开。
            </p>
          </div>
          <div
            ref={businessPathDiagramRef}
            data-export-target="business-path-diagram"
          >
            <USBusinessPathDiagram />
          </div>
        </div>

        <div className="diagram-panel">
          <div className="diagram-meta">
            <h2>Part 2 / 图 3：具体执行 - 获客流程</h2>
            <p>告诉高层我们具体怎么获客、怎么协同、怎么形成线索闭环。</p>
          </div>
          <div ref={overviewDiagramRef} data-export-target="overview-diagram">
            <GlobalGTMFlowDiagram />
          </div>
        </div>

        <div className="diagram-panel">
          <div className="diagram-meta">
            <h2>Part 2 / 图 4：具体执行 - 官网对外内容结构</h2>
            <p>
              告诉高层官网具体怎么做，突出 Solutions、合作伙伴 Products、O2O
              Marketplace、Partnership、About 与统一转化入口。
            </p>
          </div>
          <div ref={websiteDiagramRef} data-export-target="website-diagram">
            <WebsiteContentFlowDiagram />
          </div>
        </div>

        <div className="diagram-panel">
          <div className="diagram-meta">
            <h2>Part 3 / 图 5：商业路径-MCN场景</h2>
            <p>
              以会议讨论的 MCN 场景作为样例，展示路径三如何从场景
              MVP、美国获客、客户反馈走向产品迭代和合作运营。
            </p>
          </div>
          <div
            ref={mcnOperationPathDiagramRef}
            data-export-target="mcn-operation-path-diagram"
          >
            <MCNAIOperationPathDiagram />
          </div>
        </div>
      </section>

      <section className="png-preview-section">
        <div className="diagram-meta">
          <h2>PNG 预览</h2>
          <p>
            这里直接展示脚本生成的最终 PNG。导出脚本会把所有图写入
            `public/generated/`，每次刷新页面都会尝试展示最新版本。
          </p>
        </div>
        <div className="png-preview-grid">
          <PngPreview
            title="图 1 PNG：顶层总图 - 国内外获客与共赢飞轮"
            src="/generated/strategic-flywheel-overview-cn.png"
          />
          <PngPreview
            title="图 2 PNG：三条商业路径总指导"
            src="/generated/us-business-path-diagram-cn.png"
          />
          <PngPreview
            title="图 3 PNG：具体执行 - 获客流程"
            src="/generated/global-gtm-flow-diagram-cn.png"
          />
          <PngPreview
            title="图 4 PNG：具体执行 - 官网结构"
            src="/generated/website-content-flow-diagram-cn.png"
          />
          <PngPreview
            title="图 5 PNG：MCN 场景 Path 3 Operating Loop"
            src="/generated/mcn-ai-operation-path-diagram-cn.png"
          />
        </div>
      </section>
    </main>
  );
}
