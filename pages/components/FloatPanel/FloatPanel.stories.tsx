import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FloatPanel } from '@devoinc/genesys-ui';

FloatPanel.displayName = 'FloatPanel';

const meta: Meta<React.ComponentProps<typeof FloatPanel>> = {
  title: 'Components/FloatPanel',
  component: FloatPanel,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof FloatPanel>>;

export const Example: Story = {
  // PENDING
  args: {},
};
