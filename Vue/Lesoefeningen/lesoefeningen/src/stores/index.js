import { defineStore } from 'pinia';

export const useGetallenReeksStore = defineStore('getallenReeks', {
    state: () => ({
        getallenReeks: [0, 1, 1, 2, 3]
    }),
    actions: {
        addGetallenReeks(getal) {
            this.getallenReeks.push(getal);
        }
    }
});
