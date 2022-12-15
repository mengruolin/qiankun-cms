const { defineConfig } = require('@vue/cli-service');

const packageName = require('./package.json').name;

const isProduction = process.env.NODE_ENV === 'production';
const publicPath = isProduction ? './' : `//localhost:${process.env.PORT}`;

module.exports = defineConfig({
  publicPath,

  transpileDependencies: true,

  lintOnSave: 'warning',

  outputDir: packageName,

  productionSourceMap: false,

  configureWebpack: {
    output: {
      library: {
        name: `${packageName}-[name]`,

        type: 'umd',

        umdNamedDefine: true,
      },

      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
