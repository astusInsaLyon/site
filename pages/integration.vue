<template>
  <div>
    <TcInteBanner />
    <TcBlog />

    <div style="margin-inline: 1vw" class="bg-tc">
      <v-row class="mt-13 custom-space" justify="center">
        <v-col v-for="(item, i) in items" :key="i" cols="12" md="6" lg="6">
          <div class="position-relative mb-15">
            <component :is="item.name"></component>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: "Intégration"
    };
  },

  data() {
    return {
      items: [
        { name: "TcInteAday" },
        { name: "TcInteRallye" },
        { name: "TcIntePaint" },
        { name: "TcInteBeforeSoiree" },
        { name: "TcInteCoincoin" },
        { name: "TcInteInterdepart" },
        { name: "TcInteOlympiade" }
      ]
    };
  },
  components: {
    TcBlog: () => import("@/components/TC/integration/planning"),
    TcInteBanner: () => import("@/components/TC/integration/banner"),
    TcInteCoincoin: () => import("@/components/TC/integration/daybyday/coincoin"),
    TcIntePaint: () => import("@/components/TC/integration/daybyday/paintball"),
    TcInteBeforeSoiree: () => import("@/components/TC/integration/daybyday/humas"),
    TcInteRallye: () => import("@/components/TC/integration/daybyday/rallye"),
    TcInteAday: () => import("@/components/TC/integration/daybyday/aday"),
    TcInteInterdepart: () =>
      import("@/components/TC/integration/daybyday/interdepart"),
    TcInteOlympiade: () => import("@/components/TC/integration/daybyday/olympiade"),
    TcInteParrainage: () =>
      import("@/components/TC/integration/daybyday/parrainage")
  }
};
</script>

<style>
.custom-space {
  margin-inline: 1vw !important;
}

@media (max-width: 991px) {
  .custom-space {
    margin-inline: 0.5vw !important;
  }
}
</style>
