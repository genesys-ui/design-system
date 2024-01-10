import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@devoinc/genesys-ui-form';

Checkbox.displayName = 'Checkbox';
const meta: Meta<React.ComponentProps<typeof Checkbox>> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Checkbox>>;

export const Example: Story = {
  // PENDING
  args: {},
};
