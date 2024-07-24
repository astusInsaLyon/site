<template>
  <div id="TcRallye">
    <div class="mini-spacer bg-extra-light col-tc">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="test">Mardi <span> 17 </span></div>
            <div class="text-center">
              <h2 class="ui-title font-weight-bold" style="color: #9366ce">
                Rallye
              </h2>
              <p>
                Premier objectif : ne pas se perdre dans Lyon. Deuxième objectif : réussir plus de défis que les autres équipes.
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
  name: "TcRallye",
  data: () => ({
    items: [
      {
        title: "Midi",
        content:
          "Remplissez-vous le bide car vous aurez bien besoin de forces",
        icon: "mdi-hamburger"
      },
      {
        title: "Après-midi",
        content: "Rdv en début d'aprèm pour la composition des équipes, puis on part directement après pour Lyon",
        icon: "mdi-map-check-outline"
      },
      {
        title: "Soirée",
        content:
          "Remplissez-vous le bide car vous aurez bien besoin de forces",
        icon: "mdi-hamburger"
      }
    ]
  }),
  methods: {}
};
</script>
