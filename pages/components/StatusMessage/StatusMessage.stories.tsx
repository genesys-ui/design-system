import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { StatusMessage } from '@devoinc/genesys-ui';
import { lorem } from '../../../utils';

StatusMessage.displayName = 'StatusMessage';

const meta: Meta<React.ComponentProps<typeof StatusMessage>> = {
  title: 'Components/StatusMessage',
  component: StatusMessage,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof StatusMessage>>;

export const Example: Story = {
  args: {
    title: 'Status message',
    description: lorem,
    status: 'base',
  },
  tags: ['isHidden'],
};
