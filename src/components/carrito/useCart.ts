import { ref, computed, onMounted, onUnmounted, inject } from 'vue';

import { PubSub } from '@/services/pubsub';
import { type Pizza } from './PizzzaService';
type dispose = () => void 

export function useCart() {
    const pizzas = ref<Pizza[]>([]);
    const pubsub = inject<PubSub<Pizza>>('carrito');
    let dispose:dispose|undefined;
    
    const total = computed(() => pizzas.value.length);
    const totalPrice = computed(() => pizzas.value.reduce((acc, pizza) => acc + pizza.price, 0));
    
    /*const addPizza = (ev: Event) => {
        ev.stopPropagation();
        if (ev instanceof CustomEvent) {
            const pizza = ev.detail as Pizza;
            pizzas.value.push(pizza);
        }
    };*/

    const addPizza = (pizza:Pizza) => {        
        pizzas.value.push(pizza);        
    };

    onMounted(() => {
        if(pubsub){
            dispose = pubsub.on('carrito', addPizza);
        }
        
        //document.addEventListener('carrito', addPizza);
    });

    onUnmounted(() => {
        if (dispose) {
            dispose();
        }
        //document.removeEventListener('carrito', addPizza);
    });

    return {
        total,
        totalPrice,
    };
}
