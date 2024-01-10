import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Partitions } from '@devoinc/genesys-ui';

Partitions.displayName = 'Partitions';

const meta: Meta<React.ComponentProps<typeof Partitions>> = {
  title: 'Components/Partitions',
  component: Partitions,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Partitions>>;

export const Example: Story = {
  // PENDING
  args: {},
};
