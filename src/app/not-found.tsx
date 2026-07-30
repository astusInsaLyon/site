import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-navy-900 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-electric-300">
          Erreur 404
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Cette page n&apos;existe pas</h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-electric-100/85">
          Le lien est peut-être ancien. Tout le site tient en quatre pages, accessibles depuis
          l&apos;accueil.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="secondary">
            Retour à l&apos;accueil
          </ButtonLink>
          <ButtonLink href="/planning/" variant="ghost">
            Voir le planning
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
