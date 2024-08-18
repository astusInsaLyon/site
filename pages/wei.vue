<template>
  <div>
    <TcWeiText />
    <TcWeiIntroduction />
    <TcTestimonial />
    <TcWeiFeatures />
  </div>
</template>

<script>
export default {
  components: {
    TcWeiText: () => import("@/components/TC/wei/banner"),
    TcWeiIntroduction: () => import("@/components/TC/wei/introduction"),
    TcTestimonial: () => import("@/components/TC/wei/avis"),
    TcWeiFeatures: () => import("@/components/TC/wei/musthave")
  }
};
</script>

<style scoped>
.easter-egg {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 991px) {
  .easter-egg {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 7px;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
