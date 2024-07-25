<template>
    <div class="bg-extra-light box-entreprise">
      <v-container>
        <v-row class="mb-5" justify="center">
          <v-col cols="12" sm="10" md="9" lg="4">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Forum ouvert avec Orange</h2>
              <p class="texte-orange">
                Le 5 juin 2024 s’est tenu un forum ouvert dans le département avec 15 
                expert(e)s d’Orange travaillant dans différents domaines. Cybersécurité, 
                IoT, cloud, management et intervention, consulting, intégration et avant-vente, 
                les étudiants ont pu échanger sur ces sujets avec plusieurs ingénieurs autour de 
                différents stands. L’échange fut très enrichissant et a permis à de nombreux étudiants
                 de découvrir ou d’éclaircir plusieurs domaines d'expertise !
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="10" md="9" lg="4">
            <div class="text-center border">
              <h2 class="ui-title font-weight-bold">Business game avec Netsf</h2>
              <p class="texte-orange">
                Le 5 juin 2024 s’est tenu un forum ouvert dans le département avec 15 
                expert(e)s d’Orange travaillant dans différents domaines. Cybersécurité, 
                IoT, cloud, management et intervention, consulting, intégration et avant-vente, 
                les étudiants ont pu échanger sur ces sujets avec plusieurs ingénieurs autour de 
                différents stands. L’échange fut très enrichissant et a permis à de nombreux étudiants
                 de découvrir ou d’éclaircir plusieurs domaines d'expertise !
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="10" md="9" lg="4">
            <div class="text-center ">
              <h2 class="ui-title font-weight-bold">Conférence avec Wavestone</h2>
              <p class="texte-orange">
                Le 5 juin 2024 s’est tenu un forum ouvert dans le département avec 15 
                expert(e)s d’Orange travaillant dans différents domaines. Cybersécurité, 
                IoT, cloud, management et intervention, consulting, intégration et avant-vente, 
                les étudiants ont pu échanger sur ces sujets avec plusieurs ingénieurs autour de 
                différents stands. L’échange fut très enrichissant et a permis à de nombreux étudiants
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

  .box-entreprise {
    margin-inline: 0;
  }
  .texte-orange {
    font-size: large;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .border {
    border-right: 3px solid rgb(206, 206, 206);
    border-left: 3px solid rgb(206, 206, 206);
    padding-left: 20px;
    padding-right: 20px;
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
    .border {
      border-left: none;
      border-right: none;
      border-top: 3px solid rgb(206, 206, 206);
      border-bottom: 3px solid rgb(206, 206, 206);
      padding-top: 20px;
      padding-bottom: 20px;
    }
  
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
  