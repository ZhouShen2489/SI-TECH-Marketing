# Sitech Intl 美国获客流程图

这个目录是给管理层汇报和内部对齐用的可视化页面，包含 5 张图：

1. 顶层总图：国内外获客与共赢飞轮
2. 三条商业路径总指导
3. 获客流程（包含典型获客工具集成流程：LinkedIn / 官网表单 -> HubSpot -> Gmail / Google Meet -> Slack -> ChatGPT）
4. 官网对外内容结构
5. 商业路径三：MCN 场景样例

## 本地预览

```bash
npm install
npm run dev
```

打开终端显示的本地地址，一般是 `http://localhost:5173`。

## 重新生成 PNG

```bash
npm run export:png
```

脚本会先生成展示面插图，再导出最终 PNG 到：

```text
public/generated/
```

## 展示面插图来源

两张展示面插图由脚本 `scripts/render-presentation-images.mjs` 基于自由授权图片生成。

- Hod Lipson: Wikimedia Commons, CC BY-SA 4.0
- Steve Jobs with MacBook Air: Wikimedia Commons, CC BY 3.0

## 文件结构

```text
src/
  App.tsx
  main.tsx
  styles.css
  diagrams/
    StrategicFlywheelOverviewDiagram.tsx
    GlobalGTMFlowDiagram.tsx
    WebsiteContentFlowDiagram.tsx
    USBusinessPathDiagram.tsx
    MCNAIOperationPathDiagram.tsx
scripts/
  export-png.mjs
  render-presentation-images.mjs
public/generated/
  *.png
```

## 相关说明文档

- `获客工具集成流程图说明.md`：图 3 新增的典型获客工具集成流程说明。
