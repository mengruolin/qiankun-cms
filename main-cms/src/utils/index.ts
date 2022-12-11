export const getLocalTheme = () => {
  const theme = localStorage.getItem('main:theme') || 'light';

  return setLocalTheme(theme);
};

export const setLocalTheme = (theme = 'light') => {
  localStorage.setItem('main:theme', theme);

  if (theme === 'dark') {
    document.documentElement.classList.add(theme);
    document.body.setAttribute('arco-theme', theme);
  } else {
    document.documentElement.classList.remove('dark');
    document.body.removeAttribute('arco-theme');
  }

  return theme;
};
