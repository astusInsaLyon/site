<template>
  <div>
    <TcAstusText />
    <TcAstusEvents />
    <TcAstusEntreprise />
    <TcTeam />
    <TcGallery />
  </div>
</template>

<script>
import TcAstusEntrepriseVue from '../components/TC/TcAstusEntreprise.vue';

export default {
  scrollToTop: true,
  head() {
    return {
      title: "ASTUS"
    };
  },

  data() {
    return {};
  },
  components: {
    TcTeam: () => import("@/components/TC/TcTeam"),
    TcAstusText: () => import("@/components/TC/TcAstusText"),
    TcAstusEvents: () => import("@/components/TC/TcAstusEvents"),
    TcGallery: () => import("@/components/TC/TcGallery"),
    TcAstusEntreprise: () => import("@/components/TC/TcAstusEntreprise")
  }
};
</script>

<style></style>
