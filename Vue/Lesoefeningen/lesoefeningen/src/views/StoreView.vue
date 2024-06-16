<template>
  <div>
    <h1>Store View</h1>
    <input v-model="nieuwGetal" type="number" placeholder="Enter a number">
    <button @click="ButtonClick">Voeg getal aan reeks toe</button>
    <ul>
      <li v-for="getal in getallenReeks" :key="getal">{{ getal }}</li>
    </ul>
  </div>
</template>

<script>
import { useGetallenReeksStore } from '../stores/index.js';

export default {
  name: "StoreView",
  data() {
    return {
      nieuwGetal: ''
    };
  },
  computed: {
    getallenReeks() {
      const store = useGetallenReeksStore();
      return store.getallenReeks;
    }
  },
  methods: {
    ButtonClick() {
      const store = useGetallenReeksStore();
      if (this.nieuwGetal !== '') {
        store.addGetallenReeks(parseInt(this.nieuwGetal));
        this.nieuwGetal = '';
      }
    }
  }
};
</script>

<style scoped>
div {
  padding: 20px;
}
input {
  margin-right: 10px;
}
</style>
