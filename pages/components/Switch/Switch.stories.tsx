import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@devoinc/genesys-ui';

Switch.displayName = 'Switch';

const meta: Meta<React.ComponentProps<typeof Switch>> = {
  title: 'Components/Switch',
  component: Switch,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Switch>>;

export const Example: Story = {
  // PENDING
  args: {},
};
