import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FloatingHelper } from '@devoinc/genesys-ui';

FloatingHelper.displayName = 'FloatingHelper';

const meta: Meta<React.ComponentProps<typeof FloatingHelper>> = {
  title: 'Components/FloatingHelper',
  component: FloatingHelper,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof FloatingHelper>>;

export const Example: Story = {
  args: {
    status: 'help',
    size: 'md',
    message: 'This is a floating helper message',
  },
  tags: ['isHidden'],
};
