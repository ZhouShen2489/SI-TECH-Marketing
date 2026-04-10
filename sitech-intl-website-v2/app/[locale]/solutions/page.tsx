import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { featureFlags } from "@/lib/feature-flags";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale, withLocale } from "@/lib/site";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, siteContent.solutionsPage.hero.title)}
        subtitle={copy(locale, siteContent.solutionsPage.hero.subtitle)}
        image={siteContent.solutionsPage.hero.image}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.solutionsPage.areasTitle)} />
          <div className="mt-12 grid gap-8">
            {siteContent.home.solutionRows.map((row, index) => {
              const href = "href" in row ? row.href : undefined;
              const linkLabel = "linkLabel" in row ? row.linkLabel : undefined;
              const shouldShow =
                href !== "/solutions/teamshub-business-os" || featureFlags.showTeamshubDetailPage;

              if (!shouldShow) {
                return null;
              }

              return (
                <article
                  key={row.title.en}
                  className={`grid gap-8 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-card lg:grid-cols-[0.95fr_1.05fr] lg:p-8 ${
                    index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-ink">
                    <Image src={row.image} alt={copy(locale, row.title)} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-[0.22em] text-tide">{copy(locale, row.eyebrow)}</p>
                    <h2 className="mt-4 font-serif text-3xl leading-tight text-ink">{copy(locale, row.title)}</h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">{copy(locale, row.text)}</p>
                    <ul className="mt-6 space-y-3">
                      {row.bullets[locale].map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-700">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-signal" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {href && linkLabel ? (
                      <div className="mt-8">
                        <Link
                          href={withLocale(locale, href)}
                          className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                        >
                          {copy(locale, linkLabel)}
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.solutionsPage.whoWeWorkWith.title)} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siteContent.solutionsPage.whoWeWorkWith.items.map((item) => (
              <div key={item.en} className="rounded-[2rem] bg-white p-7 shadow-card">
                <p className="text-base leading-8 text-slate-700">{copy(locale, item)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, siteContent.solutionsPage.startPoints.title)} />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {siteContent.solutionsPage.startPoints.items.map((item) => (
              <div key={item.en} className="rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-6 text-base leading-8 text-slate-700">
                {copy(locale, item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-2xl font-serif text-3xl">{copy(locale, siteContent.solutionsPage.cta.title)}</p>
          <Link
            href={withLocale(locale, "/contact")}
            className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
          >
            {copy(locale, siteContent.solutionsPage.cta.button)}
          </Link>
        </div>
      </section>
    </>
  );
}
