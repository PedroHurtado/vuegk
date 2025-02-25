<script setup lang="ts">
    import {RouterLink} from 'vue-router'
</script>
<template>
    <div class="menu">
        <RouterLink to="/">Página1</RouterLink>
        <RouterLink to="/page2">Página2</RouterLink>
        <RouterLink to="/page3">Página3</RouterLink>
    </div>    
</template>
<style lang="css" scoped>
    .menu {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;        
    }
</style>