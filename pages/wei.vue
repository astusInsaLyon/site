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
    TcWeiText: () => import("@/components/TC/TcWeiText"),
    TcWeiIntroduction: () => import("@/components/TC/TcWeiIntroduction"),
    TcTestimonial: () => import("@/components/TC/TcTestimonial"),
    TcWeiFeatures: () => import("@/components/TC/TcWeiFeatures")
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
