<script setup lang="ts">
import Dialog from '../slots/Dialog.vue';

import { defineProps } from 'vue';
import { useTodo } from './useTodo';

const { todoId } = defineProps({
    todoId: {
        type: String,
        required: true
    }
});

const { dialog, todo, toggleTodoStatus } = useTodo(todoId);


</script>
<template>
    <Dialog ref="dialog" @confirm="toggleTodoStatus">
        <div class="content">
            <h2>Completar Todo</h2>
            <p>{{todo?.description}}</p>
        </div>
    </Dialog>
</template>
<style scoped>
    .content{
        width: 90%;
        margin: auto;
    }
</style>