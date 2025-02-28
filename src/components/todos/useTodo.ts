// useTodo.ts
import { ref, onMounted } from 'vue';
import { todosStore, type Todo } from './todosStore';

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

    const addNewTodo = () => {
        if (description.value) {
            addTodo({
                id: crypto.randomUUID(),
                description: description.value,
                completed: false
            });
        }
    };

    const toggleTodoStatus = () => {
        if (todoId) {
            toggleTodo(todoId);
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
