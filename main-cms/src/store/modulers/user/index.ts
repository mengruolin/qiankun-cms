import { clearToken, isLogin, setToken } from '@/utils';
import { defineStore } from 'pinia';
import { UserState } from './types';
import {
  api_getUserInfo,
  api_getUserMenu,
  api_login,
  loginRequestParams,
} from '@/api/user-api';
import { Message } from '@arco-design/web-vue';

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    menuList: [],

    headerMenuKey: null,
    siderMenuKey: null,

    userInfo: null,
  }),

  getters: {
    headerMenuList: (state) =>
      state.menuList.filter((menu) => menu.disabled === false) || [],

    asiderMenuList: (state) =>
      state.menuList.find((menu: any) => menu.path === state.headerMenuKey)
        ?.child || [],
  },

  actions: {
    async login(data: loginRequestParams) {
      try {
        const loginInfo = await api_login(data);
        setToken(loginInfo.data.token);
        const okLogin = await this.getUserMenu();

        return Promise.resolve(okLogin);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    logout() {
      if (!isLogin) return;
      clearToken();
    },

    async getUserMenu() {
      try {
        const res = await api_getUserMenu();
        const menuList = res.data || [];

        this.menuList = menuList;

        if (this.headerMenuList.length) {
          return Promise.resolve(true);
        } else {
          clearToken();
          Message.error('请联系管理员配置菜单权限！');
          return Promise.resolve(false);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async getUserInfo() {
      try {
        const res = await api_getUserInfo();
        const userInfo = res.data || {};

        this.userInfo = userInfo;
        return Promise.resolve(userInfo);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    changeRoute(path: string) {
      const pathArray = path.split('/');

      this.headerMenuKey = pathArray.slice(0, 3).join('/') || null;
      this.siderMenuKey = '/' + pathArray.slice(3).join('/') || null;
    },
  },
});
