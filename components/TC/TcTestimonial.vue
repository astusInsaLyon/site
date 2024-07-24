<template>
  <div>
    <div class="testimonial-component bg-extra-light">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Ils l'ont fait
              </h2>
              <p>
                Ces témoignages poignants pourront sûrement vous motiver à
                participer à cette incroyable aventure humaine.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4" v-for="(item, i) in items" :key="i">
            <v-card class="testimonial-card card-shadow">
              <v-card-text>
                <p class="font-weight-light mb-15 text-justify">“{{ item.desc }}”</p>
                <div class="bottom-bar d-flex align-center">
                  <img
                    :src="getImgUrl(item.image)"
                    alt="Testimonial"
                    class="testimonial-img rounded-circle"
                  />
                  <div class="ml-10">
                    <h6 class="text-uppercase font-weight-medium font-14">
                      {{ item.name }}
                    </h6>
                    <div class="d-flex align-center font-13">
                      <a
                        href="/"
                        class="error--text"
                        v-for="n in item.rating"
                        :key="n"
                      >
                        <i class="mdi mdi-star"></i
                      ></a>
                      <a
                        href="/"
                        class="grey--text"
                        v-for="n in 5 - item.rating"
                        :key="n"
                      >
                        <i class="mdi mdi-star"></i
                      ></a>
                    </div>
                  </div>
                </div>
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
  name: "Testimonial",
  data() {
    return {
      items: [
        {
          name: "Nicolas Guy",
          image: "nguy",
          desc:
            "C'était vraiment fou. J'ai profité à fond de ce week-end " +
            "alors que je n'y étais même pas ! Je n'imagine même pas ce que " +
            "ça aurait donné si j'étais venu !",
          rating: 5
        },
        {
          name: "Tristan Devin",
          image: "tristan",
          desc:
            "Je vous assure que pour le coin-coin j'étais juste fatigué et " +
            "c'est pour ça que je me suis couché à 23h tous le soirs",
          rating: 4
        },
        {
          name: "Constantin Thebaudeau",
          image: "constantin",
          desc: "J'étais Président et j'étais malade.",
          rating: 1
        }
      ]
    };
  },
  methods: {
    getImgUrl(name) {
      var images = require.context(
        "@/assets/images/testimonial/",
        false,
        /\.jpg$/
      );
      return images("./" + name + ".jpg");
    }
  }
};
</script>
