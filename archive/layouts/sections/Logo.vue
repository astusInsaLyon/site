<template>
  <div class="logo">
    <NLink to="/">
      <v-img :src="require('@/assets/images/logos/LogoAstus.png')" alt="logo" />
    </NLink>
  </div>
</template>

<script>
export default {
  name: "Logo",

  data() {
    return {};
  }
};
</script>

<style lang="scss">
.logo a {
  display: flex;
}
.logo {
  margin-right: 1vw;
}
</style>
