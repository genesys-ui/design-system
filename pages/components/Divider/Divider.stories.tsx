import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '@devoinc/genesys-ui';

Divider.displayName = 'Divider';

const meta: Meta<React.ComponentProps<typeof Divider>> = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Divider>>;

export const Example: Story = {
  args: {
    colorScheme: 'base',
  },
  tags: ['isHidden'],
};
