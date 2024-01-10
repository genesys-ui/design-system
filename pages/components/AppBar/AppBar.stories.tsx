import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from '@devoinc/genesys-ui';

AppBar.displayName = 'AppBar';
const meta: Meta<React.ComponentProps<typeof AppBar>> = {
  title: 'Components/AppBar',
  component: AppBar,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof AppBar>>;

export const Example: Story = {
  // PENDING
  args: {},
};
