import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import personalView from "@/views/PersonalView.vue";
import AboutView from '../views/AboutView.vue';
import OrderView from "../views/OrderView.vue";
import StoreView from "@/views/StoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: personalView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/store',
      name: 'store',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StoreView.vue')
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HobbyView.vue')
    }
  ]
})

export default router
