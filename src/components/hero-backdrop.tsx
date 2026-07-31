/**
 * Fond d'ambiance des bandeaux sombres : halos colores en mouvement lent,
 * grille technique en fondu, et voile de vignettage.
 *
 * Entierement en CSS, aucun JavaScript : le composant reste rendu au build et
 * ne coute rien au chargement. Les animations sont neutralisees par le bloc
 * prefers-reduced-motion de globals.css.
 */
export function HeroBackdrop({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Halos. Tailles differentes et retards decales pour eviter la pulsation synchrone. */}
      <div className="absolute -left-1/4 -top-1/3 h-[42rem] w-[42rem] animate-aurora rounded-full bg-electric-600/55 blur-[110px]" />
      <div
        className="absolute -right-1/4 top-1/4 h-[36rem] w-[36rem] animate-aurora rounded-full bg-electric-500/40 blur-[120px]"
        style={{ animationDelay: "-7s" }}
      />
      {dense && (
        <div
          className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] animate-aurora rounded-full bg-electric-700/60 blur-[100px]"
          style={{ animationDelay: "-14s" }}
        />
      )}

      <div className="hero-grid absolute inset-0" />

      {/* Assombrit les bords pour que le texte garde son contraste. */}
      <div className="absolute inset-0 bg-radial-[at_50%_30%] from-transparent to-navy-950/70" />
    </div>
  );
}
