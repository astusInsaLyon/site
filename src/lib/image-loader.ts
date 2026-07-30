/**
 * Loader d'images pour l'export statique.
 *
 * En export, Next ne peut pas optimiser les images a la volee : les fichiers de
 * /public sont servis tels quels (ils sont deja convertis en WebP par
 * `npm run images`). Ce loader existe uniquement pour prefixer le basePath,
 * que next/image n'ajoute pas tout seul - sans lui, les images renvoient 404
 * une fois deployees sur GitHub Pages sous /site.
 */
type LoaderArgs = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src }: LoaderArgs): string {
  if (/^https?:\/\//.test(src)) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/site";
  return `${basePath}${src}`;
}
