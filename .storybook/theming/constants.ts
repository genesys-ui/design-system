export const PREFER_THEME =
  window?.matchMedia &&
  window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    ? 'dark'
    : 'light';
