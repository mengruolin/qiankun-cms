import { clearToken, isLogin, setToken } from '@/utils';
import { defineStore } from 'pinia';
import { UserState } from './types';
import { api_getUserMenu, api_login, loginRequestParams } from '@/api/user-api';
import { Message } from '@arco-design/web-vue';

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: '',

    menuList: [],
  }),

  actions: {
    async login(data: loginRequestParams) {
      // return new Promise(async (resolve, reject) => {
      try {
        const loginInfo = await api_login(data);
        setToken(loginInfo.data.token);
        await this.getUserMenu();

        if (this.menuList.length) {
          return Promise.resolve(true);
        } else {
          clearToken();
          Message.error('请联系管理员配置菜单权限！');
          return Promise.resolve(false);
        }
      } catch (error) {
        return Promise.reject(error);
      }
      // });
    },
    logout() {
      if (!isLogin) return;
      clearToken();
    },

    getUserMenu() {
      return new Promise((resolve, reject) => {
        api_getUserMenu()
          .then((res) => {
            this.menuList = res.data || [];
            resolve(this.menuList);
          })
          .catch((error) => reject(error));
      });
    },
  },
});
