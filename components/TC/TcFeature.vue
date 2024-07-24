<template>
  <div>
    <div class="feature1-component mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <v-chip color="error" text-color="white">
                Le département
              </v-chip>
              <h2 class="section-title font-weight-medium">
                Vous avez dit TC ?
              </h2>
              <p>
                Vous allez maintenant entamer une formation de 3 ans dans le
                département Télécommunications, Services et Usages. La formation
                s'axe autour de 3 piliers TC et un pilier Humas. Ces piliers
                sont tout à fait interconnectés, il ne faut donc en négliger
                aucun.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-13">
          <v-col cols="12" md="6" v-for="(item, i) in items" :key="i">
            <v-card elevation="0">
              <v-card-text>
                <div class="icon-round bg-light-info">
                  <i :class="'mdi mdi-' + item.logo"></i>
                </div>
                <h5 class="font-weight-medium font-18">{{ item.name }}</h5>
                <p class="mt-10 mb-8">
                  {{ item.desc }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "TcFeature",
  data() {
    return {
      items: [
        {
          name: "Informatique",
          logo: "laptop",
          desc:
            "C'est un pilier important pour la plupart des métiers qui nous attendent à la sortie de l'école. " +
            "Il va consister en l'apprentissage de nombreux langages de programmation à travers différents projets concrets, " +
            "mais aussi le développement d'un site web en 3e année."
        },
        {
          name: "Réseaux",
          logo: "wan",
          desc:
            "Qu'est-ce qu'un protocole de communication ? Comment on " +
            "connecte deux machines ensemble afin de les faire discuter ? " +
            "Vous allez découvrir les protocoles réseaux, comment ils " +
            "fonctionnent et vous allez câbler des switchs (pas la console " +
            "déso)!"
        },
        {
          name: "Systèmes de communications",
          logo: "antenna",
          desc:
            "Physiquement ça marche comment tout ça ? On vous rassure on " +
            "est pas dans la physique théorique (La 2A .. L'Elecmag ..) " +
            "mais vraiment dans comprendre comment fonctionne les canaux de " +
            "transmissions pour faire passer des données sur un support " +
            "physique."
        },
        {
          name: "Humanités",
          logo: "account",
          desc:
            "Il s'agit bien évidemment du sport et des langues (et oui on " +
            "démarre une LV2). Mais en TC se rajoute CTC et le Théâtre ! " +
            "CTC c'est Culture TéléCommunication : sur l'année il faut " +
            "rendre une revue de presse et un dossier à thème. Ça permet de " +
            "rester informé sur notre secteur. Le théâtre c'est trop bien : " +
            "il s'agit de petits exercices pour s'améliorer lors de prises " +
            "de parole publiques, ce sera directement applicable lors des " +
            "présentations de CTC."
        }
      ]
    };
  },
  methods: {}
};
</script>
