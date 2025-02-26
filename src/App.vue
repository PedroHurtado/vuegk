<script setup lang="ts">
import { reactive, ref } from 'vue';
import List from './components/carrito/List.vue';
import Carrito from './components/carrito/Carrito.vue';
import { PubSub } from './services/pubsub';
import { type Pizza } from './components/carrito/PizzzaService'
import Input from './components/input/Input.vue';
import { useInput } from './components/input/useInput';
import { provide } from 'vue';
import Layout from './components/pages/Layout.vue';
import Button from './components/slots/Button.vue';
import Dialog from './components/slots/Dialog.vue';
import Tab from './components/tabs/Tab.vue';
import PostList from './components/post/PostList.vue';
const pubsub = new PubSub<Pizza>()

const phone = reactive(useInput());

provide('carrito', pubsub)
const dialog = ref();
function handlerclick(ev:Event){
    dialog.value.open();
}
</script>

<template> 
    <Suspense>
        <PostList/>
    </Suspense>
    
    <!--
    <Button @click="handlerclick($event)">Abrir dialog</Button>
    <Dialog ref="dialog">
        <input>
        <input>
        <input>
        <input v-focus>
    </Dialog>
    <Tab/>
     <Button @click="handlerclick($event)">Abrir dialog</Button>
    <Dialog ref="dialog">
        <h1>Dialog</h1>
        <p>Contenido del dialog</p>
    </Dialog>
    <Layout/>
    <Input v-model="phone.value" label="Teléfono" id="phone" />
    {{ phone.value }}
    <Carrito/>    
    <List/>    
    -->
</template>

