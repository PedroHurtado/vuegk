import './assets/main.css'
import mitt from 'mitt';
const emmiter = mitt();
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
app.config.globalProperties.$bus = emmiter;
app.mount('#app')
