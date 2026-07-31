import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ButtonLink, ExternalButton, Section, SectionHeading } from "@/components/ui";
import { Countdown } from "@/components/countdown";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { PhotoMarquee } from "@/components/photo-marquee";
import { SpotlightCard } from "@/components/spotlight-card";
import {
  ArrowRightIcon,
  BookIcon,
  CalendarIcon,
  CompassIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/icons";
import { formatDate, formatRange, integrationEvents } from "@/content/integration";
import { links, site } from "@/lib/site";

const hubCards = [
  {
    href: "/planning/",
    title: "Planning de l'intégration",
    description: "Jour par jour, du premier matin au WEI. La frise complète de la rentrée.",
    Icon: CalendarIcon,
    image: "/images/blog/aday.webp",
  },
  {
    href: "/kit/",
    title: "Kit nouvel étudiant",
    description:
      "Parrainage, groupe WhatsApp de promo, démarches administratives. Tout au même endroit.",
    Icon: CompassIcon,
    image: "/images/gallery/2.webp",
  },
  {
    href: "/departement/",
    title: "Le département TC",
    description: "Les trois piliers techniques, les humanités, et à quoi ressemblent trois ans ici.",
    Icon: BookIcon,
    image: "/images/gallery/5.webp",
  },
  {
    href: "/astus/",
    title: "L'Astus & ses événements",
    description: "Qui est le bureau, ce qu'on organise dans l'année, et les prochaines dates.",
    Icon: SparkIcon,
    image: "/images/carousel/wei.webp",
  },
];

export default function HomePage() {
  const firstEvent = integrationEvents[0];
  const wei = integrationEvents.find((event) => event.slug === "wei") ?? integrationEvents[0];

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <HeroBackdrop dense />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6 sm:pb-14 sm:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2.5 pr-4 text-sm font-medium text-electric-100 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-300" />
              </span>
              Intégration {site.integrationYear} - département Télécommunications
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-[5.5rem]">
              Ta rentrée en TC
              <br />
              commence{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-br from-electric-300 via-electric-500 to-electric-700 bg-clip-text text-transparent">
                  ici
                </span>
                {/*
                  Trait d'accent sous le mot. Volontairement epais et plus
                  large que le texte : un trait fin a la largeur exacte du mot
                  se lit comme un lien souligne.
                */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-[6%] h-2.5 w-[112%] overflow-hidden rounded-full bg-linear-to-r from-electric-700 via-electric-500 to-electric-300"
                >
                  <span className="animate-sheen block h-full w-1/3 bg-white/70 blur-[2px]" />
                </span>
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-electric-100/85 sm:text-xl">
              Tu arrives au département {site.department} de l&apos;{site.school}. Le planning de
              l&apos;intégration, le parrainage et les démarches à faire sont tous à un clic.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/planning/" variant="secondary">
                Voir le planning
              </ButtonLink>
              <ButtonLink href="/kit/" variant="ghost">
                Kit nouvel étudiant
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            {/* Empile en pleine largeur sur mobile, ou les largeurs
                intrinseques donneraient trois blocs inegaux. */}
            <div className="mt-14 grid gap-4 sm:flex sm:flex-wrap sm:items-stretch">
              <Countdown date={firstEvent.date} label="Avant le premier jour" />

              <div className="flex flex-col justify-center gap-1 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-electric-300">
                  Le WEI
                </p>
                <p className="font-heading text-2xl font-bold sm:text-3xl">{formatRange(wei)}</p>
                <p className="text-sm text-electric-100/70">Trois jours, du jeudi au samedi</p>
              </div>

              <div className="flex flex-col justify-center gap-1 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-electric-300">
                  Premier jour
                </p>
                {/*
                  first-letter et non capitalize : en francais le nom du mois
                  reste en minuscule, "Lundi 7 Septembre" serait une faute.
                */}
                <p className="font-heading text-2xl font-bold first-letter:uppercase sm:text-3xl">
                  {formatDate(firstEvent.date)}
                </p>
                <p className="text-sm text-electric-100/70">{firstEvent.title}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative pb-12">
          <PhotoMarquee />
        </div>
      </section>

      <Section tone="canvas">
        <SectionHeading
          eyebrow="Par où commencer"
          title="Quatre pages, rien de plus"
          lead="Chaque carte mène directement à ce que tu cherches. Pas de menu à explorer."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
          {hubCards.map((card) => (
            <StaggerItem key={card.href}>
              <SpotlightCard className="h-full rounded-2xl">
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-electric-300 hover:shadow-xl hover:shadow-navy-900/10"
                >
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/25 to-transparent"
                    />
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-electric-700 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                      <card.Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-semibold text-navy-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {card.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                      Y aller
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <HeroBackdrop />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-electric-100">
              <UsersIcon className="h-5 w-5" />
              Le réflexe numéro un
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
              Demande ton parrain ou ta marraine
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-electric-100/85">
              Un étudiant de 4A qui répond à tes questions, te présente le département et
              t&apos;accompagne pendant toute l&apos;intégration. Le questionnaire prend deux
              minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalButton href={links.parrainageForm} variant="secondary">
                Remplir le questionnaire
              </ExternalButton>
              <ButtonLink href="/kit/" variant="ghost">
                Voir tout le kit
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
          >
            <Image
              src="/images/blog/parrainage.webp"
              alt="Étudiants du département réunis pendant l'intégration"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
