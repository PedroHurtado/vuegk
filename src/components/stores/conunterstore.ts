import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const counterStore = (id: string) =>
    defineStore(`counter-${id}`, () => {
        const count = ref(0);
        const countSquared = computed(()=> count.value * count.value);
        const increment = () => {
            count.value++;
        };
        const reset =()=>{
            count.value = 0;
        }
        return { count,countSquared, increment,reset };
    })();
