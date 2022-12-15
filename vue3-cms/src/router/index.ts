import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

export const routePrefix = `/microApp/vue3-cms`;

const routes: Array<RouteRecordRaw> = [
  {
    path: `/${routePrefix}`,
    name: 'home',
    component: HomeView,
  },
  {
    path: `${routePrefix}/about`,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
