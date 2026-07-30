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

export default {
  scrollToTop: true,
  head() {
    return {
      title: "L'ASTUS",
    };
  },

  data() {
    return {};
  },
  components: {
    TcTeam: () => import("@/components/TC/astus/bureau"),
    TcAstusText: () => import("@/components/TC/astus/banner"),
    TcAstusEvents: () => import("@/components/TC/astus/details_event"),
    TcGallery: () => import("@/components/TC/astus/gallery"),
    TcAstusEntreprise: () => import("@/components/TC/astus/details_entreprise")
  }
};
</script>

<style></style>
