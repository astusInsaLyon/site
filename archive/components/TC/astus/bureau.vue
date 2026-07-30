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
                  {{ item.firstName }}
                </h5>
                <h5 class="font-weight-medium font-18">
                  {{ item.lastName }}
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
                  {{ item.firstName }}
                </h5>
                <h5 class="font-weight-medium font-18">
                  {{ item.lastName }}
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
          firstName: "Paul",
          lastName: "Roche",
          profil_pic: "paul",
          facebook: "https://www.facebook.com/paulroche0",
          insta: "https://www.instagram.com/paulroche0/",
          role: "Président",
          description:
            "Dicte chaque mouvement de l’association comme un tyran"
        },
        {
          firstName: "Julien",
          lastName: "Brélivet",
          profil_pic: "julien",
          facebook: "https://www.facebook.com/julien.brlvt",
          insta: "https://www.instagram.com/julien.brlvt/",
          role: "Vice-Président",
          description:
            "Il avait vraiment envie d'être vice président (non)"
        },
        {
          firstName: "William",
          lastName: "Evangelista",
          profil_pic: "william",
          facebook: "https://www.facebook.com/el.omega.355",
          insta: "https://www.instagram.com/wllm.vnglst/",
          role: "Trésorier",
          description:
            "Garde la carte de l'astus précieusement, trop précieusement"
        },
        {
          firstName: "Louis",
          lastName: "Alaux",
          profil_pic: "louis",
          facebook: "https://www.facebook.com/LouisAlaux63",
          insta: "https://www.instagram.com/louis_.alx/",
          role: "Secrétaire Général",
          description:
            "Jamais sans sa moto en visio"
        },
        {
          firstName: "Enzo",
          lastName: "Riviere",
          profil_pic: "enzo",
          facebook: "https://www.facebook.com/profile.php?id=100085449556501",
          insta: "https://www.instagram.com/enzo.riviere01/",
          role: "Secrétaire Adjoint",
          description:
            "Emploi fictif"
        }
      ],
      responsable: [
        {
          firstName: "Rémi",
          lastName: "Duran",
          profil_pic: "remi",
          facebook: "https://www.facebook.com/furax.null",
          insta: "https://www.instagram.com/remi_boom_boom/",
          role: "Responsable Évenements",
          description:
            "Le maître du goofy (un peu trop d'ailleurs)"
        },
        {
          firstName: "Grégoire",
          lastName: "Blanzat",
          profil_pic: "greg",
          facebook: "https://www.facebook.com/profile.php?id=61565415607737",
          insta: "https://www.instagram.com/greg.blz/",
          role: "Responsable Com",
          description:
            "On peut compter sur lui pour dormir"
        },
        {
          firstName: "Paul",
          lastName: "Roche",
          profil_pic: "paul",
          facebook: "https://www.facebook.com/paulroche0",
          insta: "https://www.instagram.com/paulroche0/",
          role: "Responsable Entreprise",
          description:
            "Le cumule des mandats il ne connait pas"
        },
        {
          firstName: "Gwendal",
          lastName: "Vantourout",
          profil_pic: "gwendal",
          facebook: "https://www.facebook.com/gwendalvantourout",
          insta: "https://www.instagram.com/gwendal_van/",
          role: "Responsable DD",
          description:
            "Sait tellement bien trier qu'il n'a pas besoin d'affiche"
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
