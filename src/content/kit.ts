/**
 * Page "Kit nouvel étudiant" : point d'entrée unique pour un arrivant en TC.
 * Remplace les anciennes pages séparées Parrainage / Démarches / Contact.
 */

/**
 * Démarches administratives.
 * TODO Astus : faire relire cette liste par le bureau, les intitulés et l'ordre
 * changent régulièrement côté scolarité.
 */
export type Demarche = {
  title: string;
  description: string;
  when: string;
};

export const demarches: Demarche[] = [
  {
    title: "Finaliser l'inscription administrative",
    description:
      "Dossier d'inscription à compléter en ligne auprès de la scolarité de l'INSA, pièces justificatives comprises.",
    when: "Avant la rentrée",
  },
  {
    title: "Payer la CVEC",
    description:
      "La contribution vie étudiante et de campus est obligatoire. L'attestation est demandée pendant l'inscription.",
    when: "Avant l'inscription",
  },
  {
    title: "Récupérer sa carte étudiante",
    description:
      "Elle sert d'accès aux bâtiments, au restaurant universitaire et aux services du campus.",
    when: "Semaine de rentrée",
  },
  {
    title: "Activer ses comptes numériques INSA",
    description:
      "Adresse mail, intranet et wifi du campus : tout passe par ces identifiants, y compris les emplois du temps.",
    when: "Semaine de rentrée",
  },
  {
    title: "Vérifier logement et bourses",
    description:
      "Dossier CROUS, APL et éventuelle demande de bourse : les délais sont longs, il vaut mieux s'y prendre tôt.",
    when: "Dès que possible",
  },
];

/** Questions posées chaque année par les nouveaux arrivants. */
export const faq: { question: string; answer: string }[] = [
  {
    question: "Le parrainage est-il obligatoire ?",
    answer:
      "Non, mais c'est très fortement conseillé. Un parrain ou une marraine de 4A répond aux questions et fait le lien avec le reste du département pendant toute l'intégration.",
  },
  {
    question: "Pourquoi un formulaire pour le groupe WhatsApp ?",
    answer:
      "Le lien d'invitation n'est pas diffusé publiquement pour éviter que le groupe de promo soit rejoint par n'importe qui. La demande est traitée manuellement par le bureau.",
  },
  {
    question: "Faut-il payer pour participer à l'intégration ?",
    answer:
      "La majorité des journées sont gratuites. Le WEI est le seul événement avec une participation, annoncée avec l'ouverture de la billetterie.",
  },
  {
    question: "Où poser une question qui n'est pas ici ?",
    answer:
      "En message privé sur le compte Instagram de l'Astus. C'est le canal le plus rapide et il est relevé quotidiennement pendant la rentrée.",
  },
];
