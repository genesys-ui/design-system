import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Drawer, Typography, VFlex } from '@devoinc/genesys-ui';
import { lorem } from '../../../utils';

Drawer.displayName = 'Drawer';
const meta: Meta<React.ComponentProps<typeof Drawer>> = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Drawer>>;

export const Example: Story = {
  args: {
    children: (
      <VFlex padding="cmp-md cmp-lg">
        <Typography.Heading size="h4">Drawer</Typography.Heading>
        <Typography.Paragraph>{lorem}</Typography.Paragraph>
      </VFlex>
    ),
    position: 'right',
  },
  tags: ['isHidden'],
};
