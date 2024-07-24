<template>
    <div>
        <TcEntrepriseBanner />
        <TcEntrepriseOrange />
        <TcEntrepriseNetsf />
    </div>
</template>

<script>
import TcEntrepriseNetsf from '../components/TC/TcEntrepriseNetsf.vue';

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
    TcEntrepriseOrange: () => import("@/components/TC/TcEntrepriseOrange"),
    TcEntrepriseNetsf: () => import("@/components/TC/TcEntrepriseNetsf")
  }
};