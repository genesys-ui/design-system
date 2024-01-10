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
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      savePropValueAsString: true,
      // Required to show values from type declarations coming from node_modules.
      // Overrides the default value of `react-docgen-typescript` which is
      // '(prop) => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true'
      propFilter: () => true,
    },
    check: true,
  },
};

export default config;
