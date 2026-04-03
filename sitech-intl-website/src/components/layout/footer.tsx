import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(36,67,133,0.12)] bg-[linear-gradient(180deg,#ffffff_0%,#eef3fb_100%)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-13 w-13 overflow-hidden rounded-[20px] bg-white shadow-[0_16px_44px_rgba(36,67,133,0.16)]">
              <Image
                src="/SI-TECH LOGO.png"
                alt="Si-Tech Intl logo"
                fill
                className="object-contain p-1"
                sizes="52px"
              />
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950">
              {siteConfig.name}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Practical AI and digital solutions for better customer service, team
            collaboration, and execution support.
          </p>
          <div className="space-y-1 text-sm text-slate-700">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navigate
            </h3>
            <div className="space-y-2 text-sm text-slate-700">
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="transition hover:text-[var(--brand-primary)]">
                    {item.label}
                  </Link>
                </div>
              ))}
              <div>
                <Link href="/privacy" className="transition hover:text-[var(--brand-primary)]">
                  Privacy
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Connect
            </h3>
            <div className="space-y-2 text-sm text-slate-700">
              <div>
                <a href={siteConfig.linkedInUrl} className="transition hover:text-[var(--brand-primary)]">
                  LinkedIn
                </a>
              </div>
              <div>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--brand-primary)]">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
