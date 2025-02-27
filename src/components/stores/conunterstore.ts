import { defineStore } from "pinia";
import { ref } from "vue";

export const counterStore = (id: string) =>
    defineStore(`counter-${id}`, () => {
        const count = ref(0);
        const increment = () => {
            count.value++;
        };
        return { count, increment };
    })();
