import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ButtonLink, ExternalButton, Section, SectionHeading } from "@/components/ui";
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
      "Parrainage, groupe Messenger de promo, démarches administratives. Tout au même endroit.",
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
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-electric-600/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-electric-500/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-electric-300">
              Intégration {site.integrationYear} - département Télécommunications
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl">
              Ta rentrée en TC commence <span className="text-electric-300">ici</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-electric-100/90">
              Tu arrives au département {site.department} de l&apos;{site.school}. Le planning de
              l&apos;intégration, le parrainage et les démarches à faire sont tous à un clic.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/planning/" variant="secondary">
                Voir le planning
              </ButtonLink>
              <ButtonLink href="/kit/" variant="ghost">
                Kit nouvel étudiant
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <dt className="text-sm font-medium uppercase tracking-wider text-electric-300">
                  Premier jour
                </dt>
                <dd className="mt-2 font-heading text-2xl font-semibold capitalize">
                  {formatDate(firstEvent.date)}
                </dd>
                <dd className="mt-1 text-sm text-electric-100/80">{firstEvent.title}</dd>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <dt className="text-sm font-medium uppercase tracking-wider text-electric-300">
                  WEI
                </dt>
                <dd className="mt-2 font-heading text-2xl font-semibold">{formatRange(wei)}</dd>
                <dd className="mt-1 text-sm text-electric-100/80">
                  Trois jours, du jeudi au samedi
                </dd>
              </div>
            </dl>
          </Reveal>
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
              <Link
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:border-electric-300 hover:shadow-lg hover:shadow-navy-900/10"
              >
                <div className="relative h-36 overflow-hidden sm:h-40">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-navy-950/75 to-navy-950/10"
                  />
                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-electric-700">
                    <card.Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-navy-900">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                    Y aller
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-electric-100">
              <UsersIcon className="h-5 w-5" />
              Le réflexe numéro un
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
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

          <Reveal delay={0.12} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/blog/parrainage.webp"
              alt="Étudiants du département réunis pendant l'intégration"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
