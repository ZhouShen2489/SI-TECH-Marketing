import { chromium } from "playwright";
import { createServer } from "vite";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { renderPresentationImages } from "./render-presentation-images.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "public", "generated");
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

const outputs = [
  {
    selector: '[data-export-target="business-path-diagram"]',
    path: path.join(outputDir, "us-business-path-diagram-cn.png"),
  },
  {
    selector: '[data-export-target="overview-diagram"]',
    path: path.join(outputDir, "global-gtm-flow-diagram-cn.png"),
  },
  {
    selector: '[data-export-target="website-diagram"]',
    path: path.join(outputDir, "website-content-flow-diagram-cn.png"),
  },
  {
    selector: '[data-export-target="mcn-operation-path-diagram"]',
    path: path.join(outputDir, "mcn-ai-operation-path-diagram-cn.png"),
  },
];

const server = await createServer({
  configFile: path.join(projectRoot, "vite.config.ts"),
  root: projectRoot,
  server: {
    host: "127.0.0.1",
    port,
    strictPort: true,
  },
});

let browser;

try {
  await fs.mkdir(outputDir, { recursive: true });
  await renderPresentationImages();
  await server.listen();

  browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 2200, height: 3400 },
    deviceScaleFactor: 2,
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 0));

  for (const output of outputs) {
    const diagram = page.locator(output.selector);
    await diagram.waitFor({ state: "visible" });
    await diagram.screenshot({ path: output.path });
    console.log(`PNG exported to ${output.path}`);
  }
} finally {
  if (browser) {
    await browser.close();
  }
  await server.close();
}
