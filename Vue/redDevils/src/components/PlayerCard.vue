<template>
  <div class="player-card">
    <img :src="playerImage" alt="Player image">
    <h3>{{ player.speler }}</h3>
    <p>{{ player.geboortedatum }}</p>
    <p>{{ player.club }}</p>
    <div class="favorite-checkbox">
      <input type="checkbox" v-model="isFavorite" @change="toggleFavorite">
      <label> {{ isFavorite ? 'true' : 'false' }} </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: {
    player: Object
  },
  data() {
    return {
      isFavorite: false
    };
  },
  computed: {
    playerImage() {
      return new URL(`../assets/${this.player.afbeelding}`, import.meta.url).href;
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('update-favorite', this.player.id, this.isFavorite);
    }
  }
}
</script>

<style scoped>
.player-card {
  width: 180px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.player-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.player-card h3 {
  font-size: 1.2em;
  margin: 10px 0;
}
.player-card p {
  margin: 5px 0;
}
.favorite-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.favorite-checkbox input {
  margin-right: 5px;
}
</style>
