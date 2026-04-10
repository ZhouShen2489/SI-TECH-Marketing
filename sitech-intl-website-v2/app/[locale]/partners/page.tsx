import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale, withLocale } from "@/lib/site";

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = siteContent.partnersPage;

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, page.hero.title)}
        subtitle={copy(locale, page.hero.subtitle)}
        image={page.hero.image}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, page.introTitle)} text={copy(locale, page.introText)} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {page.models.map((model) => (
              <article key={model.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, model.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, model.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-card lg:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-tide">
              {locale === "en" ? "Featured partner motion" : "重点合作方向"}
            </p>
            <h2 className="mt-4 font-serif text-3xl text-ink lg:text-4xl">
              {copy(locale, page.helpport.title)}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              {copy(locale, page.helpport.subtitle)}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {page.helpport.bullets[locale].map((item) => (
                <div key={item} className="rounded-[1.75rem] bg-[#f7f9fb] p-5 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-8 text-slate-600">{copy(locale, page.helpport.note)}</p>
            <div className="mt-8">
              <Link
                href={withLocale(locale, "/contact")}
                className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {locale === "en" ? "Discuss Partnership" : "沟通合作"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
