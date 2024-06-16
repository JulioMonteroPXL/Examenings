import { defineStore } from 'pinia';

export const useCatsStore = defineStore('cats', {
    state: () => ({
        cats: [
            { id: 1, name: 'Abyssinian', price: 180, imgPath: 'abyssinian.jpg' },
            { id: 2, name: 'Maine Coon', price: 800, imgPath: 'maine-coon.jpg' },
            { id: 3, name: 'Ragdoll', price: 300, imgPath: 'ragdoll.jpg' },
            { id: 4, name: 'British Shorthair', price: 1200, imgPath: 'british-shorthair.jpg' },
        ],
        adoptedCatsCount: 0,
        lastAdoptedCat: null,
    }),
    getters: {
        averagePrice: (state) => {
            const total = state.cats.reduce((sum, cat) => sum + cat.price, 0);
            return (total / state.cats.length).toFixed(2);
        },
    },
    actions: {
        adoptCat(catId) {
            const catIndex = this.cats.findIndex(cat => cat.id === catId);
            if (catIndex !== -1) {
                this.lastAdoptedCat = this.cats[catIndex].name;
                this.cats.splice(catIndex, 1);
                this.adoptedCatsCount++;
            }
        },
    },
});
