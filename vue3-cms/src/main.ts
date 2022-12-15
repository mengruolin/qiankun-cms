import './public-path';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let instance: any = null;
function render(props: any = {}) {
  const { container } = props;

  instance = createApp(App);
  instance
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app');
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props: any) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHtml = '';
  instance = null;
}
