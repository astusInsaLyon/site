import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ExternalButton, PageHero, Section, SectionHeading } from "@/components/ui";
import { ChatIcon, FileIcon, InstagramIcon, UsersIcon } from "@/components/icons";
import { demarches, faq } from "@/content/kit";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kit nouvel étudiant",
  description:
    "Parrainage, groupe Messenger de promo, démarches administratives et contact : tout ce qu'un nouvel arrivant en TC doit faire, au même endroit.",
};

const actions = [
  {
    title: "Parrainage",
    description:
      "Être mis en relation avec un parrain ou une marraine de 4A qui t'accompagne pendant l'intégration.",
    href: links.parrainageForm,
    cta: "Remplir le questionnaire",
    Icon: UsersIcon,
    pendingLabel: "lien à venir",
  },
  {
    title: "Groupe Messenger de promo",
    description:
      "Le groupe n'est pas ouvert par lien public : tu fais une demande, le bureau t'ajoute manuellement.",
    href: links.messengerForm,
    cta: "Demander à rejoindre",
    Icon: ChatIcon,
    pendingLabel: "formulaire à créer",
  },
  {
    title: "Instagram de l'Astus",
    description:
      "Toutes les annonces passent par là : ouvertures de billetterie, changements de dernière minute, photos.",
    href: links.instagram,
    cta: "Voir le compte",
    Icon: InstagramIcon,
    pendingLabel: "lien à venir",
  },
];

export default function KitPage() {
  return (
    <>
      <PageHero
        eyebrow="Nouvel arrivant"
        title="Le kit du nouvel étudiant"
        lead="Trois démarches à faire tout de suite, puis la liste des formalités administratives. Rien d'autre à chercher ailleurs sur le site."
      />

      <Section>
        <SectionHeading
          eyebrow="À faire en premier"
          title="Les trois liens utiles"
          lead="Deux formulaires et un compte à suivre. Compte cinq minutes en tout."
        />

        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {actions.map((action) => (
            <StaggerItem key={action.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-electric-300">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                  <action.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-navy-900">
                  {action.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {action.description}
                </p>
                <ExternalButton
                  href={action.href}
                  pendingLabel={action.pendingLabel}
                  className="mt-6 w-full"
                >
                  {action.cta}
                </ExternalButton>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="canvas">
        <SectionHeading
          eyebrow="Administratif"
          title="Les démarches à ne pas oublier"
          lead="Dans l'ordre où elles arrivent. Les délais côté scolarité sont longs : mieux vaut ne rien laisser traîner."
        />

        <Stagger className="mt-10 space-y-3">
          {demarches.map((demarche, index) => (
            <StaggerItem key={demarche.title}>
              <article className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-heading text-lg font-semibold text-white">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-lg font-semibold text-navy-900">
                      {demarche.title}
                    </h3>
                    <span className="rounded-full bg-electric-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-electric-700">
                      {demarche.when}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{demarche.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-6 flex items-start gap-3 rounded-2xl border border-electric-300 bg-electric-100/60 p-5">
          <FileIcon className="mt-0.5 h-5 w-5 shrink-0 text-electric-700" />
          <p className="text-sm leading-relaxed text-navy-800">
            Cette liste est un repère, pas un document officiel. En cas de doute sur une pièce à
            fournir, la scolarité de l&apos;INSA reste la source de référence.
          </p>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="Questions fréquentes" title="Ce qu'on nous demande chaque année" />

        <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.question} className="group py-2">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-medium text-navy-900 transition-colors hover:text-electric-700">
                {item.question}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-electric-700 transition-transform duration-200 group-open:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-12 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
