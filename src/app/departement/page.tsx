import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { departementIntro, piliers, reperes } from "@/content/departement";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Le département Télécommunications",
  description:
    "Les trois piliers techniques et le pilier Humanités du département Télécommunications, Services et Usages de l'INSA Lyon.",
};

export default function DepartementPage() {
  return (
    <>
      <PageHero
        eyebrow="Le département"
        title={departementIntro.title}
        lead={departementIntro.lead}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="La formation"
              title="Trois piliers techniques, un pilier Humanités"
              lead={departementIntro.body}
            />
            <dl className="mt-8 space-y-4">
              {reperes.map((repere) => (
                <div key={repere.label} className="border-l-2 border-electric-300 pl-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-electric-700">
                    {repere.label}
                  </dt>
                  <dd className="mt-1 text-base text-ink">{repere.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/departement/remise-diplomes.webp"
              alt={`Remise des diplômes du département ${site.department}`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHeading
          eyebrow="Le contenu"
          title="Ce que tu vas réellement étudier"
          lead="Les piliers sont interconnectés : il ne faut en négliger aucun."
        />

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
          {piliers.map((pilier, index) => (
            <StaggerItem key={pilier.name} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <span className="font-heading text-sm font-semibold text-electric-700">
                  Pilier {index + 1}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold text-navy-900">
                  {pilier.name}
                </h3>
                <p className="mt-1 font-medium text-electric-700">{pilier.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{pilier.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="navy">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            La vie du département ne s&apos;arrête pas aux cours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-electric-100/85">
            Soirées au local, week-ends, événements toute l&apos;année : c&apos;est l&apos;Astus qui
            s&apos;en occupe.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/astus/" variant="secondary">
              Découvrir l&apos;Astus
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
