import Image from "next/image";

export function MediaPanel({
  src,
  alt,
  eyebrow,
  title,
  description,
  priority = false,
  aspect = "portrait",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  priority?: boolean;
  aspect?: "portrait" | "landscape" | "square";
}) {
  const aspectClass =
    aspect === "landscape"
      ? "aspect-[16/10]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[4/5]";

  return (
    <div className="rounded-[32px] border border-white/70 bg-white/92 p-4 shadow-[0_24px_80px_rgba(16,32,58,0.12)] backdrop-blur">
      <div className={`relative overflow-hidden rounded-[26px] ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {(eyebrow || title || description) && (
        <div className="px-2 pt-4">
          {eyebrow ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-primary)]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <p className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
              {title}
            </p>
          ) : null}
          {description ? (
            <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
