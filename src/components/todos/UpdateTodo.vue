<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Dialog from '../slots/Dialog.vue';
import { todosStore, type Todo } from './todosStore';
const { todoId } = defineProps({
    todoId: {
        type: String,
        required: true
    }
})
const { getTodo, updateTodo } = todosStore()

const dialog = ref()
const todo = ref<Todo>();
const description = ref('')

onMounted(() => {
    if(todoId){
        todo.value = getTodo(todoId)
        description.value = todo.value?.description || ''
        dialog.value?.open()
    }    
})

const confirm = () => {
    if(description.value){
        updateTodo(todoId,description.value)
    }
}

</script>
<template>
    <Dialog ref="dialog" @confirm="confirm">
        <div class="content">
            <h2>Modificar Todo</h2>
            <div class="control">
                <label for="description">Introduzca la description</label>
                <input type="text" id="description" v-model="description">
            </div>
        </div>
    </Dialog>
</template>
<style scoped>
.content {
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