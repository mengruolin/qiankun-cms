import { clearToken, isLogin } from '@/utils';
import { defineStore } from 'pinia';
import { UserState } from './types';

export const useUserStore = defineStore('main', {
  state: (): UserState => ({
    name: '',
  }),

  actions: {
    logout() {
      if (!isLogin) return;
      clearToken();
    },
  },
});
