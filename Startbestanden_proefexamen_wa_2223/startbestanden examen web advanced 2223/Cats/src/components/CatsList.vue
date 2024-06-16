<!-- CatsList.vue -->
<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-for="cat in cats" :key="cat.id" :class="['cat-item', { 'expensive-cat': cat.price > 500 }]">
      <img :src="getCatImage(cat.imgPath)" :alt="cat.name" />
      <div class="cat-info">
        <p>{{ cat.name }}</p>
        <p>{{ cat.price }} EUR</p>
        <button @click="adoptCat(cat.id)">Adopt me!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCatsStore } from '../stores/cats';

export default {
  name: 'CatsList',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(_, { emit }) {
    const catsStore = useCatsStore();

    const adoptCat = (catId) => {
      emit('adopt', catId);
    };

    const getCatImage = (imgPath) => {
      return new URL(`../assets/${imgPath}`, import.meta.url).href;
    };

    return {
      cats: catsStore.cats,
      adoptCat,
      getCatImage,
    };
  },
};
</script>

<style scoped>
.cat-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.cat-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
}

.cat-info {
  flex: 1;
}

.cat-info p {
  margin: 0.2rem 0;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.expensive-cat {
  background-color: lightcoral;
  border: 2px solid red;
}
</style>
