import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { featureFlags } from "@/lib/feature-flags";
import { listLeads } from "@/lib/leads-repo";
import { formatDateTime } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin | Si-Tech Intl",
  description: "Internal lead list for Si-Tech Intl website submissions.",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!featureFlags.showAdmin) {
    return (
      <section className="py-18">
        <Container>
          <p className="text-slate-600">Admin view is disabled by feature flag.</p>
        </Container>
      </section>
    );
  }

  const leads = await listLeads();

  return (
    <section className="py-18 sm:py-24">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
            Internal admin
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950">
            Website leads
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            A lightweight view of submitted leads, tracking context, and follow-up
            signals.
          </p>
        </div>

        {leads.length === 0 ? (
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-slate-600 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            No leads have been submitted yet.
          </div>
        ) : (
          <div className="grid gap-5">
            {leads.map((lead) => (
              <article
                key={lead.id}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                      {lead.fullName}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {lead.companyName || "No company provided"} · {lead.workEmail}
                    </p>
                  </div>
                  <div className="rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    {lead.status}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 text-sm text-slate-700 md:grid-cols-3">
                  <div>
                    <p className="font-semibold text-slate-900">Submitted</p>
                    <p className="mt-1">{formatDateTime(lead.submittedAt)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Interested In</p>
                    <p className="mt-1">{lead.interestedIn}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Source</p>
                    <p className="mt-1">{lead.utmSource || lead.referrer || "Direct / unknown"}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Page URL</p>
                    <p className="mt-1 break-all">{lead.pageUrl || "-"}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Referrer</p>
                    <p className="mt-1 break-all">{lead.referrer || "-"}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">IP Hash</p>
                    <p className="mt-1 break-all">{lead.ipHash || "-"}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">Inquiry Details</p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                    {lead.message}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
