<template>
  <div id="TcAday">
    <div class="mini-spacer bg-extra-light col-tc">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="test">Lundi <span> 16 </span></div>
            <div class="text-center">
              <h2 class="ui-title font-weight-bold" style="color: #9366ce">
                Découverte et ADay
              </h2>
              <p>
                Visite du département suivie d'une petite visite du campus pour les admis directs, mais tout le monde est le bienvenu !
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
  name: "TcAday",
  data: () => ({
    items: [
      {
        title: "Matin",
        content: "Juste venez pas, dormez, vous en aurez besoin",
        icon: "mdi-sleep"
      },
      {
        title: "Midi",
        content: "Petite bouffe pour une première rencontre avec tout le monde",
        icon: "mdi-food"
      },
      {
        title: "Après-midi ",
        content: "Visite du département et de l'astus avant de faire un tour du campus",
        icon: "mdi-map-check-outline"
      },
      {
        title: "Soirée",
        content: "Soirée chill ou un peu moins pour certains",
        icon: "mdi-map-check-outline"
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
  height: 70px;
  width: 100px;
}
.test span {
  display: block;
  font-size: 30px;
  line-height: 30px;
}
</style>
