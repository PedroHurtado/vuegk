<script setup lang="ts">
import { useQuery } from "@/services/usequery";

interface Post {
  id: string;
  title: string;
}

const url = "https://my-json-server.typicode.com/typicode/demo/posts"
const { data, error } = await useQuery<Post[]>(url);

;
</script>

<template>
  <div>
    <h1>Post List</h1>    
    <p v-if="error">Error: {{error}}</p>
    <ul v-if="data">
      <li v-for="p in data" :key="p.id">{{ p.title }}</li>
    </ul>
  </div>
</template>
