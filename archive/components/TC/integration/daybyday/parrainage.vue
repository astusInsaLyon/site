<template>
  <div id="TcParrainage">
    <div class="mini-spacer bg-extra-light col-tc">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="test">Vendredi <span> 15 </span></div>
            <div class="text-center">
              <h2 class="ui-title font-weight-bold" style="color: #9366ce">
                Journée parrainage
              </h2>
              <p>
                Journée pour apprendre à connaître vos parrains/marraines et
                leur poser toutes les questions que vous voulez.
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
  name: "TcParrainage",
  data: () => ({
    items: [
      {
        title: "Aprem",
        content:
          "Coincoin général: ca commence à se la mettre à 16h environ",
        icon: "mdi-baseball"
      },
      {
        title: "Soir",
        content: "Petite bouffe avec tout le départ",
        icon: "mdi-food"
      }
    ]
  }),
  methods: {}
};
</script>

<style></style>
