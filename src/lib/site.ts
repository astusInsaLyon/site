/**
 * Point unique de configuration du site.
 * C'est le premier fichier à mettre à jour d'une année sur l'autre.
 */
export const site = {
  name: "Astus",
  fullName: "Astus - association des étudiants du département Télécommunications",
  department: "Télécommunications, Services et Usages",
  school: "INSA Lyon",
  /** Année d'intégration affichée dans les titres. */
  integrationYear: "2026",
  url: "https://astusinsalyon.github.io/site",
} as const;

/**
 * Liens externes. Un formulaire remis à null affiche le bouton correspondant
 * comme "bientôt disponible" au lieu de pointer dans le vide.
 */
export const links = {
  instagram: "https://www.instagram.com/astusinsa/",
  /** Questionnaire de mise en relation avec un parrain ou une marraine. */
  parrainageForm: "https://forms.gle/RT3o8m8TPg1iUL2h9" as string | null,
  /** Demande d'ajout au groupe WhatsApp de promo, traitée manuellement par le bureau. */
  whatsappForm: "https://forms.gle/GxMwsApH5ir4mXmY9" as string | null,
} as const;

export type NavItem = {
  href: string;
  label: string;
  /** Libellé court pour la navigation mobile. */
  short: string;
};

export const navigation: NavItem[] = [
  { href: "/planning/", label: "Planning de l'intégration", short: "Planning" },
  { href: "/kit/", label: "Kit nouvel étudiant", short: "Kit" },
  { href: "/departement/", label: "Le département TC", short: "Département" },
  { href: "/astus/", label: "L'Astus & ses événements", short: "Astus" },
];
