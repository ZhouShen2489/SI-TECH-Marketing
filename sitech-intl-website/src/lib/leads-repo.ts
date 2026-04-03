import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LeadRecord } from "@/types/lead";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function ensureLeadsFile() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(LEADS_FILE, "utf8");
  } catch {
    await writeFile(LEADS_FILE, "[]\n", "utf8");
  }
}

async function readLeads() {
  await ensureLeadsFile();
  const raw = await readFile(LEADS_FILE, "utf8");
  return JSON.parse(raw) as LeadRecord[];
}

async function writeLeads(leads: LeadRecord[]) {
  await writeFile(LEADS_FILE, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
}

export async function saveLead(
  lead: Omit<LeadRecord, "id" | "submittedAt" | "status"> & {
    status?: LeadRecord["status"];
  },
) {
  const existing = await readLeads();
  const record: LeadRecord = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    status: lead.status || "new",
    ...lead,
  };

  existing.unshift(record);
  await writeLeads(existing);

  return record;
}

export async function listLeads() {
  const leads = await readLeads();
  return leads.sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
}
