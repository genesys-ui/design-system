import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Helper } from '@devoinc/genesys-ui';

Helper.displayName = 'Helper';

const meta: Meta<React.ComponentProps<typeof Helper>> = {
  title: 'Components/Helper',
  component: Helper,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Helper>>;

export const Example: Story = {
  // PENDING
  args: {},
};
