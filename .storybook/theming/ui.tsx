import { create } from 'storybook/theming';

// import { PREFER_THEME } from './constants';

const uiLightTheme = create({
  base: 'light',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
  textColor: '#5B6870',
  textInverseColor: 'rgba(255,255,255,0.9)',
});

const uiDarkTheme = create({
  base: 'dark',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
});

export const uiThemeMap = {
  light: uiLightTheme,
  dark: uiDarkTheme,
};

export const PREFER_UI_THEME = uiThemeMap.light; // uiThemeMap[PREFER_THEME];
