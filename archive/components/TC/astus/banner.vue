<template>
  <div class="bg-astus">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="ui-title font-weight-bold">L'ASTUS ?</h2>
            <p style="color: black">
              Il s'agit de l'Association des élèves du département. Nous avons 2
              missions : organiser la vie extra-scolaire des élèves ainsi que de
              maintenir un contact privilégié avec les entreprises partenaires.
              Ces deux missions donnent lieu à différents évènements tout le
              long de l'année.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "TcAstusText",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.bg-astus {
  background-color: #a5beff !important;
  padding-top: 75px;
  padding-bottom: 30px;
}
</style>
