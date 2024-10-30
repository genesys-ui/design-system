import { ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { light, dark } from '@devoinc/genesys-brand-devo';
import { ThemeProvider } from 'styled-components';

// import { PREFER_THEME } from './constants';

export const themeDecorator = withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light,
    dark,
  },
  defaultTheme: 'light', // PREFER_THEME,
  Provider: ThemeProvider,
});
