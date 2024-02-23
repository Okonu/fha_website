// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeViewFounders.vue';
import HomeViewInvestors from '../views/HomeViewInvestors.vue';
import Dashboard from '../views/Auth/Dashboard.vue';
import Login from '../views/Auth/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/investors',
      name: 'home investors',
      component: HomeViewInvestors,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    // Uncomment and adjust the lazy loading example as needed
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // }
  ],
});

export default router;
