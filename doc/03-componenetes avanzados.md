# Componentes Avanzado de Vue.js

## 1. Slots Avanzados
### 1.1 Named Slots
Los named slots permiten definir múltiples puntos de inserción dentro de un componente para personalizar su contenido desde el componente padre.

#### Ejemplo:
```vue
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
```
Uso:
```vue
<MyComponent>
  <template #header>
    <h1>Encabezado</h1>
  </template>
  <p>Contenido principal</p>
  <template #footer>
    <p>Pie de página</p>
  </template>
</MyComponent>
```

### 1.2 Scoped Slots
Los scoped slots permiten pasar datos desde un componente hijo al componente padre, para que este pueda decidir cómo renderizarlos.

#### Ejemplo:
```vue
<template>
  <div>
    <slot :data="info"></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const info = ref('Información del hijo');
</script>
```
Uso:
```vue
<MyComponent v-slot="slotProps">
  <p>{{ slotProps.data }}</p>
</MyComponent>
```

## 2. Render Functions
Las render functions permiten construir componentes de forma programática sin usar templates.

#### Ejemplo:
```vue
<script lang="ts" setup>
import { h, defineComponent } from 'vue';
export default defineComponent({
  render() {
    return h('div', {}, [
      h('h1', 'Hola Mundo'),
      h('p', 'Este es un párrafo generado dinámicamente.')
    ]);
  }
});
</script>
```

## 3. Directivas Personalizadas
Las directivas personalizadas permiten modificar el comportamiento del DOM directamente.

#### Ejemplo:
```vue
<script lang="ts" setup>
import { Directive } from 'vue';
const vFocus: Directive = {
  mounted(el) {
    el.focus();
  }
};
</script>
```
Uso:
```vue
<input v-focus>
```

## 4. Mixins y Composición con la API Composition
### 4.1 Mixins
Los mixins permiten reutilizar lógica en múltiples componentes.

#### Ejemplo:
```vue
<script lang="ts">
import { defineComponent } from 'vue';
export const myMixin = defineComponent({
  data() {
    return { mensaje: 'Hola desde mixin' };
  },
  methods: {
    saludar() {
      console.log(this.mensaje);
    }
  }
});
</script>
```
Uso:
```vue
<script lang="ts" setup>
import { myMixin } from './mixins';
const mixinInstance = myMixin;
mixinInstance.methods?.saludar();
</script>
```

### 4.2 API Composition
La API Composition permite organizar mejor la lógica en Vue 3 usando `setup`.

#### Ejemplo:
```vue
<script lang="ts" setup>
import { ref } from 'vue';
const mensaje = ref('Hola desde Composition API');
</script>

<template>
  <p>{{ mensaje }}</p>
</template>
```

## 5. Patrones de Diseño en Vue.js
### 5.1 Componente Contenedor vs. Componente Presentacional
Los componentes contenedores manejan la lógica, mientras que los presentacionales solo renderizan la interfaz.

#### Ejemplo:
_Componente contenedor:_
```vue
<template>
  <PresentationalComponent :items="items" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import PresentationalComponent from './PresentationalComponent.vue';
const items = ref(['Elemento 1', 'Elemento 2']);
</script>
```

_Componente presentacional:_
```vue
<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{ items: string[] }>();
</script>
```

### 5.2 Otros Patrones Comunes
- **Provide/Inject:** Permite compartir datos entre componentes sin necesidad de props.

#### Ejemplo:
```vue
<script lang="ts" setup>
import { provide, ref } from 'vue';
const message = ref('Mensaje compartido');
provide('sharedMessage', message);
</script>
```

- **Renderless Components:** Componentes que exponen funcionalidad sin renderizar nada directamente.

#### Ejemplo:
```vue
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
const count = ref(0);
const emit = defineEmits(['update']);
const increment = () => {
  count.value++;
  emit('update', count.value);
};
</script>
```

Uso:
```vue
<RenderlessCounter @update="(val) => console.log(val)" />
```

- **Factory Pattern:** Útil para crear componentes con configuraciones dinámicas.

#### Ejemplo:
```vue
<script lang="ts" setup>
import { defineComponent, h } from 'vue';
export function createComponent(tag: string, content: string) {
  return defineComponent({
    render() {
      return h(tag, content);
    }
  });
}
</script>
```

Uso:
```vue
<script lang="ts" setup>
import { createComponent } from './factory';
const DynamicComponent = createComponent('h1', 'Componente dinámico');
</script>

<template>
  <DynamicComponent />
</template>
```

