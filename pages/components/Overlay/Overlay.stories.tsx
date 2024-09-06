import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Overlay, Typography } from '@devoinc/genesys-ui';
import { lorem, lorem2, lorem3 } from '../../../utils';

Overlay.displayName = 'Overlay';

const meta: Meta<React.ComponentProps<typeof Overlay>> = {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Overlay>>;

export const Example: Story = {
  args: {
    bgColorScheme: 'light',
  },
  render: (args) => (
    <Box position="relative">
      <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Typography.Paragraph>{lorem3}</Typography.Paragraph>
      <Overlay {...args}>Children of Overlay</Overlay>
    </Box>
  ),
  tags: ['isHidden'],
};
