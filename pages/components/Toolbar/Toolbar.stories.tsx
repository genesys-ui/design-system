import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '@devoinc/genesys-ui';

Toolbar.displayName = 'Toolbar';

const meta: Meta<React.ComponentProps<typeof Toolbar>> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Toolbar>>;

export const Example: Story = {
  // PENDING
  args: {},
};
