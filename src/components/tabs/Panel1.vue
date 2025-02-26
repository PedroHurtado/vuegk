<script setup lang="ts">
import { ref } from 'vue';
const value = ref('')
</script>
<template>
    Panel1
    <input v-model="value">
</template>