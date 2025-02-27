import './assets/main.css'
import mitt from 'mitt';
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './components/pages/router'

const emmiter = mitt();
const pinia = createPinia()
const app = createApp(App);
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});
app.use(pinia);
app.use(router);

app.mount('#app')
