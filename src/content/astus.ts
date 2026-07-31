/**
 * Présentation de l'Astus et panorama de ses événements.
 * Les photos du bureau sont à remplacer par celles fournies par l'équipe.
 */
export type AstusEvent = {
  name: string;
  description: string;
  image?: string;
  /** "phare" ressort visuellement, "récurrent" reste sur la grille classique. */
  kind: "phare" | "récurrent";
};

export const astusIntro = {
  title: "L'Astus, c'est quoi ?",
  body: "L'association des élèves du département. Deux missions : organiser la vie extra-scolaire des élèves et maintenir un contact privilégié avec les entreprises partenaires. Ces deux missions donnent lieu à différents événements tout au long de l'année.",
  note: "L'Astus fonctionne en année civile : le bureau est élu en début d'année calendaire, pas à la rentrée.",
};

export const events: AstusEvent[] = [
  {
    name: "WEI",
    kind: "phare",
    description:
      "L'événement de début d'année à ne surtout pas rater. En TC il se déroule sur trois jours, du jeudi au samedi. Au programme : des jeux, de la baignade et des moments de convivialité.",
    image: "/images/carousel/wei.webp",
  },
  {
    name: "WEC - week-end canoë",
    kind: "phare",
    description:
      "Un week-end en fin d'année : du canoë, un super camping. C'est le dernier événement de l'année scolaire, un dernier moment complètement fou tous ensemble.",
    image: "/images/carousel/canoe.webp",
  },
  {
    name: "Soirée retrouvailles",
    kind: "récurrent",
    description:
      "Le premier événement du nouveau mandat fraîchement élu. On privatise un bar et on accueille tous les TC rentrés d'échange au semestre 1.",
    image: "/images/carousel/retrouvaille.webp",
  },
  {
    name: "Le POT",
    kind: "récurrent",
    description:
      "Organisé par des élèves volontaires de 3e année pour présenter le département aux élèves du FIMI. L'occasion de discuter orientation autour d'un cocktail préparé par vos soins.",
    image: "/images/carousel/pot.webp",
  },
  {
    name: "Soirées au local",
    kind: "récurrent",
    description:
      "Le local Astus vit toute l'année : soirées, jeux et retrouvailles entre deux cours. C'est le point de rendez-vous par défaut du département.",
    image: "/images/carousel/afterwork.webp",
  },
  {
    name: "Vendredis chill",
    kind: "récurrent",
    description:
      "Le goûter du vendredi, ouvert à tout le département. Format court, sans inscription : on passe quand on veut.",
    image: "/images/gallery/3.webp",
  },
];

/**
 * Membres du bureau.
 *
 * Équipe du mandat 2026, le Bur'Open Bar. Les visuels sont ceux de la
 * présentation publiée sur le compte Instagram de l'association.
 * `nickname` reprend le surnom affiché sur chaque visuel.
 *
 * À mettre à jour à chaque nouveau mandat, élu en début d'année civile.
 */
export type BureauMember = {
  name: string;
  role: string;
  nickname?: string;
  image?: string;
};

export const bureauName = "Le Bur'Open Bar";

export const bureau: BureauMember[] = [
  { name: "Laura", role: "Présidente", nickname: "dictatrice", image: "/images/bureau/laura.webp" },
  { name: "Enzo", role: "Vice-président", nickname: "influenceur", image: "/images/bureau/enzo.webp" },
  {
    name: "Maksim",
    role: "Secrétaire général",
    nickname: "petit gourmand",
    image: "/images/bureau/maksim.webp",
  },
  {
    name: "Julien",
    role: "Vice-secrétaire",
    nickname: "vieux père",
    image: "/images/bureau/julien.webp",
  },
  { name: "Anna", role: "Trésorière", nickname: "boisson dodo", image: "/images/bureau/anna.webp" },
  {
    name: "Flore",
    role: "Responsable événements",
    nickname: "slay",
    image: "/images/bureau/flore.webp",
  },
  {
    name: "Lilou",
    role: "Responsable communication",
    nickname: "bebeta de l'Astus",
    image: "/images/bureau/lilou.webp",
  },
  {
    name: "Margaux",
    role: "Responsable communication",
    nickname: "barista de l'INSA",
    image: "/images/bureau/margaux.webp",
  },
  {
    name: "Thibault",
    role: "Responsable entreprises",
    nickname: "responsable barathon",
    image: "/images/bureau/thibault.webp",
  },
  {
    name: "Jade",
    role: "Responsable DDRS",
    nickname: "puff master",
    image: "/images/bureau/jade.webp",
  },
  {
    name: "Ugo",
    role: "Homme à tout faire",
    nickname: "tacos plaisir",
    image: "/images/bureau/ugo.webp",
  },
];

/**
 * Prochains rendez-vous affichés en haut de la page Astus.
 * Laisser le tableau vide masque complètement la section.
 */
export type UpcomingEvent = {
  name: string;
  when: string;
  detail?: string;
};

export const upcoming: UpcomingEvent[] = [
  {
    name: "Semaine d'intégration",
    when: "du 7 au 13 septembre 2026",
    detail: "Dates à confirmer par le bureau.",
  },
  {
    name: "WEI",
    when: "du 24 au 26 septembre 2026",
    detail: "Ouverture de la billetterie annoncée sur Instagram.",
  },
];
