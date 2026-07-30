import Link from "next/link";
import { links, navigation, site } from "@/lib/site";
import { InstagramIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-electric-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-electric-100/80">
            Association des étudiants du département {site.department}, {site.school}.
          </p>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/10 px-4 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <InstagramIcon className="h-5 w-5" />
            Suivre l&apos;Astus sur Instagram
          </a>
        </div>

        <nav aria-label="Pages du site">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-electric-300">
            Le site
          </p>
          <ul className="mt-4 space-y-1">
            <li>
              <Link
                href="/"
                className="flex min-h-11 items-center text-sm text-electric-100/85 transition-colors hover:text-white"
              >
                Accueil
              </Link>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center text-sm text-electric-100/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-electric-300">
            Une question ?
          </p>
          <p className="mt-4 text-sm leading-relaxed text-electric-100/80">
            Le plus simple reste le message privé sur Instagram : c&apos;est relevé tous les jours
            pendant la période de rentrée.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-electric-100/60 sm:px-6">
          Site réalisé par le bureau de l&apos;Astus.
        </p>
      </div>
    </footer>
  );
}
