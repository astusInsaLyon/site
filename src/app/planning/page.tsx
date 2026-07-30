import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Timeline } from "@/components/timeline";
import { Reveal } from "@/components/reveal";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { ClockIcon } from "@/components/icons";
import { formatRange, integrationEvents } from "@/content/integration";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planning de l'intégration",
  description:
    "La frise complète de la semaine d'intégration du département Télécommunications de l'INSA Lyon, jour par jour jusqu'au WEI.",
};

export default function PlanningPage() {
  const span = formatRange({
    ...integrationEvents[0],
    endDate:
      integrationEvents[integrationEvents.length - 1].endDate ??
      integrationEvents[integrationEvents.length - 1].date,
  });

  return (
    <>
      <ScrollProgress />

      <PageHero
        eyebrow={`Intégration ${site.integrationYear}`}
        title="Le planning, jour par jour"
        lead={`Du ${span}. Fais défiler la frise : chaque journée est détaillée dans l'ordre, du premier matin sur le campus jusqu'au WEI.`}
      >
        <p className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-electric-100">
          <ClockIcon className="h-5 w-5 shrink-0 text-electric-300" />
          Dates à confirmer par le bureau avant la mise en ligne.
        </p>
      </PageHero>

      <Timeline events={integrationEvents} />

      <Section tone="canvas">
        <Reveal className="rounded-2xl border border-line bg-white p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
            Une question sur une journée ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
            Ton parrain ou ta marraine est là pour ça. La demande se fait depuis le kit du nouvel
            étudiant, avec le reste des démarches.
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonLink href="/kit/">Ouvrir le kit nouvel étudiant</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
