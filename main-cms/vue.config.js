const { defineConfig } = require('@vue/cli-service');

const target =
  'https://www.fastmock.site/mock/cae3b83ea84bb07aabe832ed0cd692ea/qiankun_cms';

module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: 'warning',

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/variables.scss";`,
      },
    },
  },

  devServer: {
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
      },
    },
  },
});
