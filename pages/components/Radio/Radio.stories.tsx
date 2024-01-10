import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Radio } from '@devoinc/genesys-ui-form';

Radio.displayName = 'Radio';

const meta: Meta<React.ComponentProps<typeof Radio>> = {
  title: 'Components/Radio',
  component: Radio,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Radio>>;

export const Example: Story = {
  // PENDING
  args: {},
};
