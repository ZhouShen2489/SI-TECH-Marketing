import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Globe2, Handshake } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

type HeroLink = {
  href: string;
  label: string;
};

type HeroMedia = {
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  note?: string;
};

type HeroSignal = {
  label: string;
  value: string;
};

const heroSignalIcons = [Handshake, Globe2, Building2] as const;

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  media,
  signals,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: HeroLink;
  secondaryCta?: HeroLink;
  media?: HeroMedia;
  signals?: readonly HeroSignal[];
}) {
  return (
    <section className="relative overflow-hidden pt-18 pb-16 sm:pt-24 sm:pb-20">
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_top_left,_rgba(36,67,133,0.24),transparent_38%),radial-gradient(circle_at_top_right,_rgba(242,181,68,0.12),transparent_26%),linear-gradient(180deg,_#edf3fb_0%,_rgba(237,243,251,0.38)_52%,_transparent_100%)]" />
      <Container className="relative">
        <div className={`grid items-center gap-10 ${media ? "lg:grid-cols-[1.08fr_0.92fr]" : ""}`}>
          <div>
            <Reveal>
              <div className="max-w-4xl">
                <span className="mt-4 inline-flex items-center rounded-full border border-[rgba(36,67,133,0.16)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-primary)] shadow-sm">
                  {eyebrow}
                </span>
                <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.15rem]">
                  {title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  {description}
                </p>
              </div>
            </Reveal>

            {(primaryCta || secondaryCta) && (
              <Reveal delay={0.08}>
                <div className="mt-8 flex flex-wrap gap-4">
                  {primaryCta ? (
                    <Link
                      href={primaryCta.href}
                      className="inline-flex items-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold !text-white [color:#ffffff] shadow-[0_16px_38px_rgba(36,67,133,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-primary-strong)] hover:shadow-[0_22px_44px_rgba(36,67,133,0.30)] hover:!text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(36,67,133,0.18)]"
                    >
                      {primaryCta.label}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : null}
                  {secondaryCta ? (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center rounded-full border border-[rgba(36,67,133,0.18)] bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(16,32,58,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-primary)] hover:bg-[var(--brand-mist)] hover:shadow-[0_18px_36px_rgba(36,67,133,0.16)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(36,67,133,0.12)]"
                    >
                      {secondaryCta.label}
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            )}

          </div>

          {media ? (
            <Reveal delay={0.12}>
              <div className="rounded-[34px] border border-white/80 bg-white/88 p-4 shadow-[0_26px_90px_rgba(16,32,58,0.12)] backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <div className="px-2 pt-4">
                  {media.eyebrow ? (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-primary)]">
                      {media.eyebrow}
                    </p>
                  ) : null}
                  {media.caption ? (
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {media.caption}
                    </p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>

        {signals?.length ? (
          <Reveal delay={0.22}>
            <div className="mt-8 rounded-[30px] border border-[rgba(36,67,133,0.10)] bg-white/92 p-4 shadow-[0_18px_60px_rgba(16,32,58,0.08)]">
              <div className="grid gap-4 md:grid-cols-3">
                {signals.map((signal, index) => {
                  const Icon = heroSignalIcons[index % heroSignalIcons.length];

                  return (
                    <div
                      key={signal.label}
                      className="rounded-[22px] border border-[rgba(36,67,133,0.08)] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            {signal.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {signal.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
