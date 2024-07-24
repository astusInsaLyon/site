<template>
  <div class="bg-extra-light">
    <v-container>
      <v-row class="mb-5" justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="ui-title font-weight-bold">Les évènements</h2>
            <p>
              Tout au long de l'année l'ASTUS a pour objectif de régaler les
              membres du département avec des évènements festifs. Nous allons
              revenir sur chacun d'entre eux pour vous mettre l'eau à la bouche
              !
            </p>
          </div>
        </v-col>
      </v-row>
      <v-carousel
        cycle
        interval="8000"
        v-model="model"
        class="custom-carousel"
        :show-arrows="false"
      >
        <v-carousel-item v-for="(item, i) in events" :key="i">
          <v-sheet :class="'entire-sheet-' + i" height="110%" tile>
            <v-row
              class="fill-height act-content"
              align="center"
              justify="center"
            >
              <div class="text-bg">
                <h1 class="text-h1" style="color: black">{{ item.name }}</h1>
                <br />
                <p class="text-h4" style="color: black" align="justify">{{ item.desc }}</p>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      events: [
        {
          name: "WEI",
          desc:
            "L'événement de début d'année à ne surtout pas rater. En TC nous avons la chance de le réaliser sur 3 jours (jeudi à samedi). Au programme : des jeux, de la baignade et des moments de convivialité."
        },
        {
          name: "POT",
          desc:
            "Organisé par des élèves volontaires de 3e année le pot a pour but de présenter le département aux élèves du FIMI. L'occasion de se retrouver pour discuter orientation autour d'un cocktail préparé par vos soins ! (Souvent ceux qui font le pot finissent à l'ASTUS d'ailleurs)"
        },
        {
          name: "Soirée retrouvailles",
          desc:
            "C'est le premier événement du nouveau mandat fraîchement élu en début d'année (et oui l'ASTUS fonctionne en année civile !). On privatise un bar et on se retrouve tous ensemble pour accueillir chaleureusement tous nos joyeux TC qui étaient partis au S1 en échange."
        },
        {
          name: "WEC",
          desc:
            "Un week-end en fin d'année, du canoë, un super camping : quoi de mieux ? C'est le dernier évènement de l'année scolaire et ça permet de vivre un dernier moment absolument fou tous ensemble !"
        }
      ]
    };
  }
};
</script>

<style scoped>
.custom-carousel {
  margin-bottom: 3%;
  box-shadow: 5px 5px 5px;
}


.linking {
  font-size: 30px; /* Augmenter la taille du texte */
  text-align: center; /* Centrer le texte horizontalement */
  width: 100%; /* Assurez-vous que le lien prend toute la largeur pour le centrage */
}
.act-content {
  margin-inline: 10%;
}
.entire-sheet-0 {
  background-image: url("@/assets/images/carousel/WEI.jpg");
  background-size: 100% auto;
  background-position-y: 50%;
}
.entire-sheet-1 {
  background-image: url("@/assets/images/carousel/pot.jpg");
  background-size: 100% auto;
  background-position-y: 75%;
}
.entire-sheet-2 {
  background-image: url("@/assets/images/carousel/retrouvaille.jpg");
  background-size: 100% auto;
  background-position-y: 50%;
}
.entire-sheet-3 {
  background-image: url("@/assets/images/carousel/canoe.jpg");
  background-size: 100% auto;
  background-position-y: 50%;
}
.text-bg {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 4px;
}
@media (max-width: 991px) {
  .entire-sheet-0 {
    background-image: url("@/assets/images/carousel/WEI.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
  .entire-sheet-1 {
    background-image: url("@/assets/images/carousel/pot.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
  .entire-sheet-2 {
    background-image: url("@/assets/images/carousel/retrouvaille.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
  .entire-sheet-3 {
    background-image: url("@/assets/images/carousel/canoe.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
}
</style>
