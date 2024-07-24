<template>
    <div>
        <TcEntrepriseBanner />
        <TcEntrepriseOrange />
        <TcEntrepriseNetsf />
        <TcEntrepriseWavestone  />
    </div>
</template>

<script>
import TcEntrepriseNetsf from '../components/TC/TcEntrepriseNetsf.vue';
import TcEntrepriseWavestone from '../components/TC/TcEntrepriseWavestone.vue';

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
    TcEntrepriseNetsf: () => import("@/components/TC/TcEntrepriseNetsf"),
    TcEntrepriseWavestone: () => import("@/components/TC/TcEntrepriseWavestone")
  }
};