import * as React from 'react';
import { Preview } from '@storybook/react-vite';
import { PREFER_UI_THEME, DocContainer, themeDecorator } from './theming';

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

const preview: Preview = {
  decorators: themeDecorator,
  parameters: {
    docs: {
      theme: PREFER_UI_THEME,
      container: DocContainer,
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
          [
            'Overview',
            'Color',
            'Typography',
            'Iconography',
            'Radius',
            'Spatial system',
            'Elevation hierarchy',
            'Layout',
            'Content, voice and tone',
            'CSS conventions',
          ],
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
