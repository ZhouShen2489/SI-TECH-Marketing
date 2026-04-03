import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { navigationItems } from "@/content/navigation";
import { featureFlags } from "@/lib/feature-flags";
import { Container } from "@/components/layout/container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(36,67,133,0.10)] bg-[rgba(244,247,251,0.9)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-slate-950">
          <span className="relative h-13 w-13 overflow-hidden rounded-[20px] bg-white shadow-[0_16px_44px_rgba(36,67,133,0.16)]">
            <Image
              src="/SI-TECH LOGO.png"
              alt="Si-Tech Intl logo"
              fill
              className="object-contain p-1"
              sizes="52px"
            />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg tracking-tight">{siteConfig.name}</span>
            <span className="text-xs font-medium text-slate-500">US market solutions partner</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[var(--brand-primary)]"
            >
              {item.label}
            </Link>
          ))}
          {featureFlags.showAdmin ? (
            <Link
              href="/admin"
              className="text-sm font-medium text-slate-600 transition hover:text-[var(--brand-primary)]"
            >
              Admin
            </Link>
          ) : null}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/about#lead-form"
            className="inline-flex items-center rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold !text-white [color:#ffffff] shadow-[0_14px_34px_rgba(36,67,133,0.20)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-primary-strong)] hover:shadow-[0_20px_40px_rgba(36,67,133,0.28)] hover:!text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(36,67,133,0.18)]"
          >
            Talk to Us
          </Link>
        </div>
      </Container>
    </header>
  );
}
