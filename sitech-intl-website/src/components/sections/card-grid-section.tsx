import {
  BriefcaseBusiness,
  Building2,
  CircleHelp,
  Cog,
  FolderKanban,
  Globe2,
  Handshake,
  Headset,
  MessageSquareWarning,
  Network,
  SearchCheck,
  ShieldCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

type CardItem = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: readonly string[];
  icon?: string;
};

const iconMap: Record<string, LucideIcon> = {
  alert: MessageSquareWarning,
  collaboration: Users,
  workflow: Workflow,
  service: Headset,
  custom: Cog,
  support: ShieldCheck,
  search: SearchCheck,
  partnership: Handshake,
  telecom: Network,
  business: BriefcaseBusiness,
  global: Globe2,
  building: Building2,
  operations: FolderKanban,
};

export function CardGridSection({
  title,
  intro,
  items,
  columns = 3,
  muted = false,
}: {
  title: string;
  intro: string;
  items: readonly CardItem[];
  columns?: 2 | 3 | 4;
  muted?: boolean;
}) {
  const gridClass =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <section className={muted ? "bg-white/70 py-18 sm:py-24" : "py-18 sm:py-24"}>
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p>
          </div>
        </Reveal>

        <div className={`mt-10 grid gap-5 ${gridClass}`}>
          {items.map((item, index) => {
            const Icon = iconMap[item.icon || ""] || CircleHelp;

            return (
              <Reveal key={item.title} delay={0.05 * index}>
                <article className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {item.eyebrow ? (
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-primary)]">
                          {item.eyebrow}
                        </p>
                      ) : null}
                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {item.bullets?.length ? (
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
