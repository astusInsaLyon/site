<template>
    <div>
        <TcEntrepriseBanner />
        <TcEntrepriseAll />
    </div>
</template>

<script>



export default {
  scrollToTop: true,
  head() {
    return {
      title: "Entreprise"
    };
  },

  data() {
    return {};
  },  
  
  components: {
    TcEntrepriseBanner: () => import("@/components/TC/entreprise/banner"),
    TcEntrepriseAll: () => import("@/components/TC/entreprise/carousel"),
  }
};