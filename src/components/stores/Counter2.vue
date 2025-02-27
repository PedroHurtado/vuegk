<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { counterStore,   } from './conunterstore';
const store = counterStore('2')
const { count } = storeToRefs(store);
const { increment } = store;
</script>
<template>
    <h2>Counter 2</h2>
    <div>
        <p>Counter2: {{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>