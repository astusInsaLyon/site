<template>
  <div>
    <div class="blog-component mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">LES EVENTS</h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-13" justify="center">
          <v-col v-for="(item, i) in items" :key="i" cols="12" md="6" lg="3">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-15">
                <nuxt-link :to="item.link">
                  <v-img
                    :src="getImgUrl(item.image)"
                    alt="blog"
                    class="blog-img"
                    height=25vh
                  />
                </nuxt-link>
                <div class="date-badge bg-info-grediant-tc">
                  {{ item.day }} <span> {{ item.date }} </span>
                </div>
              </div>
              <div>
                <nuxt-link
                  :to="item.link"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                >
                  {{ item.title }}
                </nuxt-link>
                <p class="mt-10 mb-10 text-justify">
                  {{ item.content }}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "TcBlog",
  data() {
    return {
      items: [
        {
          day: "Lundi",
          date: "16",
          title: "Découverte et ADay",
          content: "Globalement une grande visite et l'occasion de tous se rencontrer !",
          image: "aday",
          link: "#TcAday"
        },
        {
          day: "Mardi",
          date: "17",
          title: "Rallye",
          content: "Réalisez plein de défis pour faire gagner ton équipe !",
          image: "rallye",
          link: "#TcRallye"
        },
        {
          day: "Mercredi",
          date: "18",
          title: "Paintball TC vs IF",
          content: "Objectif : s'éclater tout en les éclatant",
          image: "paintBall",
          link: "#TcPaint"
        },
        {
          day: "Jeudi",
          date: "19",
          title: "Soirée Humas",
          content: "Une super soirée sur la pelouse des Humanités qui réunira tous les départements !",
          image: "humas",
          link: "#TcBeforeSoiree"
        },
        {
          day: "Vendredi",
          date: "20",
          title: "Journée Coin-Coin",
          content: "Passez du temps avec vos marraines / parrains préf avant le légendaire tournoi de coicoin" ,
          image: "coincoin",
          link: "#TcCoincoin"
        },
        {
          day: "Samedi",
          date: "21",
          title: "Journée Interdepart",
          content: "Rencontrer les départs moins bien",
          image: "interdepart",
          link: "#TcInterdepart"
        },
        {
          day: "Dimanche",
          date: "22",
          title: "Olympiade",
          content: "Montrer aux autres départements qui sont les plus forts avant d'enchaîner sur un barbecue",
          image: "olympiade",
          link: "#TcOlympiade"
        },
        {
          day: "Jeudi à samedi",
          date: "26-28",
          title: "WEI",
          content: "Le meilleur moment de votre inté",
          image: "wei",
          link: "wei"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("@/assets/images/blog/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    }
  }
};
</script>
