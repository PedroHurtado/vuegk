<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  modelValue: String, // Cambiado de 'state' a 'modelValue'
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="control">
    <label :for="id">{{ label }}</label>
    <input 
      :id="id" 
      type="text" 
      :value="modelValue" 
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
    />
  </div>
</template>

<style scoped>
.control {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: max-content;
}
</style>
