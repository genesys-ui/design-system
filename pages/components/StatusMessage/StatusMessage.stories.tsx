import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { StatusMessage } from '@devoinc/genesys-ui';

StatusMessage.displayName = 'StatusMessage';

const meta: Meta<React.ComponentProps<typeof StatusMessage>> = {
  title: 'Components/StatusMessage',
  component: StatusMessage,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof StatusMessage>>;

export const Example: Story = {
  // PENDING
  args: {},
};
