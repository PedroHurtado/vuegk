<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { counterStore   } from './conunterstore';

const store = counterStore(crypto.randomUUID());
const { count,countSquared } = storeToRefs(store);
const { increment } = store;

</script>
<template>
    <h2>Counter 1</h2>
    <div>
        <p>Counter1: {{ count }}</p>
        <p>Cuadrado1: {{ countSquared }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>