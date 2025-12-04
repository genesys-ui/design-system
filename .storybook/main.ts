import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'node:path';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../pages/Home.mdx',
    '../pages/DesignPrinciples.mdx',
    // '../pages/Resources.mdx',
    // '../pages/overview/*.@(mdx|stories.tsx)',
    '../pages/components/**/*.@(mdx|stories.tsx)',
    '../pages/foundations/*.@(mdx|stories.tsx)',
    '../pages/patterns/**/*.@(mdx|stories.tsx)',
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
  },
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/preset-scss'),
  ],
  docs: {
    defaultName: 'Overview',
  },
  staticDirs: ['assets'],
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          'styled-components',
          '@mdx-js/react',
          '@devoinc/genesys-brand-devo',
          '@storybook/theming',
          '@devoinc/genesys-icons',
          '@devoinc/genesys-ui',
          '@storybook/addon-docs/blocks',
        ],
      },
    });
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
