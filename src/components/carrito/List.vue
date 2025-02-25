<template>
    <div class="list" @click="handlerClick($event)">
        <div class="pizza" v-for="pizza in pizzas" :key="pizza.id" :data-id="pizza.id">
            <div>{{ pizza.name }}</div>
            <div>{{ pizza.price }}</div>
            <button>Añadir a carrito</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { type Pizza, ServicePizza } from './PizzzaService'
import { inject } from 'vue';
import { PubSub } from '@/services/pubsub';

const service = new ServicePizza()
const pizzas: Pizza[] = service.getAll()
const pubsub = inject<PubSub<Pizza>>('carrito');

function handlerClick(ev: Event) {
    const node = (ev.composedPath() as HTMLElement[]).find(n => n.dataset && 'id' in n.dataset)
    if (node) {
        const { id } = node.dataset
        if (id) {
            const pizza = service.getById(id)
            if (pizza && pubsub) {                
                pubsub.emit('carrito',pizza)  
                              
                //document.dispatchEvent(createEvent(pizza))
                
            }
        }
    }

}
function createEvent(pizza: Pizza) {
    return new CustomEvent<Pizza>('carrito', {
        bubbles: true,
        composed: true,
        detail: structuredClone(pizza)
    })
}


</script>