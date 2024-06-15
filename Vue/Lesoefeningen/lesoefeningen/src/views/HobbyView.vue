<template>
  <div class="container">
    <h1>{{ pagina_titel }}</h1>
    <p>Hier zijn enkele hobbies</p>
    <ul>
      <li v-for="(hobby, index) in hobbies" :key="hobby.id" @click="selectHobby(index)">
        {{ hobby.id }}: {{ hobby.naam }}
        <span class="club-info">{{ hobby.club }}</span>
      </li>
    </ul>
    <h3>Uitgebreide info</h3>
    <div v-if="selectedHobby" class="info-box">
      <p>{{ selectedHobby.id }} - {{ selectedHobby.naam }} - {{ selectedHobby.club }} - {{ selectedHobby.plaats }}</p>
      <p><img :src="getHobbyImagePath(selectedHobby.afbeelding)" alt="Hobby Afbeelding"></p>
    </div>


  <h3>Nieuwe hobby toevoegen</h3>
  <table>
    <tr>
      <td>id :</td>
      <td><input type="text" v-model="newId" v-bind:disabled="true"></td>
    </tr>
    <tr>
      <td>Naam :</td>
      <td><input type="text" v-model="newNaam"></td>
    </tr>
    <tr>
      <td>Club :</td>
      <td><input type="text" v-model="newClub"></td>
    </tr>
    <tr>
      <td>Plaats :</td>
      <td><input type="text" v-model="newPlaats"></td>
    </tr>
    <tr>
      <td>Afbeelding :</td>
      <td><input type="text" v-model="newAfbeelding"></td>
    </tr>
    <tr>
      <td></td>
      <td><button @click="addRecord">VOEG TOE</button></td>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
  name: "HobbyView",
  data() {
    return {
      pagina_titel: "Mijn hobbies",
      hobbies: [
        { id: 1, naam: "Voetbal", club: "RSCA", plaats: "1000 Brussel", afbeelding: "voetbal.png" },
        { id: 2, naam: "Golf", club: "Spiegelven Golf Club", plaats: "3600 Genk", afbeelding: "golf.png" },
        { id: 3, naam: "Darts", club: "Elfde Liniestraat 24", plaats: "3500 Hasselt", afbeelding: "darts.png" },
        { id: 4, naam: "Tennis", club: "LIMA Tennis & Padel", plaats: "3630 Eisden", afbeelding: "tennis.png" },
        { id: 5, naam: "Basketbal", club: "Club Maaseik VZW", plaats: "3680 Maaseik", afbeelding: "basketbal.png" },
        { id: 6, naam: "Volleybal", club: "Green Yard", plaats: "3500 Hasselt", afbeelding: "volleybal.png" }
      ],
      selectedHobbyIndex: null,
      zichtbaar: false,
      newId: 7,
      newNaam: '',
      newClub: '',
      newPlaats: '',
      newAfbeelding: ''
    };
  },
  methods: {
    selectHobby(index) {
      this.selectedHobbyIndex = index;
      this.zichtbaar = true;
    },
    getHobbyImagePath(filename) {
      return `../src/assets/${filename}`;
    },
    addRecord() {
      const newHobby = {
        id: this.newId,
        naam : this.newNaam,
        club: this.newClub,
        plaats: this.newPlaats,
        afbeelding: this.newAfbeelding,
      };
      this.hobbies.push(newHobby);
      this.newId++;
      this.newNaam = '';
      this.newClub = '';
      this.newPlaats = '';
      this.newAfbeelding = '';
    }
  },
  computed: {
    selectedHobby() {
      if (this.selectedHobbyIndex !== null) {
        return this.hobbies[this.selectedHobbyIndex];
      }
      return null;
    }
  }
};
</script>

<style>
.container{
  background-color: #ff7043;
  padding: 30px;
  border-radius: 10px;
  color: white;
}

h1 {
  font-size: 3em;
  color: #333;
}

ul{
  list-style-type: none;
  padding: 0;
  color: black;

}

li{
  background-color: white;
  margin: 5px 0;
  cursor: pointer;
  color: black;
}

.club-info{
  display: none;
  margin-left: 10px;
  color: black;
}

li:hover .club-info{
  display: inline;
}

.info-box {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: black;
}

table {
  width: 100%;
  margin-top: 20px;
  color: black;
}

input[type="text"]{
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
}

button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
}

button:hover {
  background-color: #555;
}

</style>