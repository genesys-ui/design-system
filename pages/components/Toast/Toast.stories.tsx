import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ToastContainer } from '@devoinc/genesys-ui';

ToastContainer.displayName = 'Toast';

const meta: Meta<React.ComponentProps<typeof ToastContainer>> = {
  title: 'Components/Toast',
  component: ToastContainer,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ToastContainer>>;

export const Example: Story = {
  // PENDING
  args: {},
};
