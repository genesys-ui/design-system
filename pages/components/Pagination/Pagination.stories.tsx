import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@devoinc/genesys-ui';

Pagination.displayName = 'Pagination';

const meta: Meta<React.ComponentProps<typeof Pagination>> = {
  title: 'Components/Pagination',
  component: Pagination,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Pagination>>;

export const Example: Story = {
  // PENDING
  args: {},
};
