import { createRouter, createWebHistory } from 'vue-router';
import Point01View from '../views/Point01View.vue';
import Point02View from '../views/Point02View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //component: HomeView
      component: () => import('../views/Point01View.vue')
    },
    {
      path: '/punto02',
      name: 'punto02',      
      component: () => import('../views/Point02View.vue')
    },
    {
      path: '/punto03',
      name: 'punto03',      
      component: () => import('../views/Point03View.vue')
    },
    {
      path: '/punto04',
      name: 'punto04',      
      component: () => import('../views/Point04View.vue')
    },
    {
      path: '/punto05',
      name: 'punto05',      
      component: () => import('../views/Point05View.vue')
    },
    {
      path: '/punto06',
      name: 'punto06',      
      component: () => import('../views/Point06View.vue')
    }
  ]
})

export default router
