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
    TcEntrepriseBanner: () => import("@/components/TC/TcEntrepriseBanner"),
    TcEntrepriseAll: () => import("@/components/TC/TcEntrepriseAll"),
  }
};