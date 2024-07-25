<template>
  <div id="TcBeforeSoiree">
    <div class="mini-spacer bg-extra-light col-tc">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="test">Jeudi <span> 19 </span></div>
            <div class="text-center">
              <h2 class="ui-title font-weight-bold" style="color: #9366ce">
                Soirée Humas
              </h2>
              <p>
              Petit before pour mieux se connaitre puis on enchaîne sur une soirée aux Humas avec les autres départs !
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
  name: "TcBeforeSoiree",
  data: () => ({
    items: [
      {
        title: "Après-midi",
        content: "Before et jeux pour mieux se connaître",
        icon: "mdi-football"
      },
      {
        title: "Soir",
        content: "Pizza à 2 euros (oui 2 euros)",
        icon: "mdi-pizza"
      },
      {
        title: "Soirée",
        content: "Soirée sur la pelouse des Humanités",
        icon: "mdi-party-popper"
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
