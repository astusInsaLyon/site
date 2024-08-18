<template>
  <div>
    <div id="notForgot" class="featureWei-component mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Les indispensables du WEI
              </h2>
              <p>
                Parce qu'un week-end sans rien c'est triste
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-13">
          <v-col cols="12" md="6" v-for="(item, i) in features" :key="i">
            <v-card elevation="0">
              <v-card-text>
                <div class="icon-round">
                  <i :class="'mdi mdi-' + item.logo"></i>
                </div>
                <h5 class="font-weight-medium font-18">{{ item.name }}</h5>
                <p class="mt-10 mb-8 text-justify" v-html="item.desc"></p>
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
  name: "Feature1",
  data() {
    return {
      features: [
        {
          name: "Duvet / Draps",
          logo: "bed",
          desc:
            "On a préviligier votre confort en prenant des bungalows " +
            "mais les draps ne sont pas inclus dans l'offre. " +
            "Dans la mesure du possible, pensez à prendre duvet ou draps.",
        },
        {
          name: "Des affaires de bains",
          logo: "pool",
          desc:
            "Si vous voulez profiter de la baignade, cela peut s'avérer " +
            "très utile.",
        },
        {
          name: "Affaires de toilettes",
          logo: "shower",
          desc: 
              "Serviette et trousse de toilettes basique bien évidemment. " +
              "On est des puants mais il faudra quand même se doucher une fois ou deux " +
              '<strong><span style="color : red" >OBLIGATOIREMENT </span></strong>' +
              "pour le confort de tous.",
        },
        {
          name: "Vêtements",
          logo: "bag-personal",
          desc:
            "Prévoir des vêtements en fonctions de la météo que l'on communiquera " +
            "plusieurs jours à l'avance. Ne pas oublier " +
            "des affaires de sports pour faire des activités ! Ça reste du " +
            "camping : ne vous chargez pas trop et " +
            '<strong><span style="color : red" >évitez au maximum les affaires de valeurs.</span></strong>',
        }
      ]
    };
  },
  methods: {}
};
</script>


<style scoped>  

.text-justify {
  text-align: justify;
}
</style>