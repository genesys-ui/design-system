import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { EmptyState } from '@devoinc/genesys-ui';

EmptyState.displayName = 'EmptyState';
const meta: Meta<React.ComponentProps<typeof EmptyState>> = {
  title: 'Patterns/Components/EmptyState',
  component: EmptyState,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof EmptyState>>;

export const Example: Story = {
  args: {
    //size: 'md',
    status: 'base',
    format: 'featured',
    primaryText: 'Empty state title',
    secondaryText: 'Empty state description',
  },
  tags: ['isHidden'],
};
