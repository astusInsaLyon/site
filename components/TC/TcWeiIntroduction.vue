<template>
  <div class="box-wei">
    <v-row justify="center" align="stretch">
      <v-col cols="12" sm="10" md="9" lg="4" align-self="center">
        <v-img
          class="image-wei"
          :src="getImgUrl('tence_large')"
        ></v-img>
       <p align="center"><em>Photo contractuelle</em></p>
      </v-col>
      <v-col cols="12" sm="10" md="9" lg="8">
        <div class="text-wei">
          <p style="color: black" class="text-justify">
            En TC, nous avons la chance de faire un WEI de 3 jours : on part le jeudi après-midi et on rentre le samedi. 
            Ça nous laisse le temps de nous reposer et de profiter du week-end à fond. <br /><br />
            <ul>
              <li style="margin-bottom: 10px;">
                Jeudi 26 septembre : départ à <strong>14 heures</strong> depuis l'INSA. Ensuite, un trajet de 2-3 heures pour atteindre le camping. 
                À l'arrivée, on vide le bus, on s'installe dans les bungalows, on se remplit le ventre, puis c'est la première soirée du week-end. 
                Le camping sera entièrement privatisé pour nous ce week-end, avec une salle de soirée disponible !
              </li>
              <li style="margin-bottom: 10px;">
                Vendredi 27 septembre : de la structure gonflable aux terrains de sport classiques, plusieurs possibilités d'activités 
                sont prévues pour cette journée complète au camping. Telles que la baignade, des olympiades, des jeux sportifs, 
                des activités chill, et bien sûr, la sieste. Voici quelques-unes des installations disponibles : ventreglisse, 
                ping-pong, babyfoot humain (rien que ça), terrain multi-sport, sumos, salle de jeu, ... Puis, deuxième soirée tous ensemble !
              </li>
              <li>
                Samedi 28 septembre : journée de rangement 🥲 Oui on sait, c'est triste mais bon il faut bien revenir à un moment.
                Du coup, on range tout et on nettoie pour reprendre le bus en début d'après-midi pour un retour samedi soir.
              </li>
            </ul>
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "TcAstusText",
  data() {
    return {};
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("@/assets/images/weipage/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
  },
};
</script>

<style scoped>
.box-wei {
  padding-block: 20px;
  margin-inline: 15vw;
}
.image-wei {
  border-radius: 4px;
  height: 50vh;
}
.text-wei {
  background-color: rgba(150, 150, 150, 0.1);
  padding: 0.5vw;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgb(189, 189, 189);
  height: 50vh;
  overflow-y: auto;
}
@media (max-width: 991px) {
  .box-wei {
    padding-block: 20px;
    margin-inline: 10vw;
  }
  .image-wei {
    border-radius: 4px;
    height: 35vh;
    width: auto;
  }
  .text-wei {
    background-color: rgba(150, 150, 150, 0.1);
    padding: 2vw;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgb(189, 189, 189);
    height: auto;
    overflow-y: none;
  }
}
.text-justify {
  text-align: justify;
}
</style>
