import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { siteContent, copy, copyList } from "@/content/siteContent";
import type { Locale } from "@/lib/site";
import { withLocale } from "@/lib/site";

export function PageHero({
  locale,
  title,
  subtitle,
  image,
  badge,
  actions,
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(8,19,31,0.94),rgba(8,19,31,0.72),rgba(8,19,31,0.5))]" />
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-15" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          {badge ? (
            <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-accent">
              {badge}
            </p>
          ) : null}
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">{subtitle}</p>
          {actions ? <div className="mt-10 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  text,
  align = "left",
}: {
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

export function MarqueeBand({ locale }: { locale: Locale }) {
  const items = [...siteContent.proofRibbon, ...siteContent.proofRibbon];

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="marquee overflow-hidden py-4">
        <div className="marquee-track flex min-w-max gap-4">
          {items.map((item, index) => (
            <div
              key={`${item.en}-${index}`}
              className="rounded-full border border-slate-200 bg-mist px-4 py-2 text-sm font-medium text-slate-700"
            >
              {copy(locale, item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const { hero, stats, painPoints, solutionRows, process, storiesPreview, cta } = siteContent.home;

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, hero.badge)}
        title={copy(locale, hero.title)}
        subtitle={copy(locale, hero.subtitle)}
        image={hero.image}
        actions={
          <>
            <Link
              href={withLocale(locale, "/contact")}
              className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
            >
              {copy(locale, hero.primaryCta)}
            </Link>
            <Link
              href={withLocale(locale, "/solutions")}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {copy(locale, hero.secondaryCta)}
            </Link>
          </>
        }
      />

      <section className="bg-[#f5f8fb]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-tide">
              {locale === "en" ? "Where clients usually feel the pain" : "客户最常感受到的问题"}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {copyList(locale, hero.highlights).map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeBand locale={locale} />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={copy(locale, painPoints.title)} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {painPoints.items.map((item) => (
              <article key={item.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card">
                <div className="h-12 w-12 rounded-2xl bg-mist" />
                <h3 className="mt-6 font-serif text-2xl text-ink">{copy(locale, item.title)}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
          <SectionHeading
            title={locale === "en" ? "What we help fix" : "我们擅长修通的问题"}
            text={
              locale === "en"
                ? "Each track starts from a real workflow problem rather than a generic software pitch."
                : "每条方案线都从一个真实业务问题开始，而不是先推一套泛化软件。"
            }
          />
          {solutionRows.map((row, index) => (
            (() => {
              const href = "href" in row ? row.href : undefined;
              const linkLabel = "linkLabel" in row ? row.linkLabel : undefined;

              return (
                <div
                  key={row.title.en}
                  className={`grid gap-8 rounded-[2.5rem] bg-white p-6 shadow-card lg:grid-cols-[0.95fr_1.05fr] lg:p-8 ${
                    index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-ink">
                    <Image src={row.image} alt={copy(locale, row.title)} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-[0.22em] text-tide">{copy(locale, row.eyebrow)}</p>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">{copy(locale, row.title)}</h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">{copy(locale, row.text)}</p>
                    <ul className="mt-6 space-y-3">
                      {copyList(locale, row.bullets).map((bullet) => (
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
                </div>
              );
            })()
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading title={copy(locale, process.title)} />
            <div className="grid gap-5">
              {process.steps.map((step, index) => (
                <div key={step.title.en} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-[#f7f9fb] p-6 md:grid-cols-[120px_1fr]">
                  <p className="text-sm uppercase tracking-[0.2em] text-tide">0{index + 1}</p>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{copy(locale, step.title)}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, step.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fb] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={copy(locale, storiesPreview.title)}
            text={copy(locale, storiesPreview.text)}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {siteContent.storiesPage.items.map((story) => (
              <article key={story.title.en} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
                <div className="relative h-56">
                  <Image src={story.image} alt={copy(locale, story.title)} fill className="object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-ink">{copy(locale, story.title)}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{copy(locale, story.summary)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={withLocale(locale, "/stories")}
              className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              {locale === "en" ? "Open All Stories" : "查看全部故事"}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <h2 className="font-serif text-3xl leading-tight lg:text-4xl">{copy(locale, cta.title)}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{copy(locale, cta.text)}</p>
                <div className="mt-8">
                  <Link
                    href={withLocale(locale, "/contact")}
                    className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#ffd59f]"
                  >
                    {copy(locale, cta.button)}
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.value} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                    <p className="font-serif text-3xl text-white">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{copy(locale, item.label)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
