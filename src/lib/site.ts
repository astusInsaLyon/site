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
 * Liens externes. Les deux Google Forms sont à remplacer par les vraies URL
 * avant la mise en ligne : tant qu'ils valent null, le bouton s'affiche
 * comme "bientôt disponible" au lieu de pointer dans le vide.
 */
export const links = {
  instagram: "https://www.instagram.com/astusinsa/",
  /* TODO Astus : coller ici l'URL du Google Form parrainage existant. */
  parrainageForm: null as string | null,
  /* TODO Astus : créer le Google Form de demande d'ajout au groupe Messenger, puis coller l'URL. */
  messengerForm: null as string | null,
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
