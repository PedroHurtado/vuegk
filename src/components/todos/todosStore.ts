import { defineStore } from "pinia";
import { ref } from "vue";

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export const todosStore = defineStore("todos",()=>{
    const todos = ref<Todo[]>([]);
    const addTodo = (todo: Todo) => {
        todos.value.push(todo);
    }
    const init = (todosData: Todo[] |null) => {
        if(todosData)
        {
            todos.value = todosData;
        }        
    }

    const removeTodo = (id: string) => {
        todos.value = todos.value.filter((todo) => todo.id !== id);
    }
    const updateTodo = (id: string, description: string) => {
        const todo = todos.value.find((todo) => todo.id === id);
        if (todo) {
            todo.description = description;
        }
    }
    const toggleTodo = (id: string) => {
        const todo = todos.value.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
    const getTodos = () => {
        return todos.value;
    }
    const getTodo = (id: string) => {
        return todos.value.find((todo) => todo.id === id);
    }
    return {addTodo,removeTodo,getTodo,getTodos,toggleTodo, updateTodo, init}
});