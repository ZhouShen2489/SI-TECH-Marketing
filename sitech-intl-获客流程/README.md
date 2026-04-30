# Sitech Intl 美国获客流程图

这个目录是给管理层汇报和内部对齐用的可视化页面，包含 4 张图：

1. 三条商业路径总指导
2. 获客流程
3. 官网对外内容结构
4. 商业路径三：MCN 场景样例

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
