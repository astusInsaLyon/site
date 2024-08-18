<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="9" lg="12">
      <ul class="gallery">
        <li v-for="n in 8" :key="n">
          <img
            :class="'image-' + (n % 2)"
            :src="require('@/assets/images/gallery/' + n + '.jpg')"
          />
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PhotoGallery",
  methods: {
    getRandomStyle(n) {
      if (n == 0) {
        return "margin-left : " + Math.random() * 60 + "%";
      } else {
        return "margin-right : " + Math.random() * 60 + "%";
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
img {
  max-width: 45vw;
}

@media (max-width: 991px) {
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
