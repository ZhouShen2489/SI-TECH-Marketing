import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Si-Tech Intl",
  description:
    "Read the Si-Tech Intl privacy policy for website inquiry handling and contact information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Si-Tech Intl",
    description: "Privacy policy for Si-Tech Intl website inquiries and contact data.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-18 sm:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
            Privacy
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-8 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-950">Information we collect</h2>
              <p className="mt-3">
                When you submit an inquiry through this website, we may collect
                the information you provide, including your name, work email,
                company name, job title, phone number, industry, project details,
                and basic submission metadata such as page URL, referrer, and UTM
                data.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-950">How we use it</h2>
              <p className="mt-3">
                We use this information to respond to inquiries, evaluate fit,
                continue relevant business conversations, and improve how the
                website handles lead submissions and follow-up.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-950">How we protect it</h2>
              <p className="mt-3">
                We take reasonable measures to protect submitted information. We
                avoid exposing mail credentials on the client and store form
                submissions through a protected server-side flow.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                California privacy expectations
              </h2>
              <p className="mt-3">
                We aim to follow a conservative data-minimization approach that is
                appropriate for a business inquiry website serving California and
                US visitors. We do not intentionally collect more information than
                needed to review and respond to inquiries, and we prefer hashed
                technical identifiers over storing raw IP data when basic abuse
                protection is needed.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-950">Contact</h2>
              <p className="mt-3">
                If you have questions about this privacy policy or your submitted
                information, contact {siteConfig.email}.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
