<script setup lang="ts">

import List from './components/carrito/List.vue';
import Carrito from './components/carrito/Carrito.vue';
import { PubSub } from './services/pubsub';
import { type Pizza } from './components/carrito/PizzzaService'
import { provide } from 'vue';
const pubsub = new PubSub<Pizza>()

provide('carrito', pubsub)

</script>

<template>    
    <Carrito/>    
    <List/>    
</template>