import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Radio } from '@devoinc/genesys-ui';

Radio.displayName = 'Radio';

const meta: Meta<React.ComponentProps<typeof Radio>> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Radio>>;

export const Example: Story = {
  args: {
    label: 'Radio label',
    status: 'base',
    size: 'md',
    disabled: false,
  },
  tags: ['isHidden'],
};
