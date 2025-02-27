<script setup lang="ts">
import { ref } from "vue";
import { useQuery } from "@/services/usequery";

interface Post {
  id: string;
  title: string;
}

const getUrl=(page:number)=>{
  return `https://my-json-server.typicode.com/typicode/demo/posts/${page}`;
}
const page = ref(1);
const url = ref(getUrl(page.value));

const { data, error, loading } = useQuery<Post>(url);


const nextPage = () => {
  if(!error.value){
    page.value++;
    url.value = getUrl(page.value);
  }  
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    url.value = getUrl(page.value);
  }
};
</script>

<template>
  <div>
    <h1>Post List</h1>
    <p v-if="error">Error: {{ error.message }}</p>
    <p v-if="loading">Loading...</p>
    <div v-if="data">{{data.title }}</div>
    <div>
      <button @click="prevPage" :disabled="page === 1">Anterior</button>
      <button @click="nextPage">Siguiente</button>
    </div>
  </div>
</template>
