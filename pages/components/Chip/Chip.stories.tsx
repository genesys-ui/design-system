import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@devoinc/genesys-ui';

Chip.displayName = 'Chip';
const meta: Meta<React.ComponentProps<typeof Chip>> = {
  title: 'Components/Chip',
  component: Chip,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Chip>>;

export const Example: Story = {
  // PENDING
  args: {},
};
