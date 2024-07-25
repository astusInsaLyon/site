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
                  class="profile-pic fixed-size"
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
          name: "Antoine Bois--Berlioz",
          profil_pic: "antoine2",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Président",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Mathias Schraen",
          profil_pic: "mathias",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Vice-Président",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Tristan Verdet",
          profil_pic: "tristan",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Trésorier",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Thomas Raynaud",
          profil_pic: "thomas",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Secrétaire Général",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Thibaud Lambert",
          profil_pic: "thibaud",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Secrétaire Adjoint",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Nina Rodriguez",
          profil_pic: "nina",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Responsable Évenements",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Antonin Guy",
          profil_pic: "antonin",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Responsable Communication",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Marie Friot",
          profil_pic: "marie",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Responsable Entreprise",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Théo Archaud",
          profil_pic: "theo",
          facebook: "https://mobile.facebook.com/maxime.herry.92",
          insta: "https://instagram.com/mxm_73_",
          role: "Responsable Développement Durable",
          description:
            "Objectivement la seule personne compétente de l'astus"
        }
      ]
    };
  },
  methods: {
    getImgUrl(name) {
      var images = require.context("@/assets/images/team/", false, /\.jpg$/);
      return images("./" + name + ".jpg");
    }
  }
};
</script>

<style scoped>
.fixed-size {
  width: 200px; /* Ajustez la largeur selon vos besoins */
  height: 200px; /* Ajustez la hauteur selon vos besoins */
  object-fit: cover; /* Assure que l'image couvre toute la zone sans déformer */
}
.astus-description {
  font-size: 1.2em;
}

@media (max-width: 991px) {
  .fixed-size {
    width: 100%; /* Ajustez la largeur selon vos besoins */
    height: 450px; /* Ajustez la hauteur selon vos besoins */
    object-fit: cover; /* Assure que l'image couvre toute la zone sans déformer */
  }
  
}
</style>
