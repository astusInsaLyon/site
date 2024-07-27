<template>
  <div class="header">
    <v-app-bar app absolute id="header" class="app-header" flat fixed>
      <v-container class="py-0 fill-height">
        <Logo />
        <h1 class="banner-title">ASTUS</h1>
        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass">
          <v-app-bar-nav-icon class="navicon" />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          :class="{ 'd-block': isActive }"
          @click="toggleClass"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> Accueil </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="astus"> Présentation Astus </n-link>
            </li>
            <li class="nav-item" text>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="nav-item"
                    v-bind="attrs"
                    v-on="on"
                    text
                    :style="{ opacity }"
                  >
                    Intégration
                  </v-btn>
                </template>
                <v-list class="dropdown-list" :style="{ backgroundColor }">
                  <v-list-item
                  :to="item.path"
                  v-for="item in items"
                  :key="item.path"
                  class="dropdown-list-item"
                  @click="toggleClass"

                >
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="entreprise">Entreprise</n-link>
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: "Header",
  components: {
    Logo: () => import("@/layouts/sections/Logo"),
  },
  data() {
    return {
      items: [
        { title: "Planning", path: "/integration" },
        { title: "WEI", path: "/wei" },
      ],
      isActive: false,
      backgroundColor: "#FFD4AE",
      opacity: 0.5,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 767;
    },
    navigationClass() {
      return { 'd-block': this.isActive };
    }
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
    handleResize: debounce(function () {
      this.windowWidth = window.innerWidth;
      this.updateBackgroundColor();
    }, 100),
    updateBackgroundColor() {
      const route = this.$route.path;
      if (route === '/wei') {
        this.backgroundColor = this.isMobile ? "#FFFFFF" : "#C3E08D";
        this.opacity = 1;
      } else if (route === '/') {
        this.backgroundColor = this.isMobile ? "#FFFFFF" : "#FFD4AE";
        this.opacity = 0.5;
      } else if (route === '/astus') {
        this.backgroundColor = this.isMobile ? "#FFFFFF" : "#77B5FE";
        this.opacity = 0.5;
      } else if (route === '/integration') {
        this.backgroundColor = this.isMobile ? "#FFFFFF" : "#C0AFE2";
        this.opacity = 1;
      } else if (route === '/entreprise') {
        this.backgroundColor = this.isMobile ? "#FFFFFF" : "#FFA500";
        this.opacity = 0.5;
      }
    }
  },
  watch: {
    '$route.path': 'updateBackgroundColor',
    isMobile() {
      this.updateBackgroundColor();
    }
  },
  mounted() {
    this.updateBackgroundColor();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>

.navicon {
  color: #32517e !important;
}
</style>
