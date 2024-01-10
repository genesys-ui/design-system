import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InlineMessage } from '@devoinc/genesys-ui';

InlineMessage.displayName = 'InlineMessage';

const meta: Meta<React.ComponentProps<typeof InlineMessage>> = {
  title: 'Components/InlineMessage',
  component: InlineMessage,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof InlineMessage>>;

export const Example: Story = {
  // PENDING
  args: {},
};
