import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BoxMessage } from '@devoinc/genesys-ui';

BoxMessage.displayName = 'BoxMessage';
const meta: Meta<React.ComponentProps<typeof BoxMessage>> = {
  title: 'Components/BoxMessage',
  component: BoxMessage,
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof BoxMessage>>;

export const Example: Story = {
  args: {
    title: 'An example of BoxMessage',
    content: 'This is the content of this BoxMessage',
    status: 'info',
  },
};

