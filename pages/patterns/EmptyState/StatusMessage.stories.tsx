import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { StatusMessage } from '@devoinc/genesys-ui';
import { lorem } from '../../../utils';
import {
  GIAbacus,
  GIErrorWarningAlertAttention,
  GIErrorWarningDangerStopFilled,
} from '@devoinc/genesys-icons';

StatusMessage.displayName = 'StatusMessage';

const meta: Meta<React.ComponentProps<typeof StatusMessage>> = {
  title: 'Patterns/Components/StatusMessage',
  component: StatusMessage,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof StatusMessage>>;

export const Example: Story = {
  args: {
    title: 'Error status message',
    description: lorem,
    status: 'error',
    icon: <GIErrorWarningDangerStopFilled />,
  },
  tags: ['isHidden'],
};
