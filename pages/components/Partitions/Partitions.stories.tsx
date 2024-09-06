import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Partitions } from '@devoinc/genesys-ui';

Partitions.displayName = 'Partitions';

const meta: Meta<React.ComponentProps<typeof Partitions>> = {
  title: 'Components/Partitions',
  component: Partitions,
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Partitions>>;

export const Example: Story = {
  args: {
    size: 'md',
    hasSeparators: false,
  },
  tags: ['isHidden'],
};
