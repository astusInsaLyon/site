<template>
  <div>
    <div class="portfolio-component bg-extra-light">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                La vie en TC
              </h2>
              <p>
                Vous pouvez consulter les différentes sections de la vie dans
                votre département pour vous préparer à tous les événements qui
                vont arriver dans l'année !
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4" v-for="(item, i) in items" :key="i">
            <v-card class="portfolio-card overflow-hidden">
              <nuxt-link :to="item.to" class="text-decoration-none">
                <div class="portfolio-img">
                  <img
                    :src="getImgUrl(item.src)"
                    class="img-fluid"
                    alt="portfolio"
                  />
                </div>
                <v-card-text>
                  <h5 class="font-weight-medium font-18">
                    {{ item.name }}
                  </h5>
                  <p class="font-14 mb-0 description">{{ item.desc }}</p>
                </v-card-text></nuxt-link
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "TcEvent",
  data() {
    return {
      items: [
        {
          name: "L'ASTUS",
          src: "LogoAstus",
          desc: "Présentation de l'Association",
          to: "astus"
        },
        {
          name: "L'intégration",
          src: "integration",
          desc: "Le programme de la semaine d'inté",
          to: "integration"
        },
        {
          name: "WEI",
          src: "wei",
          desc: "Infos pratiques sur le week-end d'intégration",
          to: "wei"
        }
      ]
    };
  },
  methods: {
    getImgUrl(name) {
      var images = require.context(
        "@/assets/images/portfolio/",
        false,
        /\.jpg$/
      );
      return images("./" + name + ".jpg");
    }
  }
};
</script>

<style scoped></style>
