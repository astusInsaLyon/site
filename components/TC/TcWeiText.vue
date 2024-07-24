<template>
  <div class="bg-wei">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="ui-title font-weight-bold">
              Week-End d'Intégration / WEI
            </h2>
            <p style="color: black">
              Cette année, le week-end d'intégration aura lieu du <strong>jeudi 26 au
              samedi 28 septembre 2024 </strong>. Nous allons détailler le déroulement sur
              cette page et les points importants pour passer un super week-end.
              N'oubliez pas de consulter la
              <a href="#notForgot">liste des choses à ne pas oublier</a> en bas
              de la page !
              Les dates d'inscriptions vous seront communiquées ultérieurement.
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
.bg-wei {
  background-color: #c3e08daf !important;
  padding-top: 75px;
  padding-bottom: 30px;
}
.important {
  color: red;
  font-weight: bolder;
}
</style>
