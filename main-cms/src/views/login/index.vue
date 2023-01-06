<template>
  <div class="main-login">
    <div class="main-login__left">
      <div class="main-login__left__logo">
        <img alt="logo" src="@/assets/svgs/logo.svg" />
        <span>Arco Design Pro</span>
      </div>
      <login-banner />
    </div>

    <div class="main-login__right">
      <login-form />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginBanner from './components/login-banner.vue';
import LoginForm from './components/login-form.vue';
</script>

<style lang="scss">
.main-login {
  display: flex;
  width: 100vw;
  height: 100vh;

  &__left {
    position: relative;
    flex: 3;
    background: linear-gradient(160deg, #1d2129, #00308f);

    &__logo {
      position: fixed;
      top: 24px;
      left: 22px;
      z-index: 1;
      display: inline-flex;
      align-items: center;

      img {
        width: 33px;
        height: 33px;
      }

      span {
        margin-right: 4px;
        margin-left: 4px;
        color: var(--color-fill-1);
        font-size: 20px;
      }
    }
  }

  &__right {
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
