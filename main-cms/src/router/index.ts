import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'microApp/:pathMatch(.*)*',
        component: () => import('@/layout/child-view.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
