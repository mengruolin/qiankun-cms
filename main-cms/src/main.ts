import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { qiankunRegister } from '@/qiankun';

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import i18n from './locale';

import App from './App.vue';
import router from './router';
import '@/assets/styles/index.scss';

qiankunRegister();

const app = createApp(App);
app.use(createPinia());
app.use(ArcoVue);
app.use(router);

app.use(i18n);
app.mount('#main-app');
