<script setup lang="ts">
import { ref } from 'vue';
const value = ref('')
fetch('http://localhost:5173/')
</script>
<template>
    Panel1
    <input v-model="value">
</template>