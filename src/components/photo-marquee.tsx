import Image from "next/image";

/**
 * Bandeau de photos qui defile en continu sous le hero.
 *
 * La liste est rendue deux fois et l'animation translate de -50% : au moment
 * ou la premiere copie sort de l'ecran, la seconde est exactement a sa place
 * de depart, donc la boucle ne se voit pas. Uniquement du CSS, aucun timer.
 */
const PHOTOS = [
  { src: "/images/carousel/wei.webp", legend: "WEI" },
  { src: "/images/blog/rallye.webp", legend: "Rallye" },
  { src: "/images/carousel/vendredi-chill.webp", legend: "Vendredis chill" },
  { src: "/images/blog/paintBall.webp", legend: "Paintball" },
  { src: "/images/carousel/canoe.webp", legend: "Week-end canoë" },
  { src: "/images/blog/humas.webp", legend: "Soirée Humas" },
  { src: "/images/carousel/pot.webp", legend: "Le POT" },
  { src: "/images/blog/coincoin.webp", legend: "Journée Coin-Coin" },
];

export function PhotoMarquee() {
  return (
    <div
      aria-hidden="true"
      className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="animate-marquee flex w-max gap-4 pr-4">
        {[...PHOTOS, ...PHOTOS].map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-32 sm:w-52"
          >
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="208px"
              /*
               * Le bandeau touche le bas du premier ecran : les premieres
               * vignettes sont visibles d'emblee et l'une d'elles devient
               * l'element LCP. On les charge donc tout de suite, et on laisse
               * les suivantes en differe pour ne pas tirer les seize d'un coup.
               */
              priority={index < 4}
              className="object-cover opacity-80"
            />
            <span className="absolute bottom-1.5 left-2 text-[11px] font-medium text-white/90 drop-shadow">
              {photo.legend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
