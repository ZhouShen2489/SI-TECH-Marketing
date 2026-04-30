import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "public", "generated");
const sourceDir = path.join(outputDir, "presentation-sources");

const assets = [
  {
    id: "hod-lipson",
    source: path.join(sourceDir, "hod-lipson.jpg"),
    output: path.join(outputDir, "presentation-hod-lipson.png"),
    name: "Hod Lipson - Professor at Columbia University",
    quote: "presentation, presentation, presentation",
    note: "展示面先建立信任和兴趣，客户才愿意继续聊",
    objectPosition: "50% 18%",
  },
  {
    id: "steve-jobs",
    source: path.join(sourceDir, "steve-jobs-macbook-air.jpg"),
    output: path.join(outputDir, "presentation-steve-jobs-macbook.png"),
    name: "Steve Jobs",
    quote: "从牛皮纸袋里拿出 MacBook 的瞬间，说明好的呈现能让价值被立刻理解。",
    note: "同样的产品，呈现方式会改变客户的第一判断",
    objectPosition: "50% 42%",
  },
];

function toDataUrl(buffer) {
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function renderAsset(page, asset) {
  const sourceBuffer = await fs.readFile(asset.source);
  const imageSrc = toDataUrl(sourceBuffer);
  const safeQuote = escapeHtml(asset.quote);
  const safeName = escapeHtml(asset.name);
  const safeNote = escapeHtml(asset.note);

  await page.setViewportSize({ width: 680, height: 260 });
  await page.setContent(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: #F5F8FE;
            font-family: Arial, Helvetica, sans-serif;
            color: #111827;
          }
          .compose {
            width: 640px;
            height: 230px;
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 24px;
            align-items: center;
            padding: 10px 8px;
            background: #F5F8FE;
          }
          .photo-wrap {
            position: relative;
            width: 200px;
            height: 200px;
          }
          .photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            object-position: ${asset.objectPosition};
            filter: grayscale(1) contrast(1.15) brightness(1.03);
            display: block;
          }
          .soft-shadow {
            position: absolute;
            inset: 12px 14px -8px 14px;
            border-radius: 999px;
            background: rgba(17, 24, 39, 0.14);
            filter: blur(14px);
            z-index: -1;
          }
          .content {
            display: grid;
            gap: 11px;
            align-content: center;
            min-width: 0;
          }
          .name {
            font-size: 21px;
            font-weight: 900;
            line-height: 1;
          }
          .speech {
            display: grid;
            grid-template-columns: 34px 1fr;
            gap: 11px;
            align-items: start;
          }
          .icon {
            width: 34px;
            height: 34px;
          }
          .quote {
            font-size: 21px;
            font-weight: 900;
            line-height: 1.22;
            letter-spacing: 0;
          }
          .note {
            font-size: 13px;
            font-weight: 800;
            line-height: 1.45;
            color: #4B5563;
            max-width: 480px;
          }
        </style>
      </head>
      <body>
        <div class="compose">
          <div class="photo-wrap">
            <div class="soft-shadow"></div>
            <img class="photo" src="${imageSrc}" alt="${safeName}" />
          </div>
          <div class="content">
            <div class="name">${safeName}</div>
            <div class="speech">
              <svg class="icon" viewBox="0 0 44 44" aria-hidden="true">
                <path d="M7 8h30v20H18L7 36V8Z" fill="none" stroke="#111827" stroke-width="3" stroke-linejoin="round" />
                <path d="M14 17h17M14 23h12" fill="none" stroke="#111827" stroke-width="3" stroke-linecap="round" />
              </svg>
              <div class="quote">${safeQuote}</div>
            </div>
            <div class="note">${safeNote}</div>
          </div>
        </div>
      </body>
    </html>
  `);

  await page.locator(".compose").screenshot({ path: asset.output });
  console.log(`Presentation image exported to ${asset.output}`);
}

export async function renderPresentationImages() {
  await fs.mkdir(outputDir, { recursive: true });
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    for (const asset of assets) {
      await renderAsset(page, asset);
    }
  } finally {
    await browser.close();
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await renderPresentationImages();
}
