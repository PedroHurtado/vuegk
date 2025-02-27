import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const counterStore = (id: string) =>
    defineStore(`counter-${id}`, () => {
        const count = ref(0);
        const product = computed(()=> count.value * count.value);
        const increment = () => {
            count.value++;
        };
        return { count,product, increment };
    })();
