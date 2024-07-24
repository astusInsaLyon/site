<template>
  <div id="TcPaint">
    <div class="mini-spacer bg-extra-light col-tc">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="test">Mercredi <span> 18 </span></div>
            <div class="text-center">
              <h2 class="ui-title font-weight-bold" style="color: #9366ce">
                Paintball TC/IF
              </h2>
              <p>
                Au programme, deux parties gratuites de paintball contre les IF, puis quelques lancers de haches entre deux ravitaillements au barbecue.
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
  name: "TcPaint",
  data: () => ({
    items: [
      {
        title: "Départ des bus",
        content:
          "Soit à 9h30 soit à 11h en fonction de votre groupe",
        icon: "mdi-bus"
      },
      {
        title: "Midi",
        content: "Barbecue après l'effort",
        icon: "mdi-food"
      },
      {
        title: "Rentrée des bus ",
        content: "Comme à l'aller deux horaires soit 14h00h soit 16h00",
        icon: "mdi-bus-side"
      }
    ]
  }),
  methods: {}
};
</script>

<style></style>
