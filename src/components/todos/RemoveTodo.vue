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

const { dialog, todo, removeExistingTodo } = useTodo(todoId);

const confirm = () => {
    removeExistingTodo();
};

</script>
<template>
    <Dialog ref="dialog" @confirm="confirm">
        <div class="content">
            <h2>Eliminar Todo</h2>
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