/**
 * Frise chronologique de l'intégration.
 *
 * ==> C'EST LE FICHIER A ÉDITER CHAQUE ANNÉE. <==
 * Ajouter, retirer ou réordonner les entrées suffit : la frise et les dates
 * clés de la page d'accueil se régénèrent automatiquement.
 *
 * date : format ISO "AAAA-MM-JJ" (obligatoire, sert au tri et à l'affichage)
 * endDate : uniquement pour les événements sur plusieurs jours
 * image : chemin dans /public/images (facultatif)
 */
export type IntegrationEvent = {
  slug: string;
  date: string;
  endDate?: string;
  title: string;
  summary: string;
  details: string[];
  image?: string;
  highlight?: boolean;
};

/**
 * ATTENTION : seules les dates du WEI (24 au 26 septembre) sont confirmées.
 * Les dates de la semaine d'intégration restent à valider par le bureau.
 */
export const integrationEvents: IntegrationEvent[] = [
  {
    slug: "aday",
    date: "2026-09-07",
    title: "Découverte du département & A-Day",
    summary: "Une grande visite et l'occasion de tous se rencontrer.",
    details: [
      "Visite du département, du local Astus et tour du campus.",
      "Présentation de l'équipe et du déroulé de la semaine.",
      "Premier moment pour croiser toute la promo.",
    ],
    image: "/images/blog/aday.webp",
  },
  {
    slug: "rallye",
    date: "2026-09-08",
    title: "Rallye",
    summary: "Des défis en équipe dans tout le campus.",
    details: [
      "Parcours par équipes mélangées entre nouveaux arrivants.",
      "Défis, énigmes et points à marquer pour son groupe.",
    ],
    image: "/images/blog/rallye.webp",
  },
  {
    slug: "paintball",
    date: "2026-09-09",
    title: "Paintball TC contre IF",
    summary: "S'éclater tout en les éclatant.",
    details: [
      "Affrontement amical contre le département Informatique.",
      "Matériel fourni, aucune expérience requise.",
    ],
    image: "/images/blog/paintBall.webp",
  },
  {
    slug: "coincoin",
    date: "2026-09-10",
    title: "Tournoi Coin-Coin contre les IF",
    summary: "Le tournoi légendaire, dans la journée, juste avant la soirée Humas.",
    details: [
      "Tournoi de coin-coin face au département Informatique.",
      "Un temps avec son parrain ou sa marraine avant de commencer.",
    ],
    image: "/images/blog/coincoin.webp",
  },
  {
    slug: "humas",
    date: "2026-09-10",
    title: "Soirée Humas",
    summary: "Le soir même, la soirée sur la pelouse des Humanités.",
    details: [
      "Tous les départements de l'INSA réunis au même endroit.",
      "L'occasion de rencontrer du monde en dehors de TC.",
    ],
    image: "/images/blog/humas.webp",
  },
  {
    slug: "vendredi-chill",
    date: "2026-09-11",
    title: "Vendredi chill",
    summary: "Le goûter du vendredi, ouvert à tout le département.",
    details: [
      "Format court et sans inscription : on passe quand on veut.",
      "Transats et goûter à l'ombre, sur le campus.",
    ],
    image: "/images/carousel/vendredi-chill.webp",
  },
  {
    slug: "interdepart",
    date: "2026-09-12",
    title: "Journée interdépartements",
    summary: "Rencontrer les autres départements de l'INSA.",
    details: ["Activités communes avec les autres départements du campus."],
    image: "/images/blog/interdepart.webp",
  },
  {
    slug: "olympiade",
    date: "2026-09-13",
    title: "Olympiades",
    summary: "Les épreuves interdépartements, puis barbecue.",
    details: [
      "Épreuves sportives et jeux par équipes.",
      "Barbecue tous ensemble pour clôturer la journée.",
    ],
    image: "/images/blog/olympiade.webp",
  },
  {
    slug: "wei",
    date: "2026-09-24",
    endDate: "2026-09-26",
    title: "WEI - week-end d'intégration",
    summary: "Le moment le plus attendu de l'intégration, sur trois jours.",
    details: [
      "En TC le WEI dure trois jours, du jeudi au samedi.",
      "Au programme : jeux, baignade et moments de convivialité.",
      "Départ en car depuis le campus, hébergement sur place.",
    ],
    image: "/images/blog/wei.webp",
    highlight: true,
  },
];

const MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const WEEKDAYS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

/** "lundi 7 septembre" - formaté à la main pour rester identique au build et au client. */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return `${WEEKDAYS[date.getUTCDay()]} ${day} ${MONTHS[month - 1]}`;
}

/** "17 au 19 septembre" pour les événements sur plusieurs jours. */
export function formatRange(event: IntegrationEvent): string {
  if (!event.endDate) return formatDate(event.date);
  const [, startMonth, startDay] = event.date.split("-").map(Number);
  const [, endMonth, endDay] = event.endDate.split("-").map(Number);
  if (startMonth === endMonth) {
    return `${startDay} au ${endDay} ${MONTHS[startMonth - 1]}`;
  }
  return `${startDay} ${MONTHS[startMonth - 1]} au ${endDay} ${MONTHS[endMonth - 1]}`;
}

/** Version courte pour les badges : "7 sept." */
export function formatShort(event: IntegrationEvent): string {
  const [, month, day] = event.date.split("-").map(Number);
  const suffix = MONTHS[month - 1].slice(0, 4);
  if (event.endDate) {
    const endDay = Number(event.endDate.split("-")[2]);
    return `${day}-${endDay} ${suffix}.`;
  }
  return `${day} ${suffix}.`;
}

/** Jour du premier et du dernier événement, pour l'accroche de la page d'accueil. */
export const integrationSpan = {
  start: integrationEvents[0].date,
  end:
    integrationEvents[integrationEvents.length - 1].endDate ??
    integrationEvents[integrationEvents.length - 1].date,
};
