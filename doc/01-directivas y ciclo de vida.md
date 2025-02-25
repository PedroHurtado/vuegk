## v-bind
Se usa para **enlazar atributos** de HTML a valores de Vue.

### Ejemplo:
```vue
<template>
  <img v-bind:src="imagenURL" alt="Imagen dinámica" />
</template>

<script setup>
import { ref } from 'vue';

const imagenURL = ref('https://via.placeholder.com/150');
</script>
```
🔹 También puedes usar su **versión corta**: `:src="imagenURL"`

---

## v-model
Se usa para crear **enlace bidireccional** entre una variable y un `input`, `textarea`, `select`, etc.

### Ejemplo:
```vue
<template>
  <input v-model="mensaje" placeholder="Escribe algo..." />
  <p>Mensaje: {{ mensaje }}</p>
</template>

<script setup>
import { ref } from 'vue';

const mensaje = ref('');
</script>
```

✅ Cualquier cambio en el `input` se reflejará en la variable `mensaje` y viceversa.

---

## v-for
Se usa para **iterar listas** y renderizar elementos dinámicamente.

### Ejemplo:
```vue
<template>
  <ul>
    <li v-for="(fruta, index) in frutas" :key="index">
      {{ index + 1 }}. {{ fruta }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const frutas = ref(['Manzana', 'Banana', 'Naranja']);
</script>
```
📌 **Nota**: Siempre se recomienda usar `:key` para mejorar el rendimiento.

---

## v-if, v-else-if y v-else
Se usan para **mostrar u ocultar elementos** en función de una condición.

### Ejemplo:
```vue
<template>
  <p v-if="estado === 'cargando'">Cargando...</p>
  <p v-else-if="estado === 'exito'">¡Carga exitosa! 🎉</p>
  <p v-else>Ocurrió un error 😢</p>

  <button @click="cambiarEstado">Cambiar Estado</button>
</template>

<script setup>
import { ref } from 'vue';

const estado = ref('cargando');

const cambiarEstado = () => {
  estado.value = estado.value === 'cargando' ? 'exito' : 'error';
};
</script>
```
🔹 También puedes usar `v-show`, pero este solo oculta el elemento (`display: none`) en lugar de eliminarlo del DOM.

---

## Ciclo de vida de Vue Component

### Fases del Ciclo de Vida en Vue 3
Los hooks del ciclo de vida se dividen en tres fases principales:

### 🔹 1. Creación (Mounting)
El componente se **crea**, se inicializan los datos (`data`, `props`, `setup`), pero aún no está en el DOM.

- **`setup()`**: Se ejecuta antes de que el componente esté montado.
- **`onBeforeMount()`**: Se ejecuta antes de insertar el componente en el DOM.
- **`onMounted()`**: Se ejecuta cuando el componente ya está en el DOM.

### Ejemplo:
```vue
<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';

const mensaje = ref('');

onBeforeMount(() => {
  console.log('El componente está a punto de montarse.');
});

onMounted(() => {
  mensaje.value = 'Componente montado!';
  console.log('El componente ha sido montado.');
});
</script>

<template>
  <p>{{ mensaje }}</p>
</template>
```

---

### 🔹 2. Actualización (Updating)
Se ejecuta cuando cambian las **propiedades (`props`) o el estado (`ref`, `reactive`)**.

- **`onBeforeUpdate()`**: Se ejecuta antes de que el DOM se actualice.
- **`onUpdated()`**: Se ejecuta después de actualizarse el DOM.

### Ejemplo:
```vue
<script setup>
import { ref, onBeforeUpdate, onUpdated } from 'vue';

const contador = ref(0);

onBeforeUpdate(() => {
  console.log('El DOM está a punto de actualizarse.');
});

onUpdated(() => {
  console.log('El DOM ha sido actualizado.');
});
</script>

<template>
  <p>Contador: {{ contador }}</p>
  <button @click="contador++">Incrementar</button>
</template>
```

---

### 🔹 3. Destrucción (Unmounting)
Se ejecuta cuando el componente **se elimina del DOM**.

- **`onBeforeUnmount()`**: Se ejecuta antes de desmontar el componente.
- **`onUnmounted()`**: Se ejecuta cuando el componente se ha eliminado completamente.

### Ejemplo:
```vue
<script setup>
import { ref, onBeforeUnmount, onUnmounted } from 'vue';

const mostrar = ref(true);

onBeforeUnmount(() => {
  console.log('El componente está a punto de desmontarse.');
});

onUnmounted(() => {
  console.log('El componente ha sido desmontado.');
});
</script>

<template>
  <button @click="mostrar = false">Eliminar Componente</button>
  <p v-if="mostrar">Este componente se desmontará al hacer clic en el botón.</p>
</template>
```

---

## Resumen rápido 📌

| Hook | Cuándo se ejecuta |
|------|------------------|
| `onBeforeMount` | Antes de que el componente se monte. |
| `onMounted` | Cuando el componente ya está en el DOM. |
| `onBeforeUpdate` | Antes de que Vue actualice el DOM. |
| `onUpdated` | Cuando Vue ha actualizado el DOM. |
| `onBeforeUnmount` | Antes de desmontar el componente. |
| `onUnmounted` | Después de desmontar el componente. |

