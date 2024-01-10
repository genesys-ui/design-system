import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@devoinc/genesys-ui';

Menu.displayName = 'Menu';

const meta: Meta<React.ComponentProps<typeof Menu>> = {
  title: 'Components/Menu',
  component: Menu,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Menu>>;

export const Example: Story = {
  // PENDING
  args: {},
};
