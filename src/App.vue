<script setup lang="ts">
import { reactive } from 'vue';
import List from './components/carrito/List.vue';
import Carrito from './components/carrito/Carrito.vue';
import { PubSub } from './services/pubsub';
import { type Pizza } from './components/carrito/PizzzaService'
import Input from './components/input/Input.vue';
import { useInput } from './components/input/useInput';
import { provide } from 'vue';
const pubsub = new PubSub<Pizza>()

const phone = reactive(useInput());

provide('carrito', pubsub)

</script>

<template>  
    <Input v-model="phone.value" label="Teléfono" id="phone" />
    {{ phone.value }}
    <Carrito/>    
    <List/>    
</template>

