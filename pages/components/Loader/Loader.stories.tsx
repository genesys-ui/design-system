import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Loader, Typography } from '@devoinc/genesys-ui';
import { lorem, lorem2, lorem3 } from '../../../utils';

Loader.displayName = 'Loader';

const meta: Meta<React.ComponentProps<typeof Loader>> = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    type: {
      control: 'radio',
      options: ['spinner', 'progress', 'global'],
    },
    children: {
      table: {
        disable: true,
      },
    },
    colorScheme: {
      control: 'radio',
      options: ['dark', 'light', 'inherited'],
      table: {
        defaultValue: { summary: 'inherited' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Loader>>;

export const Example: Story = {
  args: {
    colorScheme: 'inherited',
    size: 'md',
    type: 'spinner',
    zIndex: 10,
  },
  render: (args) => (
    <Box position="relative">
      <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem3}
      </Typography.Paragraph>
      <Loader
        {...args}
        colorScheme={args.type === 'global' ? 'dark' : args.colorScheme}
        fixed={args.type === 'global'}
      >
        {args.type === 'spinner' ? (
          <Loader.Spinner />
        ) : args.type === 'progress' ? (
          <Loader.ProgressBar percent={24} />
        ) : (
          <Loader.DevoLogoSpinner />
        )}
      </Loader>
    </Box>
  ),
  tags: ['isHidden'],
};
