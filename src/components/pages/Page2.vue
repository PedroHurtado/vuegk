<script setup lang="ts">
    import {  useRoute } from 'vue-router'
    const route = useRoute()
    
</script>
<template>
    <div>
        <div>Página3</div>
        <div>Parâmetros: {{route.params}}</div>
    </div>
</template>