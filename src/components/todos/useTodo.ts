// useTodo.ts
import { ref, onMounted } from 'vue';
import { todosStore, type Todo } from './todosStore';
import { useAction, type FetchOptions } from '@/services/useAction';
export function useTodo(todoId?: string) {
    const { getTodo, addTodo, toggleTodo, removeTodo, updateTodo } = todosStore();
    const dialog = ref();
    const todo = ref<Todo>();
    const description = ref('');

    const openDialog = () => {
        dialog.value?.open();
    };

    onMounted(() => {
        if (todoId) {
            todo.value = getTodo(todoId);
            if (todo.value) {
                description.value = todo.value.description;
            }
        }
        openDialog();
        
    });

    const addNewTodo = async () => {
        if (description.value) {
            const todo:Todo = {
                id: crypto.randomUUID(),
                description: description.value,
                completed: false
            }
            const url = 'http://localhost:3000/todos'
            const request:FetchOptions={
                method: 'POST',                
                body: JSON.stringify(todo),
                headers: {
                    'Content-Type': 'application/json',                   
                  }
            }
            await useAction(url,request)
            addTodo(todo);
        }
    };

    const toggleTodoStatus = () => {
        if (todoId) {            
            const todo:Todo = getTodo(todoId)
            if(todo){
                toggleTodo(todoId);
            }
            
        }
    };

    const removeExistingTodo = () => {
        if (todoId) {
            removeTodo(todoId);
        }
    };

    const updateExistingTodo = () => {
        if (todoId && description.value) {
            updateTodo(todoId, description.value);
        }
    };

    return {
        dialog,
        todo,
        description,
        addNewTodo,
        toggleTodoStatus,
        removeExistingTodo,
        updateExistingTodo,
    };
}
