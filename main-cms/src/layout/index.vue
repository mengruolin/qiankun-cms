<template>
  <div v-show="isMicroApp" class="main-layout">
    <layout-header class="main-layout__header" />

    <div class="main-layout__content">
      <layout-sider />
      <div class="main-layout__main">
        <div id="micro-target"></div>
        <a-layout-footer>footer</a-layout-footer>
      </div>
    </div>
  </div>

  <router-view v-if="!isMicroApp" />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { start } from 'qiankun';
import LayoutHeader from './private/layout-header.vue';
import LayoutSider from './private/layout-sider.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isMicroApp = computed(() => /^\/microApp/.test(route.path));

onMounted(() => {
  start({ prefetch: true });
});
</script>

<style lang="scss">
.main-layout {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-2);

  &__header {
    width: 100%;
    height: $layout-header-height;
  }

  &__content {
    flex: 1;
    display: flex;
    overflow: hidden;
    background-color: var(--color-fill-2);
  }

  &__main {
    flex: 1;
    height: 100%;
    overflow: auto;
  }

  #micro-target {
    height: 100%;
  }
}
</style>
