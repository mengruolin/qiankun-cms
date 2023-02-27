const getChildPath = (name: string) =>
  location.origin + location.pathname + 'child' + `/${name}/`;
export const microRoutes = [
  {
    name: 'arco-design-pro-vue',
    container: '#micro-target',
    dev: '//localhost:5173',
    test: getChildPath('arco-design-pro-vue'),
    prod: getChildPath('arco-design-pro-vue'),
  },
];
