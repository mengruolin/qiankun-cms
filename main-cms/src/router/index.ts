import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import { isLogin } from '@/utils';
import { useUserStore } from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'login',
        component: () => import('@/views/login/index.vue'),
      },
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

router.beforeEach(async (to, form, next) => {
  const userStore = useUserStore();

  if (to.path === '/login') {
    if (isLogin()) {
      next('/');
    } else {
      next();
    }
  } else {
    if (isLogin()) {
      if (!userStore.menuList.length) {
        await userStore.getUserMenu();
      }

      if (to.path === '/') {
        next(userStore.headerMenuList[0].path);
      } else if (/^\/microApp/.test(to.path)) {
        userStore.changeRoute(to.path);
      }

      next();
    } else {
      next(`/login?redirection=${to.path}`);
    }
  }
});

export default router;
