<script setup lang="ts">
import { todosStore, type Todo } from './todosStore';
import { ref } from 'vue';
const { addTodo,getTodos } = todosStore();
const newTodo = ref<string>('');

const handleAddTodo = (description: string) => {
    addTodo({
        id: crypto.randomUUID(),
        description: description,
        completed: false,
    });
    newTodo.value = '';
};
</script>

<template>
    <ul>
        <li class="todo" v-for="todo in getTodos()" :key="todo.id">
            <p>{{todo.description }}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </li>
    </ul>
    <form @submit.prevent="handleAddTodo(newTodo)">
        <input type="text" v-model="newTodo" />
        <button type="submit">Enviar</button>
    </form>
</template>

<style scoped>
/* Estilo general de la lista */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

/* Estilo para cada elemento de la lista usando Grid */
.todo {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 15px;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border-radius: 5px;
}

/* Estilo para el texto de la descripción */
.todo p {
  grid-column: 1;
  margin: 0;
}

/* Estilo general para los botones */
.todo button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: white;
}

/* Estilo para el botón Editar */
.todo button:nth-of-type(1) {
  grid-column: 2;
  background-color: #4CAF50;
}

/* Estilo para el botón Eliminar */
.todo button:nth-of-type(2) {
  grid-column: 3;
  background-color: #f44336;
}

/* Efecto hover para los botones */
.todo button:hover {
  opacity: 0.8;
}
</style>