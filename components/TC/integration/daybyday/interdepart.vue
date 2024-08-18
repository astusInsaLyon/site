<template>
  <div id="TcInterdepart">
    <div class="mini-spacer bg-extra-light col-tc">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="test">Samedi<span> 21</span></div>
            <div class="text-center">
              <h2 class="ui-title font-weight-bold" style="color: #9366ce">
                Interdepart
              </h2>
              <p>
                Organisé en plein centre des humas vous pourrez découvrir les
                autres départs. Il y aura à manger et plein d'activités. (On a
                pas encore les horaires donc on se base sur ceux de l'année
                dernière)
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="timeline-tc">
      <v-timeline class="antoine">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :icon="item.icon"
          color="#ff660098"
        >
          <v-card color="rgba(128, 58, 219, 0.9)">
            <v-card-title class="text-h5 custom-title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white text--primary py-6">
              {{ item.content }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<script>
export default {
  name: "TcInterdepart",
  data: () => ({
    items: [
      {
        title: "Ouverture",
        content: "Vers 10h, vous pouvez aller jouer les petits bizs",
        icon: "mdi-check"
      },
      {
        title: "Midi",
        content: "On sait pas trop, c'est l'EDB qui gère",
        icon: "mdi-food"
      },
      {
        title: "Fermeture",
        content: "Vers 18h fin des activités",
        icon: "mdi-close-thick"
      }
    ]
  }),
  methods: {}
};
</script>

<style>
.antoine .custom-title {
  color: white;
}

/** Pour les téléphones
@media (max-width: 991px) {
  .antoine {
    width: 95vw;
    margin: 2.5vw;
  }
  .antoine .custom-text {
    font-size: 0.8em;
    line-height: 1em;
    padding-top: 5px;
  }
  .antoine .custom-title {
    font-size: 0.8em !important;
    color: white;
  }
}
*/
</style>
