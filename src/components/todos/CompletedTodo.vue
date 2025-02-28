<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Dialog from '../slots/Dialog.vue';
import { todosStore, type Todo } from './todosStore';
const {todoId} = defineProps({
    todoId: {
        type: String,
        required: true
    }
})

const {getTodo,toggleTodo} = todosStore()
const dialog = ref()
const todo = ref<Todo>();

onMounted(()=>{   
    if(todoId){
        todo.value = getTodo(todoId)
        dialog.value?.open()    
    }    
})

const confirm = ()=>{
    toggleTodo(todoId)
}

</script>
<template>
    <Dialog ref="dialog" @confirm="confirm">
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