<template>
  <div>
    <div class="team-component mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Le Bureau de l'ASTUS
              </h2>
              <p>
                Description du bureau 
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-13" justify="center">
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="2"
            v-for="(item, i) in members"
            :key="i"
          >
            <v-card elevation="0" class="team-card overflow-hidden mb-15">
              <div class="social-overlay">
                <v-img
                  class="profile-pic"
                  :src="getImgUrl(item.profil_pic)"
                  alt="team"
                />
                <div class="img-overlay">
                  <ul>
                    <li>
                      <a :href="item.facebook" target="_blank">
                        <i class="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a :href="item.insta" target="_blank">
                        <i class="mdi mdi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 class="team-title font-weight-medium font-18">
                  {{ item.name }}
                </h5>
                <p class="team-subtitle">{{ item.role }}</p>
              </div>
              <p>
                {{ item.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-row justify="center" class="bg-extra-light">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2 class="section-title font-weight-medium">
              Mais ce n'est pas tout !
            </h2>
            <p class="astus-description">
              Que serait l'Astus sans son équipe ? Événements, Entreprise,
              Communication sans eux l'association ne pourrait absolument pas
              tourner ! Vous aurez la joie de les découvrir à travers les
              différents événements organisés par les équipes tout le long de
              l'année.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "TcTeam",
  data() {
    return {
      members: [
        {
          name: "Maxime Herry",
          profil_pic: "max",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Président",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Jean Peaurroy",
          profil_pic: "jean",
          facebook: "https://www.facebook.com/jean.peaurroy",
          insta: "https://instagram.com/jean_prry",
          role: "Vice Président",
          description:
            "Il avait vraiment envie d'être vice président (non)"
        },
        {
          name: "Mouahid Balle",
          profil_pic: "mouahid",
          facebook: "https://mobile.facebook.com/profile.php?id=100054673613972",
          insta: "https://instagram.com/zuck",
          role: "Resp event",
          description:
            "Aime particulièrement appeler les compagnies de bus"
        },
        {
          name: "Hugo Collier",
          profil_pic: "hugo",
          facebook: "https://mobile.facebook.com/profile.php?id=100055035902962",
          insta: "https://instagram.com/hugo_cer22",
          role: "Secrétaire Général",
          description:
            "A les mêmes fonctions que Staline et en est très fier"
        },
        {
          name: "Augustin Mons",
          profil_pic: "augustin",
          facebook: "https://mobile.facebook.com/profile.php?id=100025335888016",
          insta: "https://instagram.com/augustin.mons",
          role: "Trésorière",
          description:
            "Garde la carte de l'astus précieusement, trop précieusement"
        }
      ]
    };
  },
  methods: {
    getImgUrl(name) {
      var images = require.context("@/assets/images/team/", false, /\.png$/);
      return images("./" + name + ".png");
    }
  }
};
</script>

<style scoped>
.astus-description {
  font-size: 1.2em;
}
</style>
