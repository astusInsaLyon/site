import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";

/** Bandeau de titre en tête de chaque sous-page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Halo décoratif, purement visuel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-electric-600/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">{title}</h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-electric-100/90">{lead}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

/** Section de contenu avec espacement vertical homogène. */
export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "canvas" | "navy";
  id?: string;
}) {
  const tones = {
    white: "bg-white text-ink",
    canvas: "bg-canvas text-ink",
    navy: "bg-navy-900 text-white",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p
          className={`font-heading text-sm font-semibold uppercase tracking-[0.18em] ${
            tone === "dark" ? "text-electric-700" : "text-electric-300"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-muted" : "text-electric-100/85"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-electric-600 text-white hover:bg-electric-700",
  secondary: "bg-white text-navy-900 hover:bg-electric-100",
  ghost: "border border-white/25 text-white hover:bg-white/10",
};

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-base font-semibold transition-colors duration-200 cursor-pointer";

/** Lien interne stylé en bouton. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonBase} ${variants[variant]} ${className}`}>
      {children}
      <ArrowRightIcon className="h-5 w-5" />
    </Link>
  );
}

/**
 * Lien sortant stylé en bouton.
 * Si href vaut null, le bouton devient un état désactivé explicite plutôt
 * qu'un lien mort : utile tant qu'un Google Form n'est pas créé.
 */
export function ExternalButton({
  href,
  children,
  variant = "primary",
  pendingLabel = "Bientôt disponible",
  className = "",
}: {
  href: string | null;
  children: ReactNode;
  variant?: ButtonVariant;
  pendingLabel?: string;
  className?: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${buttonBase} cursor-not-allowed border border-line bg-canvas text-muted ${className}`}
      >
        {children}
        <span className="text-sm font-normal">({pendingLabel})</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${buttonBase} ${variants[variant]} ${className}`}
    >
      {children}
      <ExternalLinkIcon className="h-5 w-5" />
    </a>
  );
}
