<template>
  <template v-if="menu.child && menu.child.length">
    <a-sub-menu :key="key">
      <template #icon v-if="menu.icon"></template>
      <template #title>{{ menu.name }}</template>

      <recursion-menu
        v-for="child of menu.child"
        :key="child.path"
        :menu="child"
        :prefix="key"
      />
    </a-sub-menu>
  </template>
  <template v-else>
    <a-menu-item :key="key">{{ menu.name }}</a-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { UserMenu } from '@/store/modulers/user/types';
import { toRefs } from 'vue';

const props = defineProps<{
  menu: UserMenu;
  prefix?: string;
}>();

const { menu, prefix } = toRefs(props);

const key = prefix?.value
  ? prefix.value + '/' + menu.value.path
  : menu.value.path;
</script>
