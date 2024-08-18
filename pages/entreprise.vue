<template>
  <div>
    <TcEntrepriseBanner />
    <TcEnterpriseEvents />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: "Entreprise",
    };
  },

  data() {
    return {};
  },
  components: {
    TcEntrepriseBanner: () => import("@/components/TC/entreprise/banner"),
    TcEnterpriseEvents: () => import("@/components/TC/entreprise/carousel")
  }
};
</script>