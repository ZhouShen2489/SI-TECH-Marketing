import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

type Capability = {
  title: string;
  description: string;
};

export function CapabilitySection({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly Capability[];
}) {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <Reveal>
          <div className="rounded-[32px] border border-[rgba(36,67,133,0.08)] bg-[linear-gradient(135deg,#edf3fb_0%,#ffffff_45%,#f6f9ff_100%)] p-8 shadow-[0_20px_80px_rgba(36,67,133,0.09)] sm:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-primary)]">
                Enabling capability
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {items.map((item, index) => (
                <Reveal key={item.title} delay={0.05 * index}>
                  <div className="rounded-[28px] border border-white bg-white/92 p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
