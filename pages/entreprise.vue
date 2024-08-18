<template>
  <div>
    <TcEntrepriseBanner />
    <TcEnterpriseEvents />
  </div>
</template>

<script>
export default {
  components: {
    TcEntrepriseBanner: () => import("@/components/TC/entreprise/banner"),
    TcEnterpriseEvents: () => import("@/components/TC/entreprise/carousel")
  }
};
</script>