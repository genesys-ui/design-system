import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

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
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
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
    async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          'styled-components',
          '@devoinc/genesys-brand-devo',
          '@storybook/theming',
          '@devoinc/genesys-icons',
          '@devoinc/genesys-ui',
          '@storybook/blocks',
        ],
      },
    });
  },
};

export default config;
