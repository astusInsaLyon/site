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
    TcBlog: () => import("@/components/TC/TcBlog"),
    TcInteBanner: () => import("@/components/TC/TcInteBanner"),
    TcInteCoincoin: () => import("@/components/TC/inteDetail/TcInteCoincoin"),
    TcIntePaint: () => import("@/components/TC/inteDetail/TcIntePaint"),
    TcInteBeforeSoiree: () => import("@/components/TC/inteDetail/TcInteBeforeSoiree"),
    TcInteRallye: () => import("@/components/TC/inteDetail/TcInteRallye"),
    TcInteAday: () => import("@/components/TC/inteDetail/TcInteAday"),
    TcInteInterdepart: () =>
      import("@/components/TC/inteDetail/TcInteInterdepart"),
    TcInteOlympiade: () => import("@/components/TC/inteDetail/TcInteOlympiade"),
    TcInteParrainage: () =>
      import("@/components/TC/inteDetail/TcInteParrainage")
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
