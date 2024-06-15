<template>
<div class="order-container">
  <h3>AANGEKOCHTE ITEMS</h3>
  <table>
    <thead>
    <tr>
      <th>omschrijving</th>
      <th>prijs</th>
      <th>aantal</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in shoppingBasket" :key="item.id">
    <td>{{ item.omschrijving }}</td>
    <td>{{ item.prijs }}</td>
    <td>{{ item.aantal }}</td>
    </tr>
    </tbody>
  </table>
  <CatalogPage @ontvangItem="receiveItem"/>
</div>

</template>

<script>
import CatalogPage from "../components/CatalogPage.vue";
export default {
  name: "OrderView",
  components: {
    CatalogPage
  },
  data() {
    return {
      shoppingBasket: []
    };
  },
  methods: {
    receiveItem(itemObject) {
      const existingItem = this.shoppingBasket.find(item => item.id === itemObject.id);
      if (existingItem) {
        existingItem.aantal = itemObject.aantal;
      }else {
        this.shoppingBasket.push({
          id: itemObject.id,
          omschrijving: itemObject.omschrijving,
          prijs: itemObject.prijs,
          aantal: itemObject.aantal,
        });
      }
      this.shoppingBasket = this.shoppingBasket.filter(item => item.aantal > 0)
    }
  }
};
</script>

<style>
.order-container {
  background-color: #ff7043;
  padding: 30px;
  border-radius: 10px;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #333;
  color: white;

}
td{
  background-color: #fff;
  color: #333;
}
</style>