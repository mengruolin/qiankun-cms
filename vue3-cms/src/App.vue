<template>
  <nav>
    <router-link :to="`${routePrefix}/`">Home</router-link> |
    <router-link :to="`${routePrefix}/about`">About</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts" setup>
import { routePrefix } from '@/router';
</script>
