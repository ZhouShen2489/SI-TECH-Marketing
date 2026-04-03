import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

type Step = {
  title: string;
  description: string;
};

export function ProcessSection({
  title,
  intro,
  steps,
}: {
  title: string;
  intro: string;
  steps: readonly Step[];
}) {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={0.05 * index}>
              <div className="rounded-[28px] border border-[rgba(36,67,133,0.08)] bg-[linear-gradient(160deg,#17346f_0%,#244385_100%)] p-6 text-white shadow-[0_24px_90px_rgba(23,52,111,0.24)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14 text-sm font-semibold text-[var(--brand-warm)]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
