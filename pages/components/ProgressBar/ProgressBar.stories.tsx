import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '@devoinc/genesys-ui';

ProgressBar.displayName = 'ProgressBar';

const meta: Meta<React.ComponentProps<typeof ProgressBar>> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ProgressBar>>;

export const Example: Story = {
  args: {
    percent: 40,
    size: 'md',
    status: 'progressing',
  },
  tags: ['isHidden'],
};
