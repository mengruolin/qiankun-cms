import {
  MicroAppStateActions,
  registerMicroApps,
  runAfterFirstMounted,
  initGlobalState,
} from 'qiankun';
import { reactive } from 'vue';
import { microRoutes } from './config';

const model = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

const getActiveRule = (hash: string) => (location: Location) =>
  location.hash.startsWith(hash);

const routes = microRoutes.map((route) => {
  const entry = route[model];

  return {
    name: route.name,
    entry,
    container: route.container,
    activeRule: getActiveRule(`#/microApp/${route.name}`),
    props: {},
  };
});

const qiankunState = reactive({
  routes: [],
  config: {},
});

export const qiankunActions: MicroAppStateActions =
  initGlobalState(qiankunState);

export const setGlobalState = (callback: any) => {
  typeof callback === 'function' && callback(qiankunState);
  qiankunActions.setGlobalState(qiankunState);
};

export const qiankunRegister = () => {
  registerMicroApps(routes, {
    beforeLoad: (app: any) => {
      console.log(app);
    },
    afterMount: () => {
      console.log('afterMount');
    },
  } as any);

  runAfterFirstMounted(() => {
    console.log('firstMount');
  });
};
