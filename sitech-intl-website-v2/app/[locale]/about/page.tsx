import { notFound } from "next/navigation";

import { PageHero, SectionHeading } from "@/components/page-sections";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale } from "@/lib/site";

export default async function AboutPage({
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
        title={copy(locale, siteContent.aboutPage.hero.title)}
        subtitle={copy(locale, siteContent.aboutPage.hero.subtitle)}
        image={siteContent.aboutPage.hero.image}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading text={copy(locale, siteContent.aboutPage.body)} title={locale === "en" ? "How to read Si-Tech Intl" : "如何理解 Si-Tech Intl"} />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.home.stats.map((stat) => (
              <div key={stat.value} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card">
                <p className="font-serif text-4xl text-ink">{stat.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, stat.label)}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {siteContent.aboutPage.pillars.map((item) => (
              <article key={item.title.en} className="rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-7">
                <h2 className="font-serif text-2xl text-ink">{copy(locale, item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
