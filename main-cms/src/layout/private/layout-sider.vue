<template>
  <div class="layout-sider">
    <a-menu
      :selected-keys="[userStore.siderMenuKey]"
      show-collapse-button
      @menu-item-click="onMenuItemClick"
    >
      <recursion-menu
        v-for="menu of userStore.asiderMenuList"
        :key="menu.path"
        :menu="menu"
      />
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import recursionMenu from './recursion-menu.vue';
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter();

const userStore = useUserStore();

const onMenuItemClick = (path: string) => {
  if (/^http(s)/.test(path)) {
    window.open(path);
    return;
  }
  router.push(userStore.headerMenuKey + path);
};
</script>

<style lang="scss">
.layout-sider {
  background-color: var(--color-bg-2);
  border-right: 1px solid var(--color-border);
  .arco-menu {
    width: $layout-sider-width;
    height: 100%;
  }
  .arco-menu-collapsed {
    width: 48px;
  }
}
</style>
