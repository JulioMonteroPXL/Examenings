<template>
  <div>
    <img alt="Vue logo" src="../assets/logo_KBVB.png" class="logo">
    <hr>
    <div class="favorites-count">
      <p>{{ favoriteCount }} favoriete spelers geselecteerd</p>
    </div>
    <div class="player-cards-container">
      <PlayerCard
          v-for="player in players"
          :key="player.id"
          :player="player"
          @update-favorite="updateFavorite"
      />
    </div>
  </div>
</template>

<script>
import PlayerCard from '@/components/PlayerCard.vue';

export default {
  data() {
    return {
      players: [
        {
          id: 0,
          speler: "Thibaut Courtois",
          geboortedatum: "11/05/1992",
          club: "Real Madrid",
          afbeelding: "courtois.png"
        },
        {
          id: 1,
          speler: "Toby Alderweireld",
          geboortedatum: "02/03/1989",
          club: "Al-Duhail SC",
          afbeelding: "alderweireld.png"
        },
        {
          id: 2,
          speler: "Christian Benteke",
          geboortedatum: "03/09/1990",
          club: "Crystal Palace",
          afbeelding: "benteke.png"
        },
        {
          id: 3,
          speler: "Yannick Carrasco",
          geboortedatum: "04/09/1993",
          club: "Atlético Madrid",
          afbeelding: "carrasco.png"
        },
        {
          id: 4,
          speler: "Kevin Debruyne",
          geboortedatum: "28/06/1991",
          club: "Manchester City",
          afbeelding: "debruyne.png"
        },
        {id: 5, speler: "Jason Denayer", geboortedatum: "28/06/1995", club: "Olympic Lyon", afbeelding: "denayer.png"},
        {id: 6, speler: "Eden Hazard", geboortedatum: "07/01/1991", club: "Real Madrid", afbeelding: "hazard.png"},
        {id: 7, speler: "Romelu Lukaku", geboortedatum: "13/05/1993", club: "Chelsea FC", afbeelding: "lukaku.png"},
        {id: 8, speler: "Dries Mertens", geboortedatum: "06/05/1987", club: "SSC Napoli", afbeelding: "mertens.png"},
        {
          id: 9,
          speler: "Thomas Meunier",
          geboortedatum: "12/09/1991",
          club: "Borussia Dortmund",
          afbeelding: "meunier.png"
        },
        {
          id: 10,
          speler: "Youri Tielemans",
          geboortedatum: "07/05/1997",
          club: "Leicester City",
          afbeelding: "tielemans.png"
        },
        {
          id: 11,
          speler: "Leandro Trossard",
          geboortedatum: "04/12/1994",
          club: "Brighton & Hove Albionver",
          afbeelding: "trossard.png"
        },
        {
          id: 12,
          speler: "Jan Verthongen",
          geboortedatum: "24/04/1987",
          club: "SL Benfica",
          afbeelding: "verthongen.png"
        },
        {
          id: 13,
          speler: "Axel Witsel",
          geboortedatum: "12/01/1989",
          club: "Borussia Dortmund",
          afbeelding: "witsel.png"
        }
      ],
      favorites: []
    };
  },
  name: "Playercards",
  components: {
    PlayerCard
  },
  computed: {
    favoriteCount() {
      return this.favorites.length;
    }
  },
  methods : {
    updateFavorite(id, isFavorite) {
      if (isFavorite){
        this.favorites.push(id);
      } else {
        this.favorites = this.favorites.filter(favoriteId => favoriteId !== id);
      }
    }
  }

}
</script>


<style scoped>
.logo {
  display: block;
  margin: 0 auto;
}
.favorites-count {
  text-align: center;
  margin: 20px 0;
}
.player-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
