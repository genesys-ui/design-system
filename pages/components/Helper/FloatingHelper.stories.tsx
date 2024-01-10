import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FloatingHelper } from '@devoinc/genesys-ui';

FloatingHelper.displayName = 'FloatingHelper';

const meta: Meta<React.ComponentProps<typeof FloatingHelper>> = {
  title: 'Components/FloatingHelper',
  component: FloatingHelper,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof FloatingHelper>>;

export const Example: Story = {
  // PENDING
  args: {},
};
