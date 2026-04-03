import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

export function LeadSection({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets?: readonly string[];
}) {
  return (
    <section id="lead-form" className="py-18 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_28px_90px_rgba(15,23,42,0.22)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-warm)]">
                Lead form
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-300">
                {description}
              </p>
              {bullets?.length ? (
                <ul className="mt-8 space-y-4">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-200">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[32px] border border-[rgba(36,67,133,0.10)] bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
