<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { counterStore,   } from './conunterstore';

const store = counterStore(crypto.randomUUID());
store.$subscribe((_,state)=>{    
    localStorage.setItem('counter2',JSON.stringify(state));
})
const { increment,reset } = store;
const { count,countSquared } = storeToRefs(store);




</script>
<template>
    <h2>Counter 2</h2>
    <div>
        <p>Counter2: {{ count }}</p>
        <p>Cuadrado2: {{ countSquared }}</p>
        <button @click="increment">Increment</button>
        <button @click="reset">Reset</button>
    </div>
</template>