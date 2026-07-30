/**
 * Présentation du département Télécommunications, Services et Usages.
 * Contenu très stable d'une année sur l'autre.
 */
export type Pilier = {
  name: string;
  tagline: string;
  description: string;
};

export const piliers: Pilier[] = [
  {
    name: "Informatique",
    tagline: "Programmer, du premier script au site web de 3A",
    description:
      "Pilier important pour la plupart des métiers qui attendent à la sortie de l'école. Apprentissage de nombreux langages de programmation à travers des projets concrets, jusqu'au développement d'un site web en 3e année.",
  },
  {
    name: "Réseaux",
    tagline: "Faire discuter les machines entre elles",
    description:
      "Qu'est-ce qu'un protocole de communication ? Comment connecte-t-on deux machines pour les faire discuter ? Découverte des protocoles réseaux, de leur fonctionnement, et câblage de switchs.",
  },
  {
    name: "Systèmes de communication",
    tagline: "Comprendre ce qui se passe sur le support physique",
    description:
      "Pas de physique théorique ici, mais la compréhension concrète des canaux de transmission : comment les données circulent réellement sur un support physique.",
  },
  {
    name: "Humanités",
    tagline: "Sport, langues, CTC et théâtre",
    description:
      "Sport et langues, avec le démarrage d'une LV2. En TC s'ajoutent CTC (Culture TéléCommunication : revue de presse et dossier à thème sur l'année) et le théâtre, qui travaille la prise de parole en public, directement réutilisable pour les présentations de CTC.",
  },
];

export const departementIntro = {
  title: "Vous avez dit TC ?",
  lead: "Trois ans dans le département Télécommunications, Services et Usages.",
  body: "La formation s'axe autour de trois piliers techniques et d'un pilier Humanités. Ces piliers sont interconnectés : il ne faut en négliger aucun.",
};

/** Repères pratiques sur le déroulé des trois années. */
export const reperes: { label: string; value: string }[] = [
  { label: "Durée du cursus", value: "3 ans, de la 3A à la 5A" },
  { label: "Piliers", value: "Informatique, réseaux, systèmes de communication, humanités" },
  { label: "Projet fil rouge", value: "Développement d'un site web en 3e année" },
  { label: "Langues", value: "Anglais plus une LV2 démarrée au département" },
];
