<script setup lang="ts">
import { ref, computed } from 'vue';

import AddTodo from './AddTodo.vue';
import RemoveTodo from './RemoveTodo.vue'
import UpdateTodo from './UpdateTodo.vue';
import CompletedTodo from './CompletedTodo.vue';

import { todosStore } from './todosStore';

const { getTodos } = todosStore();

const todos = computed(() => getTodos());
const hasTodos = computed(() => todos.value.length > 0);
const componentName = ref('');
const componentKey = ref(0);
const todoId = ref('');

const handlerAction = (ev: Event) => {
  const node = (ev.composedPath() as HTMLElement[]).find(
    (n) => n.dataset && 'action' in n.dataset
  );
  if (node) {
    const { action, id } = node.dataset;
    if (action) {
      todoId.value = '';
      componentName.value = action;
      componentKey.value += 1;
      if (id) {
        todoId.value = id
      }
    }
  }
};

const components = [
  { action: 'add', component: AddTodo },
  { action: 'remove', component: RemoveTodo },
  { action: 'edit', component: UpdateTodo },
  { action: 'complete', component: CompletedTodo },
];

const getComponent = () => {
  return components.find(
    c => c.action === componentName.value
  )?.component || null;
};


</script>

<template>
  <div @click="handlerAction">
    <div class="header">
      <button data-action="add" class="add-btn">Añadir</button>
    </div>

    <ul v-if="hasTodos">
      <li class="todo" v-for="todo in todos" :key="todo.id">
        <p>{{ todo.description }}</p>
        <button data-action="complete" :data-id="todo.id">
          {{ todo.completed ? 'Activar' : 'Completar' }}
        </button>
        <button data-action="edit" :data-id="todo.id">Editar</button>
        <button data-action="remove" :data-id="todo.id">Eliminar</button>
      </li>
    </ul>

    <p v-else class="empty-message">No hay todos</p>

    <component v-if="componentName" :is="getComponent()" :key="componentKey" :todoId="todoId" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.add-btn {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #0056b3;
}

.empty-message {
  text-align: center;
  font-size: 18px;
  color: #888;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.todo {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 15px;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border-radius: 5px;
}

.todo p {
  margin: 0;
  grid-column: 1;
}

.todo .buttons {
  grid-column: 2 / span 2;
  display: flex;
  justify-content: space-between;
}

.todo button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: white;
}

.todo button:nth-of-type(1) {
  background-color: #4CAF50;
}

.todo button:nth-of-type(2) {
  background-color: #4CAF50;
}

.todo button:nth-of-type(3) {
  background-color: #f44336;
}

.todo button:hover {
  opacity: 0.8;
}
</style>
