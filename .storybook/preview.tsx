import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Preview, ReactRenderer } from '@storybook/react';
import { DocsContainer } from '@storybook/blocks';
import { create } from '@storybook/theming/create';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { light, dark } from '@devoinc/genesys-brand-devo';

import '@devoinc/genesys-base-styles/dist/css/styles.min.css';
import './preview.scss';

type ComponentsMap = {
  [key in keyof Partial<React.ReactHTML>]: React.FC<any>;
};

export const createCustomComponents = (tagsList: (keyof React.ReactHTML)[]) => {
  return tagsList.reduce<ComponentsMap>((acc, tag) => {
    acc[tag] = ({ children, ...props }) => {
      const CUSTOM_CLASSES = `sbdocs sbdocs-${tag}`;
      const className = `${CUSTOM_CLASSES} ${props.className || ''}`;
      return React.createElement(tag, { ...props, className }, children);
    };
    return acc;
  }, {});
};

const customLightTheme = create({
  base: 'light',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
  textColor: '#5B6870',
  textInverseColor: 'rgba(255,255,255,0.9)',
});
const customDarkTheme = create({
  base: 'dark',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
});

// const THEME_CHANNEL = 'globalsUpdated';

const preferTheme =
  window?.matchMedia &&
  window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    ? 'dark'
    : 'light';

const preview: Preview = {
  decorators: [
    // Themes
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light,
        dark,
      },
      defaultTheme: preferTheme,
      Provider: ThemeProvider,
    }),
  ],

  parameters: {
    docs: {
      theme: preferTheme === 'dark' ? customDarkTheme : customLightTheme,
      container: ({ context, children }) => {
        return (
          // Theme for the doc
          <div className="dali-wrapper dali-wrapper--default">
            <DocsContainer context={context}>
              <ThemeProvider theme={light}>{children}</ThemeProvider>
            </DocsContainer>
          </div>
        );
      },
      components: createCustomComponents([
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'a',
        'ul',
        'ol',
        'li',
        'blockquote',
        'hr',
        'img',
        'pre',
        'code',
        'em',
        'small',
        'strong',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
      ]),
      toc: {
        contentsSelector: '.sbdocs-content',
        toc: true,
        headingSelector: 'h2, h3',
        title: 'Table of Contents',
      },
    },
    options: {
      showPanel: false,
      panelPosition: 'right',
      storySort: {
        order: [
          'Home',
          'Design principles',
          'Resources',
          'Foundations',
          ['Overview'],
          'Components',
          ['Overview'],
          'Patterns',
          ['Overview'],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
