import { getLocalTheme, setLocalTheme } from '@/utils';
import { defineStore } from 'pinia';
import { MainState, ThemeType } from './types';

export const useMainStore = defineStore('main', {
  state: (): MainState => ({
    theme: getLocalTheme(),
  }),

  actions: {
    setTheme(theme: ThemeType) {
      this.theme = setLocalTheme(theme);
    },
  },
});
