import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: ()=>import('./Page1.vue'),
      },
      {
        path: '/page2',
        component: ()=>import('./Page2.vue'),
      },
      {
        path: '/page3',
        component: ()=>import('./Page3.vue'),
      },
    ],
  })