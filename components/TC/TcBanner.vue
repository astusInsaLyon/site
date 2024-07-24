<template>
  <div>
    <div class="bannerTC-component">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left">
              <v-chip class="bg-dark" text-color="white">
                Rentrée 2024
              </v-chip>
              <h2
                class="
                  bannerTC-title
                  font-weight-bold
                  text-uppercase
                  white--text
                "
              >
                bienvenue en telecommunications
              </h2>
              <p class="white--text op-8 font-weight-regular">
                Que vous sortiez fraîchement du FIMI ou bien que vous veniez
                d'une autre école vous venez d'entamer une des plus belles
                formations de France. Comment va se passer l'année ? Comment va
                se passer l'intégration ? <br />
                <em>Toutes ces questions trouveront réponses ici !</em>
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="5">
            <v-img
              :src="require('@/assets/images/banner/banner1.jpg')"
              alt="banner"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "TcBanner",
  data() {
    return {};
  },
  methods: {}
};
</script>
