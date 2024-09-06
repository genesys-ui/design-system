import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InlineMessage, Typography } from '@devoinc/genesys-ui';

InlineMessage.displayName = 'InlineMessage';

const meta: Meta<React.ComponentProps<typeof InlineMessage>> = {
  title: 'Components/InlineMessage',
  component: InlineMessage,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof InlineMessage>>;

export const Example: Story = {
  args: {
    status: 'help',
    children: (
      <InlineMessage.Panel>
        <Typography.Paragraph>This is an inline message</Typography.Paragraph>
      </InlineMessage.Panel>
    ),
    trigger: {
      size: 'md',
    },
  },
  tags: ['isHidden'],
};
