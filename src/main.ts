import './assets/main.css'
import mitt from 'mitt';
import { createApp } from 'vue'
import App from './App.vue'
import router from './components/pages/router'

const emmiter = mitt();
const app = createApp(App);

app.use(router);

app.mount('#app')
