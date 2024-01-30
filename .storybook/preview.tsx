import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Preview } from '@storybook/react';
import { create } from '@storybook/theming/create';

import * as brand from '@devoinc/genesys-brand-devo';

import '@devoinc/genesys-base-styles/dist/styles.min.css';
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

// styles for documentation
import { DocsContainerDefault } from '../blocks';

const customTheme = create({
  base: 'light',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
  // Text colors
  textColor: '#5B6870',
  textInverseColor: 'rgba(255,255,255,0.9)',
});

const preview: Preview = {
  decorators: [
    // Themes
    (Story, context) => (
      <ThemeProvider theme={brand[context.globals.theme] ?? {}}>
        <Story />
      </ThemeProvider>
    ),
  ],

  parameters: {
    docs: {
      theme: customTheme,
      container: DocsContainerDefault,
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

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        // array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
      },
    },
  },
};

export default preview;
