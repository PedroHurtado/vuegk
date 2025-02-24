<script setup lang="ts">
import { useCart } from './useCart';
const { total, totalPrice } = useCart();
</script>

<template>
  <div>
    <h2>Carrito de Pizzas</h2>
    <p>Total de pizzas: {{ total }}</p>
    <p>Precio total: {{ totalPrice }} €</p>
   
  </div>
</template>
