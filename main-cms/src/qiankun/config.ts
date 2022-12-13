const getChildPath = (name: string) =>
  location.origin + location.pathname + 'child' + `/${name}/`;
export const microRoutes = [
  {
    name: 'vue3-cms',
    container: '#micro-target',
    dev: '//localhost:9991',
    test: getChildPath('vue3-cms'),
    prod: getChildPath('vue3-cms'),
  },
];
