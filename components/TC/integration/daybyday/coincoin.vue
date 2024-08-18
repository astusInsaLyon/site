<template>
  <div id="TcCoincoin">
    <div class="mini-spacer bg-extra-light col-tc">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="test">Vendredi <span> 20 </span></div>
            <div class="text-center">
              <h2 class="ui-title font-weight-bold" style="color: #9366ce">
                Journée Coin-Coin
              </h2>
              <p>
                Une après-midi avec vos magnifiques marraines/parrains, suivie d'un superbe tournoi de Coin-Coin inter-départements pour montrer à tout le monde qui sont les meilleurs !
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
  name: "TcCoincoin",
  data: () => ({
    items: [
      {
        title: "Début d'après-midi",
        content: "Moment priviligié avec vos marraines / parrains",
        icon: "mdi-glass-mug-variant"
      },
      {
        title: "Fin d'après-midi",
        content: "Tournoi de Coin-Coin inter-départ",
        icon: "mdi-glass-mug-variant"
      },
      {
        title: "Soir",
        content: "Bouffe au départ avant de repartir au charbon pour les plus vaillants",
        icon: "mdi-glass-mug-variant"
      }
    ]
  }),
  methods: {}
};
</script>

<style>
.col-tc {
  border-radius: 10px;
}

.test {
  padding: 10px;
  display: inline-block;
  position: absolute;
  right: 15px;
  top: 15px;
  color: white;
  border-radius: 8px;
  text-align: center;
  background: #ff660098;
}
.test span {
  display: block;
  font-size: 30px;
  line-height: 30px;
}
</style>
