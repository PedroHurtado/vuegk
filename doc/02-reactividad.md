# Composition API en Vue 3

## Introducción
Composition API es un conjunto de funciones que permite organizar mejor la lógica de los componentes en Vue 3, proporcionando mayor reutilización y mantenimiento del código.

## `setup()` – Punto de entrada
El método `setup()` es la principal función en Composition API. Se ejecuta antes del ciclo de vida del componente y no tiene acceso a `this`.

```javascript
<script setup>
import { ref } from 'vue';

const mensaje = ref('Hola, Vue 3');
</script>

<template>
  <p>{{ mensaje }}</p>
</template>
```

## `reactive()` – Manejo de objetos reactivos
Permite crear objetos reactivos que se actualizan automáticamente en la UI.

```javascript
import { reactive } from 'vue';

const estado = reactive({ contador: 0 });

const incrementar = () => {
  estado.contador++;
};
```

## `computed()` – Propiedades derivadas
Crea propiedades que se recalculan automáticamente cuando cambian sus dependencias.

```javascript
import { ref, computed } from 'vue';

const precio = ref(100);
const impuesto = ref(0.21);

const precioFinal = computed(() => precio.value * (1 + impuesto.value));
```

## `watch()` – Observadores de cambios
Permite ejecutar una función cuando un valor reactivo cambia.

```javascript
import { ref, watch } from 'vue';

const nombre = ref('Pedro');

watch(nombre, (nuevo, viejo) => {
  console.log(`Nombre cambiado de ${viejo} a ${nuevo}`);
});

nombre.value = 'Juan';
```

## `provide()` y `inject()` – Comunicación entre componentes
Se utilizan para compartir datos entre componentes sin necesidad de `props` o `emit`.

**Componente padre:**
```javascript
import { provide, ref } from 'vue';

const mensaje = ref('Hola desde el padre');
provide('mensaje', mensaje);
```

**Componente hijo:**
```javascript
import { inject } from 'vue';

const mensaje = inject('mensaje');
```

## `onMounted()` – Ciclo de vida
`onMounted()` se ejecuta cuando el componente ha sido montado.

```javascript
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Componente montado');
});
```

