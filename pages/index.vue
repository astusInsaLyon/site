<template>
  <div>
    <TcBanner />
    <TcFeature />
    <TcEvent />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: "Accueil"
    };
  },

  data() {
    return {};
  },
  components: {
    TcBanner: () => import("@/components/TC/TcBanner"),
    TcFeature: () => import("@/components/TC/TcFeature"),
    TcEvent: () => import("@/components/TC/TcEvent")
  }
};
</script>
