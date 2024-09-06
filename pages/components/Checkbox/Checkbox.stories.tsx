import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@devoinc/genesys-ui';

Checkbox.displayName = 'Checkbox';
const meta: Meta<React.ComponentProps<typeof Checkbox>> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Checkbox>>;

export const Example: Story = {
  args: {
    label: 'Checkbox label',
    size: 'md',
    status: 'base',
  },
  tags: ['isHidden'],
};
