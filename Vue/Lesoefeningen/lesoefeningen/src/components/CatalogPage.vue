<template>
<div class="container">
  <h1>PRODUCTCATALOG OVERVIEW</h1>
  <table>
    <thead>
    <tr>
      <th>Omschrijving</th>
      <th>Prijs</th>
      <th>Aantal</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in catalogus" :key="item.id">
      <td>{{item.omschrijving}}</td>
      <td>{{item.prijs}}</td>
      <td>
        <button @click="setItem(item, -1)"> - </button>
        {{item.aantal}}
        <button @click="setItem(item, 1)"> + </button>
      </td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "CatalogPage",
  components: {},
  data() {
    return{
      catalogus: [
        { id: 1, omschrijving: "Melk", prijs: 1, aantal: 0 },
        { id: 2, omschrijving: "tandpasta", prijs: 2, aantal: 0 },
        { id: 3, omschrijving: "boter", prijs: 1, aantal: 0 },
        { id: 4, omschrijving: "Honing", prijs: 1, aantal: 0 },
        { id: 5, omschrijving: "Yoghurt", prijs: 5.23, aantal: 0 },
        { id: 6, omschrijving: "Pasta", prijs: 2, aantal: 0 }
      ]
    };
  },
  methods: {
    setItem(item, amount){
      const index = this.catalogus.findIndex(i => i.id === item.id);
      if (index !== -1) {
        const newAmount = this.catalogus[index].aantal + amount;
        this.catalogus[index].aantal = newAmount < 0 ? 0 : newAmount;
        this.emitUpdatedItem(this.catalogus[index]);
      }
    },
    emitUpdatedItem(item) {
      const newObject = {
        id: item.id,
        omschrijving: item.omschrijving,
        prijs: item.prijs,
        aantal: item.aantal,
      };
      this.$emit('ontvangItem', newObject);
    }
  }
}
</script>

<style scoped>
.container{
  background-color: #ff7043;
  color: white;
  padding: 30px;
  border-radius: 8px;
  color: white;
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,td {
  border: 1px solid gray;
  padding: 8px;
  text-align: left;
}

th{
  background-color: #333;
  color: white;
}

td{
  background-color: #fff;
  color: #333;
}

button {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #555;
}
</style>