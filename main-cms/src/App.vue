<template>
  <a-config-provider :locale="config.locale">
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';

const config = reactive({
  locale: enUS,
});
</script>
