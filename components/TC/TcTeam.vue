<template>
  <div>
    <div class="team-component mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Le Bureau
              </h2>
              <p>
                Le G5 de l'ASTUS
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
            v-for="(item, i) in bureau"
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

        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Les Responsables
              </h2>
              <p>
                Les seules personnes responsables de l'ASTUS
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
            v-for="(item, i) in responsable"
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
      bureau: [
        {
          name: "Antoine BBZ",
          profil_pic: "antoine",
          facebook: "https://www.facebook.com/profile.php?id=100072108245890",
          insta: "https://instagram.com/antoineboisberlioz",
          role: "Président",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Mathias Schraen",
          profil_pic: "mathias",
          facebook: "https://www.facebook.com/mathias.schraen",
          insta: "https://instagram.com/mattylecasiroux",
          role: "Vice-Président",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Tristan Verdet",
          profil_pic: "tristan",
          facebook: "https://www.facebook.com/profile.php?id=100072432049518",
          insta: "https://www.instagram.com/tristan.vrdt/",
          role: "Trésorier",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Thomas Raynaud",
          profil_pic: "thomas",
          facebook: "https://www.facebook.com/profile.php?id=61550755439039",
          insta: "https://www.instagram.com/thomas_r4y/",
          role: "Secrétaire Général",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Thibaud Lambert",
          profil_pic: "thibaud",
          facebook: "https://www.facebook.com/profile.php?id=100071759598194",
          insta: "https://instagram.com/thibaud.lbt",
          role: "Secrétaire Adjoint",
          description:
            "Objectivement la seule personne compétente de l'astus"
        }
      ],
      responsable: [
        {
          name: "Nina Rodriguez",
          profil_pic: "nina",
          facebook: "https://www.facebook.com/profile.php?id=100069113111468",
          insta: "https://www.instagram.com/nina11.06",
          role: "Responsable Évenements",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Antonin Guy",
          profil_pic: "antonin",
          facebook: "https://www.facebook.com/antoninguy11",
          insta: "https://www.instagram.com/antoskuu/",
          role: "Responsable Com",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Marie Friot",
          profil_pic: "marie",
          facebook: "https://www.facebook.com/profile.php?id=100069909120799",
          insta: "https://www.instagram.com/marie_frt8/",
          role: "Responsable Entreprise",
          description:
            "Objectivement la seule personne compétente de l'astus"
        },
        {
          name: "Théo Archaud",
          profil_pic: "theo",
          facebook: "https://www.facebook.com/theo.archaud",
          insta: "https://www.instagram.com/theoo_rchd/",
          role: "Responsable DD",
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
