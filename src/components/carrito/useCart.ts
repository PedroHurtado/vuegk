import { ref, computed, onMounted, onUnmounted } from 'vue';
import { type Pizza } from './PizzzaService';

export function useCart() {
    const pizzas = ref<Pizza[]>([]);
    
    const total = computed(() => pizzas.value.length);
    const totalPrice = computed(() => pizzas.value.reduce((acc, pizza) => acc + pizza.price, 0));

    const addPizza = (ev: Event) => {
        ev.stopPropagation();
        if (ev instanceof CustomEvent) {
            const pizza = ev.detail as Pizza;
            pizzas.value.push(pizza);
        }
    };

    onMounted(() => {
        document.addEventListener('carrito', addPizza);
    });

    onUnmounted(() => {
        document.removeEventListener('carrito', addPizza);
    });

    return {
        total,
        totalPrice,
    };
}
