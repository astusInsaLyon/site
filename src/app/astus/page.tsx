import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ExternalButton, PageHero, Section, SectionHeading } from "@/components/ui";
import { CalendarIcon, InstagramIcon } from "@/components/icons";
import { astusIntro, bureau, bureauName, events, upcoming } from "@/content/astus";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "L'Astus & ses événements",
  description:
    "Qui est le bureau de l'Astus, ce que l'association organise dans l'année, du WEI au WEC, et les prochains rendez-vous.",
};

export default function AstusPage() {
  const phares = events.filter((event) => event.kind === "phare");
  const recurrents = events.filter((event) => event.kind === "récurrent");

  return (
    <>
      <PageHero eyebrow="L'association" title={astusIntro.title} lead={astusIntro.body}>
        <p className="max-w-xl rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-electric-100">
          {astusIntro.note}
        </p>
      </PageHero>

      {upcoming.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Prochains rendez-vous"
            title="Ce qui arrive"
            lead="Les ouvertures de billetterie sont annoncées sur Instagram."
          />

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {upcoming.map((item) => (
              <StaggerItem key={item.name}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                    <CalendarIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy-900">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium text-electric-700">{item.when}</p>
                    {item.detail && <p className="mt-1 text-sm text-muted">{item.detail}</p>}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}

      <Section tone="canvas">
        <SectionHeading
          eyebrow="Les temps forts"
          title="Les deux week-ends de l'année"
          lead="Un en ouverture, un en clôture. Ce sont les deux événements que personne ne rate."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {phares.map((event, index) => (
            <Reveal key={event.name} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl bg-navy-900 text-white">
                {event.image && (
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <Image
                      src={event.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/30 to-transparent"
                    />
                  </div>
                )}
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-bold">{event.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-electric-100/85">
                    {event.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Toute l'année"
          title="La vie associative au quotidien"
          lead="Entre les gros événements, le département vit surtout au local."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recurrents.map((event) => (
            <StaggerItem key={event.name} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
                {event.image && (
                  <div className="relative h-36">
                    <Image
                      src={event.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-semibold text-navy-900">{event.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{event.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="canvas">
        <SectionHeading
          eyebrow="L'équipe"
          title={bureauName}
          lead="Les personnes à qui parler quand tu as une question sur le département ou un événement."
        />

        <Stagger className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {bureau.map((member) => (
            <StaggerItem key={`${member.name}-${member.role}`}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-950">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={`Visuel de présentation de ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <figcaption className="mt-3">
                  <span className="block font-heading text-base font-semibold text-navy-900">
                    {member.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-electric-700">{member.role}</span>
                  {member.nickname && (
                    <span className="mt-0.5 block text-xs italic text-muted">
                      {member.nickname}
                    </span>
                  )}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="navy">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            Tout passe par Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-electric-100/85">
            Annonces, billetteries, photos des événements et réponses en message privé.
          </p>
          <div className="mt-8 flex justify-center">
            <ExternalButton href={links.instagram} variant="secondary">
              <InstagramIcon className="h-5 w-5" />
              Suivre l&apos;Astus
            </ExternalButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
