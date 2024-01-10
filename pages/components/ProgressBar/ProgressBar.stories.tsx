import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '@devoinc/genesys-ui';

ProgressBar.displayName = 'ProgressBar';

const meta: Meta<React.ComponentProps<typeof ProgressBar>> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  // PENDING
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ProgressBar>>;

export const Example: Story = {
  // PENDING
  args: {},
};
