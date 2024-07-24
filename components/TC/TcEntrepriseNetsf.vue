<template>
    <div class="bg-extra-light">
      <v-container>
        <v-row class="mb-5" justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold"></h2>
              <p class="test12">
                Le 5 juin 2024 s’est tenu un forum ouvert dans le département avec 15 
                expert(e)s d’Orange travaillant dans différents domaines. Cybersécurité, 
                IoT, cloud, management et intervention, consulting, intégration et avant-vente, 
                les étudiants ont pu échanger sur ces sujets avec plusieurs ingénieurs autour de 
                différents stands. L’échange fût très enrichissant et a permis à de nombreux étudiants
                 de découvrir ou d’éclaircir plusieurs domaines d'expertise !
              </p>
            </div>
          </v-col>
        </v-row>
        <v-carousel
          cycle
          interval="8000"
          v-model="model"
          class="custom-carousel"
          :show-arrows="false"
        >
          <v-carousel-item v-for="(item, i) in events" :key="i">
            <v-sheet :class="'entire-sheet-' + i" height="110%" tile>
              <v-row
                class="fill-height act-content"
                align="center"
                justify="center"
              >
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        model: 0,
        events: [
          {
            name: "photo 1",
          },
          {
            name: "photo2",
          },
          {
            name: "photo3",
          },
          {
            name: "photo4",
          },
          {
            name: "photo5",
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .test12 {
    font-size: large;
  }

  .custom-carousel {
    margin-bottom: 3%;
    box-shadow: 5px 5px 5px;
    width: 100%;
    height: 500px;
  }
  
  
  .linking {
    font-size: 30px; /* Augmenter la taille du texte */
    text-align: center; /* Centrer le texte horizontalement */
    width: 100%; /* Assurez-vous que le lien prend toute la largeur pour le centrage */
  }
  .act-content {
    margin-inline: 10%;
  }
  .entire-sheet-0 {
    background-image: url("@/assets/images/entreprisepage/orange1.jpg");
    background-size: 100% auto;
    background-position-y: 100%;
  }
  .entire-sheet-1 {
    background-image: url("@/assets/images/entreprisepage/orange2.jpg");
    background-size: 100% auto;
    background-position-y: 100%;
  }
  .entire-sheet-2 {
    background-image: url("@/assets/images/entreprisepage/orange3.jpg");
    background-size: 100% auto;
    background-position-y: 50%;
  }
  .entire-sheet-3 {
    background-image: url("@/assets/images/entreprisepage/orange4.jpg");
    background-size: 100% auto;
    background-position-y: 100%;
  }
  .entire-sheet-4 {
    background-image: url("@/assets/images/entreprisepage/orange5.jpg");
    background-size: 100% auto;
    background-position-y: 100%;
  }
  .text-bg {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 4px;
  }
  @media (max-width: 991px) {
    .entire-sheet-0 {
      background-image: url("@/assets/images/entreprisepage/orange1.jpg");
      background-size: auto 100%;
      background-position-x: 50%;
    }
    .entire-sheet-1 {
      background-image: url("@/assets/images/entreprisepage/orange2.jpg");
      background-size: auto 100%;
      background-position-x: 50%;
    }
    .entire-sheet-2 {
      background-image: url("@/assets/images/entreprisepage/orange3.jpg");
      background-size: auto 100%;
      background-position-x: 50%;
    }
    .entire-sheet-3 {
      background-image: url("@/assets/images/entreprisepage/orange4.jpg");
      background-size: auto 100%;
      background-position-x: 50%;
    }
    .entire-sheet-4 {
        background-image: url("@/assets/images/entreprisepage/orange5.jpg");
        background-size: auto 100%;
        background-position-x: 50%;
      }
  }
  </style>
  