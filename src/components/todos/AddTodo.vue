<script setup lang="ts">
import Dialog from '../slots/Dialog.vue';

import { useTodo } from './useTodo';
const { dialog, description, addNewTodo } = useTodo();


</script>
<template>
    <Dialog ref="dialog" @confirm="addNewTodo">
        <div class="content">
            <h2>Crear todo</h2>
            <div class="control">
                <label for="description">Introduzca la description</label>
                <input type="text" id="description" v-model="description">
            </div>
        </div>
    </Dialog>
</template>
<style scoped>
.content{
    width: 90%;
    margin: auto;
}
.control {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem
}
</style>