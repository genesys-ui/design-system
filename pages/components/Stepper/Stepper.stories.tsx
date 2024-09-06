import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Stepper } from '@devoinc/genesys-ui';

Stepper.displayName = 'Stepper';
const meta: Meta<React.ComponentProps<typeof Stepper>> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size to define padding, line-height, font-size... etc.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Stepper>>;

export const Example: Story = {
  args: {
    size: 'md',
    steps: [
      { name: 'OPT_1', label: 'Option 1', status: 'completed' },
      { name: 'OPT_2', label: 'Option 2', status: 'current' },
      { name: 'OPT_3', label: 'Option 3', status: 'pending' },
      { name: 'OPT_4', label: 'Option 4', status: 'disabled' },
    ],
  },
  tags: ['isHidden'],
};
