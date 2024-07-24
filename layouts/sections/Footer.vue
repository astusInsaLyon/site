<template>
  <v-footer class="footer">
    <v-container>
      <v-row class="py-0 py-md-15">
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Adresse</h4>
          <p class="mt-10">
            6 Avenue des Arts <br />
            69100 Villeurbanne
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="3" class="contact px-xs-0">
          <h4 class="font-weight-regular font-18">Contact</h4>
          <p class="mt-10 mb-0">
            <a class="dark-link" href="mailto:tc.astus@listes.insa-lyon.fr"
              >tc.astus@listes.insa-lyon.fr</a
            >
            <a class="dark-link" href="mailto:astus.insalyon@gmail.com"
              >astus.insalyon@gmail.com</a
            >
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0"> </v-col>
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Réseaux sociaux</h4>

          <div class="social-icons mt-10">
            <a href="https://www.facebook.com/astus.insa/" target="_blank">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCLcRPICIyMb-8hB6lBuW85A/videos"
              target="_blank"
            >
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="https://www.instagram.com/astusinsa/" target="_blank">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex align-center">
          <p>
            Fait avec amour par Antoine Piron, Nicolas Guy et Pierre-louis Vidal
          </p>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      data: []
    };
  },
  components: {}
};
</script>
