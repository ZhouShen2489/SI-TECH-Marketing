import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Thank You | Si-Tech Intl",
  description: "Your inquiry has been received by Si-Tech Intl.",
  alternates: {
    canonical: "/thank-you",
  },
  openGraph: {
    title: "Thank You | Si-Tech Intl",
    description: "We received your inquiry and will get back to you soon.",
    url: `${siteConfig.url}/thank-you`,
  },
};

export default function ThankYouPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
            Inquiry received
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            We’ve received your message and will get back to you soon.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Thank you for reaching out to Si-Tech Intl. A team member will review
            your inquiry and follow up as soon as possible.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Home
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
