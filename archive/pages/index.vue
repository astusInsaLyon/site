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
    TcBanner: () => import("@/components/TC/accueil/banner"),
    TcFeature: () => import("@/components/TC/accueil/details"),
    TcEvent: () => import("@/components/TC/accueil/discover")
  }
};
</script>
