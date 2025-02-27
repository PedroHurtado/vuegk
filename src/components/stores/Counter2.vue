<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { counterStore,   } from './conunterstore';

const store = counterStore(crypto.randomUUID());
const { count,product } = storeToRefs(store);
const { increment } = store;

</script>
<template>
    <h2>Counter 2</h2>
    <div>
        <p>Counter2: {{ count }}</p>
        <p>Product2: {{ product }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>