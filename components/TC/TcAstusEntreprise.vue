<template>
  <div class="bg-extra-light">
    <v-container>
      <v-row class="mb-5" justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="ui-title font-weight-bold">Les évènements entreprises</h2>
            <p>
              L'ASTUS organise aussi des évènements un peu plus sérieux, pour
              vous permettre d'avoir un premier contact avec différentes
              entreprises le plus tôt possible :
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
      <nuxt-link to="entreprise"
      class="
        text-themecolor
        linking
        text-decoration-none
        d-flex
        align-center
        font-size-hight
      "
      style="gap: 8px;"
      >
      En savoir plus <i class="mdi mdi-arrow-right" style="font-size: 30px; transform: translateY(3.5px);"></i>
    </nuxt-link>
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
          name: "Afterwork",
          desc:
            "Quoi de mieux que de partager un verre avec des professionnels pour pouvoir discuter dans une atmosphère plaisante ? L'Astus organise régulièrement ce genre d’évènements permettant aux étudiants d’échanger avec des ingénieurs de façon plus libre et détendue."
        },
        {
          name: "Simulation d’entretiens",
          desc:
            "Des employés de différentes entreprises du monde des télécommunications viennent faire passer des entretiens fictifs aux étudiants pour les entraîner et tester leur CV. Cela permet aux étudiants de faciliter la recherche d’un stage."
        },
        {
          name: "Forum des entreprises",
          desc:
            "L’Astus participe à l’organisation du forum des entreprises du département Télécommunications. Cet événement permet aux étudiants de rencontrer et d'échanger avec des représentants de différentes entreprises pour commencer à réfléchir à des futurs stages."
        },
        {
          name: " Et encore d’autres évènements",
          desc:
            "L’Astus imagine et créé en partenariat avec des entreprises du monde des télécommunications  des évènements permettant aux étudiants de découvrir une  ou plusieurs thématiques et d’échanger avec des ingénieurs sur les différents aspects de leur métier."
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
  background-image: url("@/assets/images/carousel/afterwork.jpg");
  background-size: 100% auto;
  background-position-y: 50%;
}
.entire-sheet-1 {
  background-image: url("@/assets/images/carousel/interview.jpg");
  background-size: 100% auto;
  background-position-y: 75%;
}
.entire-sheet-2 {
  background-image: url("@/assets/images/carousel/forum.jpg");
  background-size: 100% auto;
  background-position-y: 50%;
}
.entire-sheet-3 {
  background-image: url("@/assets/images/carousel/company.jpg");
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
    background-image: url("@/assets/images/carousel/company.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
  .entire-sheet-1 {
    background-image: url("@/assets/images/carousel/afterwork.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
  .entire-sheet-2 {
    background-image: url("@/assets/images/carousel/interview.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
  .entire-sheet-3 {
    background-image: url("@/assets/images/carousel/forum.jpg");
    background-size: auto 100%;
    background-position-x: 50%;
  }
}
</style>
