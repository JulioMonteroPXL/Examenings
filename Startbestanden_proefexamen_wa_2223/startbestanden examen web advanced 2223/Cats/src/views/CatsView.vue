<!-- CatsView.vue -->
<template>
  <div>
    <h1 v-if="adoptedCatsCount > 0">
      There {{ adoptedCatsCount === 1 ? 'was' : 'were' }} {{ adoptedCatsCount }} cat{{ adoptedCatsCount === 1 ? '' : 's' }} adopted
      and {{ lastAdoptedCat }} was the {{ adoptedCatsCount === 1 ? 'lucky' : 'last' }} kitty adopted.
    </h1>
    <CatsList :title="`Een gemiddelde kat kost €${averagePrice}`" @adopt="handleAdopt" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCatsStore } from '../stores/cats';
import CatsList from '../components/CatsList.vue';

export default {
  name: 'CatsView',
  components: {
    CatsList,
  },
  setup() {
    const catsStore = useCatsStore();

    const averagePrice = computed(() => catsStore.averagePrice);
    const adoptedCatsCount = computed(() => catsStore.adoptedCatsCount);
    const lastAdoptedCat = computed(() => catsStore.lastAdoptedCat);

    const handleAdopt = (catId) => {
      catsStore.adoptCat(catId);
    };

    return {
      averagePrice,
      adoptedCatsCount,
      lastAdoptedCat,
      handleAdopt,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>

