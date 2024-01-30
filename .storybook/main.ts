import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
  },
  stories: [
    '../pages/Home.mdx',
    '../pages/DesignPrinciples.mdx',
    '../pages/Resources.mdx',
    '../pages/overview/*.@(mdx|stories.tsx)',
    '../pages/components/**/*.@(mdx|stories.tsx)',
    '../pages/foundations/*.@(mdx|stories.tsx)',
    '../pages/patterns/*.@(mdx|stories.tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-toolbars',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
  ],
  staticDirs: ['assets'],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: 'tag',
  },
};

export default config;
